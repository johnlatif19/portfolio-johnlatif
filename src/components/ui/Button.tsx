import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asChild = false,
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-accent text-background hover:bg-accent-hover hover:shadow-glow',
    secondary:
      'bg-surface-light text-text hover:bg-surface hover:shadow-glow',
    outline:
      'border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow',
    ghost: 'text-text-secondary hover:text-text hover:bg-surface/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If asChild is true, render children directly
  if (asChild) {
    return <>{children}</>;
  }

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  // Default: render as button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;