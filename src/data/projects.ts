import { Project } from '../types/index';

export const projectsData: Project[] = [
  // المشاريع الجديدة - مع الصور
  {
    id: 'shulamith-gallery',
    title: 'Shulamith Gallery',
    description: 'An art platform for displaying and selling paintings, with the ability to create any artwork with different materials and sizes according to customer requests, and providing free art consultations.',
    image: 'https://i.postimg.cc/B6Tz00JP/shulamith-gallery.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    demoUrl: 'https://shulamith-gallery.vercel.app',
    githubUrl: '#',
    featured: true,
  },
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
  // المشاريع القديمة
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.',
    image: '/projects/ecommerce-mockup.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 'project-2',
    title: 'Interactive Dashboard',
    description: 'A real-time analytics dashboard with live data visualization, interactive charts, and customizable widgets.',
    image: '/projects/dashboard-mockup.jpg',
    tags: ['React', 'Three.js', 'Framer Motion', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 'project-3',
    title: '3D Portfolio Experience',
    description: 'An immersive portfolio website featuring interactive 3D elements, smooth animations, and modern design.',
    image: '/projects/portfolio-mockup.jpg',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
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