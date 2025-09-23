import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User, Clock } from 'lucide-react';
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

const blogPosts = {
  "mastering-react-hooks": {
    id: 1,
    title: "Mastering React Hooks: A Deep Dive",
    content: `
      <p>React Hooks have revolutionized the way we write components. They allow us to use state and other React features without writing a class. In this deep dive, we'll explore some of the most common Hooks and how to leverage them to write cleaner, more maintainable code.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">useState: Managing Component State</h3>
      <p>The <code>useState</code> Hook is the most fundamental Hook. It allows you to add state to functional components. Here's a simple example of a counter:</p>
      <pre><code class="language-jsx">
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">useEffect: Handling Side Effects</h3>
      <p>The <code>useEffect</code> Hook lets you perform side effects in functional components. It's a close replacement for <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React classes. For example, you can use it to fetch data:</p>
      <pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]); // Only re-run the effect if userId changes

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.name}</div>;
}
      </code></pre>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Conclusion</h3>
      <p>Hooks are a powerful addition to React that simplify component logic and promote code reuse. By mastering <code>useState</code>, <code>useEffect</code>, and other Hooks like <code>useContext</code> and <code>useReducer</code>, you can build more robust and elegant React applications.</p>
    `,
    date: "2025-09-20",
    tags: ["React", "JavaScript", "Frontend"],
    author: "Talent A Chiradza",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  "scalable-api-nodejs": {
    id: 2,
    title: "Building a Scalable API with Node.js and Express",
    content: "<p>Content for building a scalable API with Node.js and Express is coming soon!</p>",
    date: "2025-09-15",
    tags: ["Node.js", "Backend", "API"],
    author: "Talent A Chiradza",
    readTime: "8 min read",
    image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Building%20Restful%20Web%20APIs%20With%20Node%20js%20&%20Express.jpeg",
  },
  "ui-ux-principles": {
    id: 3,
    title: "The Art of UI/UX: Principles for Modern Web Design",
    content: "<p>Content for UI/UX principles is coming soon!</p>",
    date: "2025-09-10",
    tags: ["UI/UX", "Design", "Web Development"],
    author: "Talent A Chiradza",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>{post.title} | Talent A Chiradza</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Helmet>
      
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <img src={post.image} alt={post.title} className="rounded-2xl mb-8 w-full h-64 object-cover" />

          <article 
            className="prose dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-bold prose-headings:text-foreground prose-a:text-blue-600 dark:prose-a:text-blue-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12">
            <span className="font-semibold">Tags:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;