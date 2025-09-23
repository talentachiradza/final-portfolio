import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const navigate = useNavigate();
  const experiences = [
    {
      title: "Junior Front-End Developer (Intern)",
      company: "HexSoftware & Uncommon.org",
      period: "Aug 2024 - Nov 2024",
      location: "Remote",
      type: "Internship",
      description: "Developed responsive web applications using React.js and modern frontend technologies. Collaborated with senior developers on user interface design and implementation.",
      achievements: [
        "Built 5+ responsive web components using React.js and TailwindCSS",
        "Improved website performance by 30% through code optimization",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React.js", "JavaScript", "TailwindCSS", "Git", "Figma"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      location: "Harare, Zimbabwe",
      type: "Freelance",
      description: "Providing full-stack web development services to local and international clients. Specializing in modern web applications and e-commerce solutions.",
      achievements: [
        "Delivered 10+ successful projects for diverse clients",
        "Maintained 100% client satisfaction rate",
        "Developed custom e-commerce platforms with payment integration",
        "Created responsive websites with modern UI/UX principles"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"]
    },
    {
      title: "Community Developer",
      company: "Dzikwa Trust",
      period: "2024 - Present",
      location: "Harare, Zimbabwe",
      type: "Volunteer",
      description: "Contributing to community development through technology education and digital solutions. Building platforms to support local initiatives and education.",
      achievements: [
        "Developed educational platform for community programs",
        "Trained 50+ community members in basic digital literacy",
        "Created web presence for local NGO initiatives",
        "Implemented digital solutions for community management"
      ],
      technologies: ["React.js", "Firebase", "HTML/CSS", "JavaScript"]
    },
    {
      title: "IT Programming Instructor",
      company: "Educational Institution",
      period: "2024 - Present",
      location: "Harare, Zimbabwe",
      type: "Part-time",
      description: "Teaching programming fundamentals and web development to aspiring developers. Curriculum development and mentoring students in modern web technologies.",
      achievements: [
        "Designed comprehensive web development curriculum",
        "Mentored 100+ students in programming fundamentals",
        "Achieved 95% student satisfaction rate",
        "Developed hands-on projects for practical learning"
      ],
      technologies: ["HTML/CSS", "JavaScript", "React.js", "Git", "VS Code"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through diverse roles and impactful projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-5 top-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background"></div>

                <motion.div
                  className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          exp.type === 'Freelance' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          exp.type === 'Volunteer' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for New Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how my experience can benefit your team.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;