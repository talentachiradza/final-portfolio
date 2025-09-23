
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🔺" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "TailwindCSS", level: 95, icon: "🎨" },
        { name: "HTML5/CSS3", level: 98, icon: "🌐" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "RESTful APIs", level: 92, icon: "🔗" },
        { name: "Firebase", level: 80, icon: "🔥" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "📚" },
        { name: "VS Code", level: 98, icon: "💻" },
        { name: "Figma", level: 85, icon: "🎯" },
        { name: "npm/yarn", level: 90, icon: "📦" },
        { name: "PostCSS", level: 80, icon: "🎨" }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 88, icon: "🎨" },
        { name: "Responsive Design", level: 95, icon: "📱" },
        { name: "Mobile-First", level: 92, icon: "📲" },
        { name: "Accessibility", level: 85, icon: "♿" },
        { name: "User Research", level: 80, icon: "🔍" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 parallax-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-200 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-12 text-white">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "TypeScript", icon: "📘" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Firebase", icon: "🔥" },
              { name: "Git", icon: "📚" },
              { name: "Figma", icon: "🎯" },
              { name: "VS Code", icon: "💻" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tech-icon flex flex-col items-center p-4 glass-effect rounded-xl"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-white text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
