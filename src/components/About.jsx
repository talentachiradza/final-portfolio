import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Globe, Users, Award, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const navigate = useNavigate();
  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Professional development with cutting-edge technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Specialist",
      description: "Creating beautiful, user-centered digital experiences"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Zimbabwe talent meeting Fortune 500 company requirements"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Contributing to local tech education and development"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class solutions that exceed expectations"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine love for technology and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer from Zimbabwe, bridging local talent with global technology standards
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                alt="Talent A Chiradza working on code"
               src="https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/IMG-20250923-WA0044.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Crafting Digital Excellence</p>
                <p className="text-sm opacity-90">From Harare to the World</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Harare, Zimbabwe, I'm a Full-Stack Software Engineer with a passion for creating 
              exceptional digital experiences. My journey began with curiosity about how websites work, 
              and has evolved into a professional career spanning frontend mastery, backend development, 
              and UI/UX design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React.js, Node.js, and modern web technologies, bringing both technical 
              expertise and creative vision to every project. My work with organizations like HexSoftware, 
              Uncommon.org, and Dzikwa Trust has shaped my understanding of how technology can drive 
              meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => navigate('/contact')}>Contact Me</Button>
              <Button asChild variant="outline">
                <a href="/Talent_Chiradza_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl glass-effect hover:glow-effect transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
              <p className="text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;