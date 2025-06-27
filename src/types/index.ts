export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'web' | 'mobile' | 'branding';
  technologies: string[];
  liveUrl: string;
  codeUrl: string | null;
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  iconUrl: string;
}