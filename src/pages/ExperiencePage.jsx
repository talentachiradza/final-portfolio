import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Experience from '@/components/Experience';

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

const ExperiencePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Experience | Talent A Chiradza</title>
        <meta name="description" content="Discover the professional experience and career timeline of Talent A Chiradza." />
      </Helmet>
      <Experience />
    </motion.div>
  );
};

export default ExperiencePage;