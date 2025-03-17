import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Laptop, Layout, Server, Settings, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: 'React.js', level: 95, description: 'Advanced state management, custom hooks, performance optimization' },
        { name: 'Next.js', level: 90, description: 'Server-side rendering, static site generation, API routes' },
        { name: 'TypeScript', level: 85, description: 'Type safety, interfaces, generics, advanced types' },
        { name: 'Tailwind CSS', level: 90, description: 'Responsive design, custom configurations, animations' },
      ],
    },
    {
      name: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 90, description: 'Express.js, RESTful APIs, middleware development' },
        { name: 'MongoDB', level: 85, description: 'Schema design, aggregation pipeline, indexing' },
        { name: 'PostgreSQL', level: 80, description: 'Complex queries, stored procedures, optimization' },
        { name: 'GraphQL', level: 45, description: 'Schema definition, resolvers, Apollo Server' },
      ],
    },
    {
      name: 'DevOps & Tools',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: 'Docker', level: 50, description: 'Container orchestration, multi-stage builds, compose' },
        { name: 'AWS', level: 75, description: 'EC2, S3, Lambda, CloudFormation' },
        { name: 'Git', level: 90, description: 'Advanced workflows, CI/CD integration' },
        { name: 'Linux', level: 55, description: 'Shell scripting, system administration' },
      ],
    },
    {
      name: 'Programming Languages',
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: 'JavaScript', level: 95, description: 'ES6+, async/await, functional programming' },
        { name: 'Python', level: 80, description: 'Django, data analysis, automation' },
        { name: 'Java', level: 70, description: 'Spring Boot, enterprise applications' },
        { name: 'Go', level: 35, description: 'Microservices, concurrent programming' },
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With years of experience in full-stack development and tech education, I've developed expertise
            across various technologies and tools. Here's a detailed breakdown of my technical skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="text-indigo-600 dark:text-indigo-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;