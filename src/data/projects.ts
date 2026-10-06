import { Project } from '../types/index';

export const projectsData: Project[] = [
  {
    id: 'points-system',
    title: 'Points System for Dr. Mirna Pharmacy',
    description: 'A comprehensive loyalty points management system for Dr. Mirna Pharmacy customers, allowing points collection with every purchase and redemption for exclusive rewards and offers.',
    image: 'https://i.postimg.cc/mrMXYszD/points-dr-mirna.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    demoUrl: 'https://points-dr-mirna.vercel.app',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'login-system',
    title: 'Login System',
    description: 'A simple and secure demo login system with a clean user interface, allowing users to log in using username and password.',
    image: 'https://i.postimg.cc/6QRjrX2h/login.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    demoUrl: 'https://login-test-john.vercel.app',
    githubUrl: '#',
    featured: true,
  },
];

export const featuredProjects = projectsData.filter(project => project.featured);

export const getProjectById = (id: string) => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsByTag = (tag: string) => {
  return projectsData.filter(project => 
    project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const getAllTags = () => {
  const tags = new Set<string>();
  projectsData.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
};
