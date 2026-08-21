import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Typography from '@components/ui/Typography';
import { skillsData } from '@data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation, explosionVariants } from '@hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'مهاراتي',
      subtitle: 'التقنيات التي أعمل بها لإنشاء تجارب رقمية استثنائية',
      essential: 'المهارات الأساسية',
      essentialDesc: 'التقنيات الأساسية التي أعمل بها يومياً',
      creative: 'التقنيات الإبداعية',
      creativeDesc: 'أدوات ثلاثية الأبعاد وإبداعية لتجارب غامرة',
    },
    en: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies I work with to create exceptional digital experiences.',
      essential: 'Essential Skills',
      essentialDesc: 'Core technologies I work with daily',
      creative: 'Creative Technologies',
      creativeDesc: '3D and creative tools for immersive experiences',
    },
  };

  // ✅ Scroll Animation
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // ترجمة أسماء المهارات
  const getTranslatedSkillName = (skillName: string): string => {
    if (language === 'ar') {
      const translations: Record<string, string> = {
        'React': 'رياكت',
        'TypeScript': 'تايب سكريبت',
        'JavaScript': 'جافا سكريبت',
        'HTML5': 'HTML5',
        'CSS3': 'CSS3',
        'Tailwind CSS': 'تيلويند',
        'Git': 'جيت',
        'GitHub': 'جيت هاب',
        'REST APIs': 'REST APIs',
        'Vite': 'فايت',
        'Three.js': 'Three.js',
        'React Three Fiber': 'رياكت ثري فايبر',
        '@react-three/drei': '@react-three/drei',
        'Framer Motion': 'فريمر موشن',
      };
      return translations[skillName] || skillName;
    }
    return skillName;
  };

  // ترجمة أسماء الكاتيجوريات
  const getTranslatedCategoryName = (categoryId: string): string => {
    if (language === 'ar') {
      const translations: Record<string, string> = {
        'essential': content.ar.essential,
        'creative': content.ar.creative,
      };
      return translations[categoryId] || categoryId;
    }
    return categoryId === 'essential' ? content.en.essential : content.en.creative;
  };

  const getTranslatedCategoryDesc = (categoryId: string): string => {
    if (language === 'ar') {
      const translations: Record<string, string> = {
        'essential': content.ar.essentialDesc,
        'creative': content.ar.creativeDesc,
      };
      return translations[categoryId] || '';
    }
    return categoryId === 'essential' ? content.en.essentialDesc : content.en.creativeDesc;
  };

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 bg-surface/30">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={explosionVariants}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Typography as="h2" variant="heading" className="mb-4">
              {content[language as keyof typeof content].title}
            </Typography>
            <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
              {content[language as keyof typeof content].subtitle}
            </Typography>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-glow"
              >
                <Typography as="h3" variant="subheading" className="text-xl mb-2">
                  {getTranslatedCategoryName(category.id)}
                </Typography>
                <p className="text-text-secondary text-sm mb-4">
                  {getTranslatedCategoryDesc(category.id)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {getTranslatedSkillName(skill.name)}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;