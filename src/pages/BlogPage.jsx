import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks: A Deep Dive",
    excerpt: "Explore the power of React Hooks and learn how to write cleaner, more efficient functional components. This guide covers useState, useEffect, useContext, and custom hooks.",
    date: "2025-09-20",
    tags: ["React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    slug: "/blog/mastering-react-hooks"
  },
  {
    id: 2,
    title: "Building a Scalable API with Node.js and Express",
    excerpt: "A step-by-step tutorial on creating a robust and scalable RESTful API using Node.js, Express, and MongoDB. We'll cover routing, middleware, and authentication.",
    date: "2025-09-15",
    tags: ["Node.js", "Backend", "API"],
    image: "https://images.unsplash.com/photo-1629904853716-f0bc642d8b1c",
    slug: "/blog/scalable-api-nodejs"
  },
  {
    id: 3,
    title: "The Art of UI/UX: Principles for Modern Web Design",
    excerpt: "Discover the fundamental principles of UI/UX design that can elevate your web applications. We'll explore user research, wireframing, and creating intuitive interfaces.",
    date: "2025-09-10",
    tags: ["UI/UX", "Design", "Web Development"],
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    slug: "/blog/ui-ux-principles"
  },
];

const BlogPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Blog | Talent A Chiradza</title>
        <meta name="description" content="Read articles and tutorials on web development, UI/UX design, and technology from Talent A Chiradza." />
      </Helmet>
      
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              From My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development, design, and technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card glass-effect rounded-2xl overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={post.title}
                    src={post.image} />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.tags[0]}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors flex-grow">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                      <Link to={post.slug}>
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;