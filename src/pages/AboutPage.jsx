import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import About from '@/components/About';

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

const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>About Me | Talent A Chiradza</title>
        <meta name="description" content="Learn about Talent A Chiradza's journey as a Full-Stack Developer and UI/UX Specialist from Zimbabwe." />
      </Helmet>
      <About />
    </motion.div>
  );
};

export default AboutPage;