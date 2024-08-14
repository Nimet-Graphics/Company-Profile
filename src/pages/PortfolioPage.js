import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.js'; // Assume this file contains the portfolio items

const Portfolio = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        

       <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="text-center mb-16"
        >
          
          <motion.h2
          className="text-3xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
           Our Portfolio
        </motion.h2>

        <motion.p
          className="text-md mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >           
                  We take pride in our work. Below is a showcase of some of our most impactful and visually stunning projects. 
        Each project was carefully crafted to meet the unique needs of o
        ur clients, highlighting our versatility and 
        commitment to excellence.
        </motion.p>
        </motion.div> 

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut'}}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-primary font-bold mb-3 text-lg">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
