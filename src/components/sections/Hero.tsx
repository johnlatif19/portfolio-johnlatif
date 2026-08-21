import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Typography from '@components/ui/Typography';
import Button from '@components/ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation, rocketVariants, explosionVariants, smokeVariants } from '@hooks/useScrollAnimation';

interface ContentType {
  ar: {
    availability: string;
    headline: string;
    highlight: string;
    headlineEnd: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  en: {
    availability: string;
    headline: string;
    highlight: string;
    headlineEnd: string;
    description: string;
    cta1: string;
    cta2: string;
  };
}

const content: ContentType = {
  ar: {
    availability: 'متاح للعمل',
    headline: 'أصمم تجارب',
    highlight: 'ممتعة وسهلة',
    headlineEnd: 'الاستخدام.',
    description: 'أصمم تجارب ويب تفاعلية وتطبيقات واقعية تركز على الأداء وسهولة الاستخدام.',
    cta1: 'شوف أعمالي',
    cta2: 'تواصل معي',
  },
  en: {
    availability: 'Free to work',
    headline: 'Design fun and',
    highlight: 'easy-to-use',
    headlineEnd: 'experiences.',
    description: 'I design interactive web experiences and real-world web experiences with a focus on performance and user delight.',
    cta1: 'See my work',
    cta2: "Let's talk",
  },
};

const Hero: React.FC = () => {
  const { language, dir } = useLanguage();
  const profileImage = 'https://i.postimg.cc/yxqvWq2f/DSC-7841.jpg';

  // 🚀 تأثير الصاروخ - للنص
  const { ref: rocketRef, isVisible: rocketVisible } = useScrollAnimation({ 
    threshold: 0.1
  });

  // 💥 تأثير الانفجار - للصورة
  const { ref: explosionRef, isVisible: explosionVisible } = useScrollAnimation({ 
    threshold: 0.1, 
    delay: 200
  });

  // 💨 تأثير الدخان - للخلفية
  const { ref: smokeRef, isVisible: smokeVisible } = useScrollAnimation({ 
    threshold: 0.05,
    once: false
  });

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* 💨 طبقة الدخان الخلفية */}
      <motion.div
        ref={smokeRef}
        initial="hidden"
        animate={smokeVisible ? "visible" : "hidden"}
        variants={smokeVariants}
        className="absolute inset-0 z-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent"
      />

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]" dir={dir}>
          
          {/* 🚀 النص - بيجي كأنه صاروخ */}
          <motion.div
            ref={rocketRef}
            initial="hidden"
            animate={rocketVisible ? "visible" : "hidden"}
            variants={rocketVariants}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={rocketVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {content[language as keyof ContentType].availability}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={rocketVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography as="h1" variant="hero" className="text-text">
                {language === 'ar' ? (
                  <>
                    {content.ar.headline}
                    <br />
                    <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                      {content.ar.highlight}
                    </span>
                    <br />
                    {content.ar.headlineEnd}
                  </>
                ) : (
                  <>
                    {content.en.headline}
                    <br />
                    <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                      {content.en.highlight}
                    </span>
                    <br />
                    {content.en.headlineEnd}
                  </>
                )}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={rocketVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="body" className="text-text-secondary max-w-md">
                {content[language as keyof ContentType].description}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={rocketVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="primary" size="lg" href="#work">
                {content[language as keyof ContentType].cta1}
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                {content[language as keyof ContentType].cta2}
              </Button>
            </motion.div>
          </motion.div>

          {/* 💥 الصورة - بتنفجر لما تظهر */}
          <motion.div
            ref={explosionRef}
            initial="hidden"
            animate={explosionVisible ? "visible" : "hidden"}
            variants={explosionVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={explosionVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/40 to-transparent blur-3xl"
              />
              <img
                src={profileImage}
                alt="John Latif - Front-end Developer"
                className="relative rounded-full w-full h-full object-cover border-2 border-accent/30 shadow-glow"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;