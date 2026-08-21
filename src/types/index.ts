// ============================================
// Navigation Types
// ============================================
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// ============================================
// Project Types
// ============================================
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// ============================================
// Skill Types
// ============================================
export interface Skill {
  id: string;
  name: string;
  category: 'essential' | 'creative' | 'tools';
  icon?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

// ============================================
// Social Types
// ============================================
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

// ============================================
// Contact Types
// ============================================
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ============================================
// Three.js / 3D Types
// ============================================
export interface ThreeSceneProps {
  className?: string;
  performance?: 'high' | 'medium' | 'low';
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

export interface FloatingObjectProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
}

// ============================================
// Hero Section Types
// ============================================
export interface HeroProps {
  name: string;
  position: string;
  tagline: string;
  description: string;
  availability: string;
  profileImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

// ============================================
// About Section Types
// ============================================
export interface AboutProps {
  title: string;
  description: string;
  image: string;
  focus: string[];
}

// ============================================
// Animation Types
// ============================================
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

// ============================================
// Theme Types
// ============================================
export interface Theme {
  colors: {
    background: string;
    surface: string;
    surfaceLight: string;
    text: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
  };
  fonts: {
    sans: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

// ============================================
// Component Props Types
// ============================================
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface SectionProps extends ContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
}

// ============================================
// Utility Types
// ============================================
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// ============================================
// API Response Types (if needed later)
// ============================================
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// ============================================
// Performance Types
// ============================================
export interface PerformanceMetrics {
  fps: number;
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
  };
  deviceMemory?: number;
}

// ============================================
// Media Query Types
// ============================================
export interface MediaQuery {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isReducedMotion: boolean;
  isWebGLSupported: boolean;
}

// ============================================
// Navigation Context Types
// ============================================
export interface NavigationContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

// ============================================
// Theme Context Types
// ============================================
export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

// ============================================
// Export All
// ============================================
export * from './navigation';
export * from './projects';
export * from './skills';