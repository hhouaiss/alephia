-- Durcissement de sécurité, appliqué le 2026-11-20 via le MCP Supabase après le contrôle des "advisors".
-- Principe : la clé publique (anon) ne peut qu'insérer dans les tables de formulaires actifs, rien d'autre.

-- 1. Anciennes tables de l'offre "audit" : plus utilisées par le site, on ferme tout accès public.
--    audit_submissions_v2 avait la RLS désactivée : lisible et modifiable par n'importe qui avec la clé publique.
ALTER TABLE public.audit_submissions_v2 ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.audit_submissions_v2 FROM anon, authenticated;
REVOKE ALL ON public.audit_submissions FROM anon, authenticated;

-- 2. formation_leads (formulaire de /archive/formation) : insertion seule
REVOKE ALL ON public.formation_leads FROM anon, authenticated;
GRANT INSERT ON public.formation_leads TO anon;

-- 3. Fonction de trigger sans search_path figé (alerte 0011)
ALTER FUNCTION public.update_updated_at_column() SET search_path = '';
