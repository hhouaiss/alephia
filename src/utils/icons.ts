import {
  TrendingUp,
  Clock,
  Shield,
  Wrench,
  LineChart,
  Mail,
  Settings,
  Heart,
  ArrowRight,
  Download,
  Rocket
} from 'lucide-react';

export const icons = {
  'trending-up': TrendingUp,
  clock: Clock,
  shield: Shield,
  tools: Wrench,
  chart: LineChart,
  mail: Mail,
  settings: Settings,
  heart: Heart,
  'arrow-right': ArrowRight,
  download: Download,
  rocket: Rocket
};

export type IconName = keyof typeof icons;