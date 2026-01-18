
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'ai' | 'other';
}

export enum Section {
  HERO = 'hero',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
