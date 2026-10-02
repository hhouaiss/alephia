// Envoi d'un événement à Google Analytics (gtag) et au dataLayer.
// La variante de page (home, formation-ia/artisans…) est lue sur la racine .nl posée par SiteLayout.
export const pageVariant = () => document.querySelector<HTMLElement>('.nl')?.dataset.variant ?? 'unknown';

export const track = (event: string, data: Record<string, unknown> = {}) => {
  const w = window as any;
  const payload = { page_variant: pageVariant(), ...data };
  if (typeof w.gtag === 'function') w.gtag('event', event, payload);
  if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...payload });
};
