import React from 'react';
import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Typography from '@components/ui/Typography';
import Button from '@components/ui/Button';
import { projectsData } from '@data/projects';
import { useLanguage } from '../../context/LanguageContext';
import {
  staggerContainer,
  staggerItem,
  sectionTitle,
  sectionSubtitle,
  cardReveal,
} from '@libs/animations/variants';

const Work: React.FC = () => {
  const { language } = useLanguage();
  const featuredProjects = projectsData.filter((p) => p.featured);

  const content = {
    ar: {
      title: 'أعمالي',
      subtitle: 'مجموعة من المشاريع التي تعرض مهاراتي وأسلوبي في التطوير',
      liveDemo: 'عرض مباشر',
      mockup: 'صورة توضيحية',
    },
    en: {
      title: 'My Work',
      subtitle: 'A selection of projects that showcase my skills and approach to development.',
      liveDemo: 'Live Demo',
      mockup: 'Mockup Image',
    },
  };

  // ترجمة أسماء المشاريع والوصف والتاغات
  const getTranslatedProject = (project: any) => {
    if (language === 'ar') {
      const translations: Record<string, { title: string; description: string; tags: string[] }> = {
        'shulamith-gallery': {
          title: 'شولميث جاليري',
          description: 'منصة فنية لعرض وبيع اللوحات الفنية، مع إمكانية تنفيذ أي تابلوه بخامات وأحجام مختلفة حسب طلب العميل، وتقديم استشارات فنية مجانية.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
        },
        'points-system': {
          title: 'نظام نقاط لصيدلية د. ميرنا',
          description: 'نظام متكامل لإدارة نقاط الولاء لعملاء صيدلية د. ميرنا، يتيح جمع النقاط مع كل عملية شراء واستبدالها بمكافآت وعروض حصرية.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
        },
        'login-system': {
          title: 'نظام تسجيل الدخول',
          description: 'نظام تسجيل دخول تجريبي بسيط وآمن مع واجهة مستخدم نظيفة، يتيح للمستخدمين تسجيل الدخول باستخدام اسم المستخدم وكلمة المرور.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
        },
        'project-1': {
          title: 'منصة التجارة الإلكترونية',
          description: 'حل تجارة إلكترونية حديث مع إدارة المخزون في الوقت الفعلي ومعالجة آمنة للدفع وتصميم متجاوب.',
          tags: ['رياكت', 'تايب سكريبت', 'تيلويند', 'REST APIs'],
        },
        'project-2': {
          title: 'لوحة تحكم تفاعلية',
          description: 'لوحة تحكم تحليلات في الوقت الفعلي مع تصور بيانات مباشر ورسوم بيانية تفاعلية وأدوات قابلة للتخصيص.',
          tags: ['رياكت', 'Three.js', 'فريمر موشن', 'Chart.js'],
        },
        'project-3': {
          title: 'تجربة بورتفوليو ثلاثية الأبعاد',
          description: 'موقع بورتفوليو غامر مع عناصر ثلاثية الأبعاد تفاعلية ورسوم متحركة سلسة وتصميم حديث.',
          tags: ['رياكت', 'Three.js', 'تايب سكريبت', 'تيلويند'],
        },
        'project-4': {
          title: 'تطبيق إدارة المهام',
          description: 'أداة تعاونية لإدارة المهام مع تحديثات في الوقت الفعلي وسحب وإفلات وميزات جماعية.',
          tags: ['رياكت', 'تايب سكريبت', 'WebSockets', 'تيلويند'],
        },
        'project-5': {
          title: 'تصور الطقس',
          description: 'تطبيق طقس تفاعلي مع تصور كرة أرضية ثلاثية الأبعاد وبيانات في الوقت الفعلي وتتبع الموقع.',
          tags: ['رياكت', 'Three.js', 'REST APIs', 'فريمر موشن'],
        },
        'project-6': {
          title: 'منشئ البورتفوليو',
          description: 'منشئ بورتفوليو بالسحب والإفلات للمبدعين مع قوالب قابلة للتخصيص ومعاينة مباشرة.',
          tags: ['رياكت', 'تايب سكريبت', 'تيلويند', 'فريمر موشن'],
        },
      };
      return translations[project.id] || project;
    }
    return project;
  };

  const getTranslatedTag = (tag: string): string => {
    if (language === 'ar') {
      const translations: Record<string, string> = {
        'HTML': 'HTML',
        'CSS': 'CSS',
        'JavaScript': 'جافا سكريبت',
        'Node.js': 'Node.js',
        'Express': 'Express',
        'React': 'رياكت',
        'TypeScript': 'تايب سكريبت',
        'Tailwind CSS': 'تيلويند',
        'REST APIs': 'REST APIs',
        'Three.js': 'Three.js',
        'Framer Motion': 'فريمر موشن',
        'Chart.js': 'Chart.js',
        'WebSockets': 'WebSockets',
      };
      return translations[tag] || tag;
    }
    return tag;
  };

  return (
    <section id="work" className="py-20 md:py-28 lg:py-32 bg-surface/30">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={sectionTitle}>
            <Typography as="h2" variant="heading" className="mb-4">
              {content[language as keyof typeof content].title}
            </Typography>
          </motion.div>
          <motion.div variants={sectionSubtitle}>
            <Typography variant="body" className="text-text-secondary max-w-2xl mx-auto">
              {content[language as keyof typeof content].subtitle}
            </Typography>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => {
            const translated = getTranslatedProject(project);
            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover="hover"
                initial="initial"
                animate="visible"
                className="group"
              >
                <motion.div
                  variants={cardReveal}
                  className="bg-surface rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 border border-white/5 hover:border-accent/30 h-full flex flex-col"
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-surface-light to-surface flex items-center justify-center text-text-secondary relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={translated.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // لو الصورة مش ظاهرة، يظهر النص البديل
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="relative z-10 text-sm hidden">
                      {content[language as keyof typeof content].mockup}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <Typography as="h3" variant="subheading" className="text-xl mb-2">
                      {translated.title}
                    </Typography>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
                      {translated.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(translated.tags || project.tags).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {getTranslatedTag(tag)}
                        </span>
                      ))}
                    </div>

                    {/* Buttons - بس زر العرض المباشر */}
                    <div className="flex gap-3">
                      <Button variant="primary" size="sm" href={project.demoUrl}>
                        {content[language as keyof typeof content].liveDemo}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;