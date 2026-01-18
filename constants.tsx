
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Voice Recognition (Jarvis)',
    description: 'Part of a specialized group project for Introduction to Artificial Intelligence. Developed a voice recognition system capable of processing verbal commands, much like a real-world Jarvis assistant.',
    tags: ['Python', 'Speech Recognition', 'AI Logic'],
    imageUrl: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Galleria Inventory System',
    description: 'A robust system for a gallery company managing thousands of artworks. Features include automated certificate generation, sales agent/branch management, and an Excel import feature to eliminate manual data entry.',
    tags: ['Firebase', 'AI Tools', 'Excel Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1493306454986-c8877a09cbeb?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Clinical Record Management',
    description: 'Designed to eliminate manual patient recording for clinics. Integrated a fast, reliable database with AI analysis capabilities and a specialized AI chatbot for immediate patient data insights.',
    tags: ['Java', 'AI Analysis', 'Database', 'Chatbot'],
    imageUrl: 'https://images.unsplash.com/photo-1504813184591-01552657c722?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Enterprise GPU E-Commerce',
    description: 'Created a specialized e-commerce platform for GPU and monitor sales. The website replicates core features of major platforms like Amazon and Lazada utilizing Enterprise Java technologies.',
    tags: ['Enterprise Java', 'E-Commerce', 'Web App'],
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'VLAN Network Architecture',
    description: 'Established VLAN connections across multiple routers using Cisco Packet Tracer. Demonstrated real-world network segmentation and enhanced security for a major Information Security project.',
    tags: ['Cisco', 'Networking', 'Infosec'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'SL INN Hotel Website',
    description: 'A simple yet elegant view-based website for SL INN. Highlights hotel rates, location, and accommodations, focusing on the visual beauty of nature-based hospitality.',
    tags: ['Java', 'Web Design', 'UI/UX'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    githubUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'Python', level: 90, category: 'ai' },
  { name: 'Java', level: 85, category: 'backend' },
  { name: 'Laravel', level: 88, category: 'backend' },
  { name: 'Firebase', level: 82, category: 'backend' },
  { name: 'AI Tools', level: 88, category: 'ai' },
  { name: 'Networking', level: 75, category: 'other' },
];

export const Icons = {
  Github: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  ),
  ExternalLink: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
  ),
};
