-- Create audit_submissions_v2 table
-- Formulaire simplifié : Prénom + Email + Besoin (optionnel)
-- Remplace audit_submissions (ancien formulaire 2 étapes, 11 champs)
-- L'ancienne table est conservée et archivée

CREATE TABLE IF NOT EXISTS audit_submissions_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Contact (champs collectés par le nouveau formulaire)
  first_name TEXT NOT NULL,
  email     TEXT NOT NULL,
  besoin    TEXT,

  -- Tracking source (UTM Google Ads)
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_content  TEXT,

  -- Gestion
  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index
CREATE INDEX IF NOT EXISTS idx_audit_v2_email      ON audit_submissions_v2(email);
CREATE INDEX IF NOT EXISTS idx_audit_v2_status     ON audit_submissions_v2(status);
CREATE INDEX IF NOT EXISTS idx_audit_v2_created_at ON audit_submissions_v2(created_at DESC);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_audit_submissions_v2_updated_at
  BEFORE UPDATE ON audit_submissions_v2
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE audit_submissions_v2 IS 'Formulaire simplifié (3 champs) — remplace audit_submissions à partir d''avril 2026';
