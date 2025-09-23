import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Projects from '@/components/Projects';

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

const ProjectsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Projects | Talent A Chiradza</title>
        <meta name="description" content="Browse the portfolio of featured projects by Talent A Chiradza, showcasing full-stack and frontend development work." />
      </Helmet>
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;