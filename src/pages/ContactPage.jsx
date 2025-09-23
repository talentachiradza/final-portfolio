import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';

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

const ContactPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Contact | Talent A Chiradza</title>
        <meta name="description" content="Get in touch with Talent A Chiradza to discuss your project or collaboration ideas." />
      </Helmet>
      <Contact />
    </motion.div>
  );
};

export default ContactPage;