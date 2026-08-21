import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container-custom text-center">
        <p className="text-text-secondary text-sm">
          © {currentYear} John Latif. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;