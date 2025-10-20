import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8
    }
  }
};

const handleClick = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const socialVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.9 }
};

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            variants={itemVariants}
          >
            Bharat Malli Satti
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            Cybersecurity Analyst
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Protecting digital assets with expertise in threat analysis, vulnerability assessment, and security solutions
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Mail, href: "mailto:contact@example.com" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 flex-wrap"
            variants={itemVariants}
          >
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              Get In Touch
            </motion.button>

            <motion.a 
              href="/path-to-your-resume.pdf"
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}