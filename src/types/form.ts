export interface FormData {
  // Step 1: Company Profile
  companyName: string;
  companySize: '1-10' | '11-50' | '51-250' | '250+';
  sector: string;
  region: string;
  techMaturity: 'Débutant' | 'Intermédiaire' | 'Avancé';

  // Step 2: AI Needs
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  mainObjective: 'Automatiser des tâches internes' | 'Améliorer le service client' | 'Analyser nos données' | 'Autre';
  aiExperience: 'Non' | 'Oui' | 'En cours d\'évaluation';
  deploymentTimeline: '1-3 mois' | '3-6 mois' | '+6 mois' | 'Indécis';
  concerns: string[];
}