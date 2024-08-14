import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut'}}
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white p-4 sm:p-6 md:p-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to Nimet Graphics
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-16 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          We create stunning graphic designs that captivate and inspire.
        </motion.p>
        <motion.a
          href="tel:+251974436829"
          className="bg-primary text-white py-3 px-4 rounded hover:opacity-70 transition duration-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <button>Get Started</button>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
