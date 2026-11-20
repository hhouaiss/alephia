// Limite simple du nombre d'envois de formulaire par adresse IP, en mémoire.
// Best effort : chaque instance de fonction a son propre compteur, mais les instances sont réutilisées
// entre requêtes, ce qui suffit à freiner un robot qui enverrait des centaines de demandes
// (et donc d'emails de confirmation vers des adresses tierces).

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export const clientIp = (request: Request, fallback?: string) =>
  request.headers.get('x-real-ip')
  || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  || fallback
  || 'unknown';

// true si la requête dépasse la limite
export const isRateLimited = (key: string, now = Date.now()) => {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Ménage occasionnel pour que la table ne grossisse pas indéfiniment
  if (hits.size > 5000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
};
