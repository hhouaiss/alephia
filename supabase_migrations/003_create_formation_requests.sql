-- Create formation_requests table
-- Demandes d'information de la landing /formation-ia (API : src/pages/api/formation.ts)

CREATE TABLE IF NOT EXISTS formation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Contact
  full_name TEXT NOT NULL,
  company   TEXT NOT NULL,
  email     TEXT NOT NULL,
  phone     TEXT NOT NULL,

  -- Qualification
  trainees_count TEXT,
  tasks          TEXT,
  opco_info      BOOLEAN NOT NULL DEFAULT FALSE,

  -- Consentement RGPD (horodaté à l'insertion)
  consent    BOOLEAN NOT NULL CHECK (consent = TRUE),
  consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Tracking source (UTM)
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_content  TEXT,
  utm_term     TEXT,

  -- Gestion
  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'called', 'qualified', 'won', 'lost', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_formation_requests_email      ON formation_requests(email);
CREATE INDEX IF NOT EXISTS idx_formation_requests_status     ON formation_requests(status);
CREATE INDEX IF NOT EXISTS idx_formation_requests_created_at ON formation_requests(created_at DESC);

-- Trigger updated_at (fonction créée par 002, recréée ici pour que la migration soit autonome)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_formation_requests_updated_at
  BEFORE UPDATE ON formation_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS : l'API utilise la clé anon, qui peut uniquement insérer (aucune lecture publique)
ALTER TABLE formation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_formation_requests"
  ON formation_requests
  FOR INSERT
  TO anon
  WITH CHECK (consent = TRUE AND status = 'pending');

COMMENT ON TABLE formation_requests IS 'Demandes d''information, landing Formation IA (septembre 2026)';
