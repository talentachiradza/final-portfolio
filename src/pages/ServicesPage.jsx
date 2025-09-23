import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Services from '@/components/Services';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const ServicesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Services | Talent A Chiradza</title>
        <meta name="description" content="Discover the web development services offered by Talent A Chiradza, including frontend, full-stack, and UI/UX design." />
      </Helmet>
      <Services />
    </motion.div>
  );
};

export default ServicesPage;