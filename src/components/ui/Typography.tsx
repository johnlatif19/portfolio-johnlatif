import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'hero' | 'heading' | 'subheading' | 'body' | 'small';
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'p',
  variant = 'body',
}) => {
  const variants = {
    hero: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    subheading: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base text-text-secondary leading-relaxed',
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;