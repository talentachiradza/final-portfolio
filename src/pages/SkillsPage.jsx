import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Skills from '@/components/Skills';

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

const SkillsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Skills | Talent A Chiradza</title>
        <meta name="description" content="Explore the technical skills and expertise of Talent A Chiradza, including React, Node.js, UI/UX design, and more." />
      </Helmet>
      <Skills />
    </motion.div>
  );
};

export default SkillsPage;