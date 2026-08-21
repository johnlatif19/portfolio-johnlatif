import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { navigationItems } from '@data/navigation';

// Define types for content
type ContentKey = 'home' | 'about' | 'work' | 'skills' | 'contact';

interface ContentType {
  ar: Record<ContentKey, string>;
  en: Record<ContentKey, string>;
}

const content: ContentType = {
  ar: {
    home: 'الرئيسية',
    about: 'عني',
    work: 'أعمالي',
    skills: 'مهاراتي',
    contact: 'تواصل معي',
  },
  en: {
    home: 'Home',
    about: 'About',
    work: 'Work',
    skills: 'Skills',
    contact: 'Contact',
  },
};

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const languageContext = useLanguage();
  const language = languageContext?.language || 'ar';
  const toggleLanguage = languageContext?.toggleLanguage || (() => {});
  const dir = languageContext?.dir || 'rtl';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // ✅ ترتيب العناصر حسب اللغة
  const getOrderedItems = () => {
    const items = [...navigationItems];
    if (language === 'ar') {
      // للعربي: نفس الترتيب (الرئيسية, عني, أعمالي, مهاراتي, تواصل)
      return items;
    }
    // للإنجليزي: نفس الترتيب (Home, About, Work, Skills, Contact)
    return items;
  };

  const orderedItems = getOrderedItems();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
      dir={dir}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-accent">
          JL
        </a>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {orderedItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-text-secondary hover:text-text transition-colors duration-300"
              >
                {content[language as keyof ContentType][item.id as ContentKey]}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
          </li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
        dir={dir}
      >
        <ul className="flex flex-col items-center gap-4">
          {orderedItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="text-text-secondary hover:text-text transition-colors duration-300"
              >
                {content[language as keyof ContentType][item.id as ContentKey]}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;