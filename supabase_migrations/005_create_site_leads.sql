-- Table site_leads : formulaire "Demande de projet" de la home studio web (API : src/pages/api/projet.ts)
-- Créée et appliquée sur le projet Supabase le 2026-11-20 via le MCP Supabase.

CREATE TABLE IF NOT EXISTS public.site_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  full_name TEXT NOT NULL,
  company   TEXT NOT NULL,
  email     TEXT NOT NULL,
  phone     TEXT NOT NULL,
  activity  TEXT NOT NULL,
  formula   TEXT NOT NULL CHECK (formula IN ('express', 'business', 'unsure')),
  details   TEXT,

  consent    BOOLEAN NOT NULL CHECK (consent = TRUE),
  consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  source_page  TEXT,
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_content  TEXT,
  utm_term     TEXT,

  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'called', 'quoted', 'won', 'lost', 'archived')),
  notes      TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_site_leads_created_at ON public.site_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_site_leads_status     ON public.site_leads(status);

-- public.set_updated_at() existe déjà (migration 004)
CREATE TRIGGER site_leads_set_updated_at
  BEFORE UPDATE ON public.site_leads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- L'API utilise la clé anon : insertion seule
ALTER TABLE public.site_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_site_leads"
  ON public.site_leads
  FOR INSERT
  TO anon
  WITH CHECK (consent = TRUE AND status = 'pending' AND notes IS NULL);

COMMENT ON TABLE public.site_leads IS 'Demandes de projet de la home studio web (novembre 2026)';

-- Droits minimaux : la clé publique ne peut qu'insérer (ni lire, ni modifier, ni voir la table en GraphQL)
REVOKE ALL ON public.site_leads FROM anon, authenticated;
GRANT INSERT ON public.site_leads TO anon;
