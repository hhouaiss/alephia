export interface AuditSubmission {
  // Company information
  companyName: string;
  companySize: string;
  sector: string;
  region: string;
  techMaturity: string;
  website?: string;

  // Personal information
  firstName: string;
  lastName: string;
  email: string;

  // AI needs
  mainObjective: string;
  aiExperience: string;
  deploymentTimeline: string;
  concerns: string[];

  // Metadata
  createdAt: string;
  status: 'pending' | 'contacted' | 'completed';
}