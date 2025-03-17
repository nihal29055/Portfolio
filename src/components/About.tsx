import React from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    {
      icon: <Code className="h-6 w-6" />, 
      title: '1+ Years Experience', 
      description: 'Building scalable web applications',
    },
    {
      icon: <Users className="h-6 w-6" />, 
      title: '1000+ Students', 
      description: 'Mentored in web development',
    },
    {
      icon: <Award className="h-6 w-6" />, 
      title: '4+ Hackathons', 
      description: 'Won and mentored',
    },
    {
      icon: <Zap className="h-6 w-6" />, 
      title: '10+ Projects', 
      description: 'Delivered successfully',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate MERN stack developer, tech educator, and the founder of TechStudio - a software development company
            dedicated to creating innovative solutions and nurturing tech talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="../src/components/photo.jpg"
                alt="Nihal Yadav"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As the founder of TechStudio, I've led numerous successful projects and built a team of passionate developers.
              With over 1 year of experience in web development, I've worked with startups and established companies
              to build scalable web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My passion for teaching led me to create educational content and mentor aspiring developers, while simultaneously
              growing TechStudio into a respected software development company.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:scale-105 transition-transform"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">{achievement.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
