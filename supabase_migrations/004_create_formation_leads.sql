-- Table formation_leads : formulaire en 4 étapes de la home (API : src/pages/api/formation.ts)
-- Appliquée sur le projet Supabase le 2026-10-02 via le MCP Supabase.
-- Remplace formation_requests (migration 003, jamais appliquée en base).

CREATE TABLE IF NOT EXISTS public.formation_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Étape 4 : coordonnées
  full_name TEXT NOT NULL,
  company   TEXT NOT NULL,
  email     TEXT NOT NULL,
  phone     TEXT NOT NULL,

  -- Étapes 1 à 3 : qualification
  trainees_count TEXT CHECK (trainees_count IS NULL OR trainees_count IN ('1 à 3', '4 à 6', '7 à 10', 'Plus de 10')),
  topics         TEXT[] NOT NULL DEFAULT '{}',
  tasks_extra    TEXT,
  opco_choice    TEXT CHECK (opco_choice IS NULL OR opco_choice IN ('yes', 'unknown', 'no')),

  -- Consentement RGPD (horodaté à l'insertion)
  consent    BOOLEAN NOT NULL CHECK (consent = TRUE),
  consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Provenance
  source_page  TEXT,
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_content  TEXT,
  utm_term     TEXT,

  -- Suivi commercial
  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'called', 'qualified', 'won', 'lost', 'archived')),
  notes      TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_formation_leads_created_at ON public.formation_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_formation_leads_status     ON public.formation_leads(status);
CREATE INDEX IF NOT EXISTS idx_formation_leads_email      ON public.formation_leads(email);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER formation_leads_set_updated_at
  BEFORE UPDATE ON public.formation_leads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- L'API utilise la clé anon : insertion seule, aucune lecture ni modification publique
ALTER TABLE public.formation_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_formation_leads"
  ON public.formation_leads
  FOR INSERT
  TO anon
  WITH CHECK (consent = TRUE AND status = 'pending' AND notes IS NULL);

COMMENT ON TABLE public.formation_leads IS 'Demandes du formulaire en 4 étapes de la home Formation IA (octobre 2026)';
