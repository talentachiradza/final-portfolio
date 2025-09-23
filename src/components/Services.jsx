import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Globe, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with modern frameworks and cutting-edge design principles.",
      features: [
        "React.js & Next.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      price: "Starting at $500",
      popular: false
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "End-to-end web application development with robust backend systems and seamless user experiences.",
      features: [
        "Complete Web Applications",
        "API Development & Integration",
        "Database Design & Management",
        "Authentication & Security"
      ],
      price: "Starting at $1,200",
      popular: true
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetic appeal with intuitive functionality.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design System Creation"
      ],
      price: "Starting at $400",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Progressive web applications and mobile-optimized experiences for all devices.",
      features: [
        "Progressive Web Apps (PWA)",
        "Mobile-First Design",
        "Touch-Friendly Interfaces",
        "Offline Functionality"
      ],
      price: "Starting at $800",
      popular: false
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management.",
      features: [
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
        "Admin Dashboard"
      ],
      price: "Starting at $1,500",
      popular: false
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications for better user experience and SEO.",
      features: [
        "Core Web Vitals Optimization",
        "Code Splitting & Lazy Loading",
        "Image & Asset Optimization",
        "SEO Enhancement"
      ],
      price: "Starting at $300",
      popular: false
    }
  ];

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="py-20 parallax-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300 ${
                service.popular ? 'ring-2 ring-yellow-400' : ''
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-blue-200 text-sm">Per project</span>
                </div>
                
                <Button
                  onClick={handleGetQuote}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-full group"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            My Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements, goals, and target audience"
              },
              {
                step: "02",
                title: "Design",
                description: "Creating wireframes, mockups, and user experience flows"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with clean, scalable, and efficient code"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, optimization, and deployment of your project"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                <p className="text-blue-100">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss your requirements and create something amazing together. 
              I offer free consultations to understand your needs better.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;