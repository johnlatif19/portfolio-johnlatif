import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Typography from '@components/ui/Typography';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '@hooks/useScrollAnimation';

const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'عني',
      description: 'أنا شخص طموح وشغوف بالتعلّم والتطوير المستمر، وأسعى دائمًا إلى اكتساب مهارات جديدة وتحويل المعرفة إلى تطبيق عملي. أحب التفكير بطريقة مختلفة، الاهتمام بالتفاصيل، وتطوير الأفكار للوصول إلى نتائج أفضل. أؤمن بأهمية التطور المستمر، وأحرص على أن يكون لكل مشروع أعمل عليه قيمة حقيقية تعكس مهاراتي وشغفي بما أقدمه.',
      focus1: 'تصميم الويب',
      focus2: 'بناء الهياكل',
      focus3: 'تجارب تفاعلية',
    },
    en: {
      title: 'About Me',
      description: 'I am an ambitious person passionate about continuous learning and development. I always strive to acquire new skills and turn knowledge into practical application. I love thinking differently, paying attention to details, and developing ideas to achieve better results. I believe in the importance of continuous development, and I ensure that every project I work on has real value that reflects my skills and passion for what I do.',
      focus1: 'Web Design',
      focus2: 'Establishing Architecture',
      focus3: 'Interactive Experiences',
    },
  };

  // ✅ Split Screen مع تحسينات
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ 
    threshold: 0.15,
    delay: 0
  });
  
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ 
    threshold: 0.15, 
    delay: 150 
  });

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-surface/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* النص الأيسر - Rocket Effect */}
          <motion.div
            ref={leftRef}
            initial={{ 
              opacity: 0, 
              x: -80,
              rotate: -5,
              scale: 0.9
            }}
            animate={leftVisible ? { 
              opacity: 1, 
              x: 0,
              rotate: 0,
              scale: 1
            } : { 
              opacity: 0, 
              x: -80,
              rotate: -5,
              scale: 0.9
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography as="h2" variant="heading" className="mb-6">
                {content[language as keyof typeof content].title}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="body" className="text-text-secondary leading-relaxed">
                {content[language as keyof typeof content].description}
              </Typography>
            </motion.div>
          </motion.div>

          {/* الكاردات اليمين - Explosion Effect */}
          <motion.div
            ref={rightRef}
            initial={{ 
              opacity: 0, 
              x: 80,
              scale: 0.8,
              rotate: 3
            }}
            animate={rightVisible ? { 
              opacity: 1, 
              x: 0,
              scale: 1,
              rotate: 0
            } : { 
              opacity: 0, 
              x: 80,
              scale: 0.8,
              rotate: 3
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1,
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              content[language as keyof typeof content].focus1,
              content[language as keyof typeof content].focus2,
              content[language as keyof typeof content].focus3
            ].map((focus, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotate: -10,
                  y: 30
                }}
                animate={rightVisible ? { 
                  opacity: 1, 
                  scale: 1,
                  rotate: 0,
                  y: 0
                } : { 
                  opacity: 0, 
                  scale: 0.5,
                  rotate: -10,
                  y: 30
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.12,
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="px-6 py-4 bg-surface rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 cursor-default shadow-lg hover:shadow-glow"
              >
                <span className="text-text font-medium">{focus}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;