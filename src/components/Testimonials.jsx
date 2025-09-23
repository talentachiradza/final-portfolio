import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      text: "Talent delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.",
      project: "E-commerce Platform Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      company: "InnovateCorp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      text: "Working with Talent was a game-changer for our startup. He transformed our ideas into a beautiful, functional web application. His communication throughout the project was excellent.",
      project: "Web Application Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Creative Agency",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "Talent's UI/UX design skills are remarkable. He created a stunning portfolio website that perfectly represents our brand. The user experience is intuitive and the design is modern and engaging.",
      project: "Portfolio Website Design"
    },
    {
      id: 4,
      name: "David Mukamuri",
      role: "Director, Dzikwa Trust",
      company: "Dzikwa Trust",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "Talent's contribution to our community education platform has been invaluable. His technical skills combined with his understanding of our mission created a platform that truly serves our community.",
      project: "Community Education Platform"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Founder, Local Business Hub",
      company: "Local Business Hub",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rating: 5,
      text: "The mobile-first approach Talent took for our business directory was perfect. The website works flawlessly on all devices and has significantly improved our user engagement.",
      project: "Business Directory Website"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me and the results we've achieved together
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl glass-effect p-8 lg:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  <img 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                    alt={testimonials[currentIndex].name}
                   src={testimonials[currentIndex].image} />
                  
                  <div className="text-left">
                    <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].project}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full glass-effect"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full glass-effect"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "2+", label: "Years Experience", icon: "📅" },
            { number: "24/7", label: "Support Available", icon: "💬" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-effect rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
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
            <h3 className="text-2xl font-bold mb-4">Ready to Join My Happy Clients?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together. I'm committed to delivering 
              exceptional results that exceed your expectations.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;