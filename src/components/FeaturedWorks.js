import React from 'react';
import { motion } from 'framer-motion';
import packageDesign from '../assets/featured-works/work3.jpg'
import uiDesign from '../assets/featured-works/work1.jpg'
import tagDesign from '../assets/featured-works/work2.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Package Design',
    image: packageDesign,
  },
  {
    title: 'UX/UI Design',

    image: uiDesign,
  },
  {
    title: 'Label & Tag Design',
    image: tagDesign,
  },
];

const FeaturedWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Featured Works
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Discover our most recent and notable graphic design projects.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
        <Link to='/portfolio' className="flex justify-end mt-8 mr-4">
        <button 
              className="bg-primary text-white font-semibold px-4 py-2 rounded"
            >
              Show More Works <FaArrowRight className='text-white inline ml-1'/>
            </button>
        </Link>
        
    </section>
  );
};

export default FeaturedWorks;
