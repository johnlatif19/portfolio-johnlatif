import { SkillCategory } from '../types/index';

export const skillsData: SkillCategory[] = [
  {
    id: 'essential',
    name: 'Essential Skills',
    description: 'Core technologies I work with daily',
    skills: [
      { 
        id: 'react', 
        name: 'React', 
        category: 'essential', 
        level: 5 
      },
      { 
        id: 'typescript', 
        name: 'TypeScript', 
        category: 'essential', 
        level: 5 
      },
      { 
        id: 'javascript', 
        name: 'JavaScript', 
        category: 'essential', 
        level: 5 
      },
      { 
        id: 'html5', 
        name: 'HTML5', 
        category: 'essential', 
        level: 5 
      },
      { 
        id: 'css3', 
        name: 'CSS3', 
        category: 'essential', 
        level: 5 
      },
      { 
        id: 'tailwind', 
        name: 'Tailwind CSS', 
        category: 'essential', 
        level: 4 
      },
      { 
        id: 'git', 
        name: 'Git', 
        category: 'essential', 
        level: 4 
      },
      { 
        id: 'github', 
        name: 'GitHub', 
        category: 'essential', 
        level: 4 
      },
      { 
        id: 'rest', 
        name: 'REST APIs', 
        category: 'essential', 
        level: 4 
      },
      { 
        id: 'vite', 
        name: 'Vite', 
        category: 'essential', 
        level: 4 
      },
    ],
  },
  {
    id: 'creative',
    name: 'Creative Technologies',
    description: '3D and creative tools for immersive experiences',
    skills: [
      { 
        id: 'threejs', 
        name: 'Three.js', 
        category: 'creative', 
        level: 3 
      },
      { 
        id: 'r3f', 
        name: 'React Three Fiber', 
        category: 'creative', 
        level: 3 
      },
      { 
        id: 'drei', 
        name: '@react-three/drei', 
        category: 'creative', 
        level: 3 
      },
      { 
        id: 'framer', 
        name: 'Framer Motion', 
        category: 'creative', 
        level: 4 
      },
    ],
  },
];

// Skills for display in a simple list (flat version)
export const allSkills = skillsData.flatMap(category => category.skills);

// Get skills by category
export const getSkillsByCategory = (categoryId: string) => {
  const category = skillsData.find(c => c.id === categoryId);
  return category ? category.skills : [];
};

// Get all skill names (for search/filter)
export const skillNames = allSkills.map(skill => skill.name);