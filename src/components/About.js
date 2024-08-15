import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/office.png'; 
import { Link } from 'react-router-dom';

const About = () => {


  return (
    <section className="py-12 sm:py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
          {/* About Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full rounded-lg shadow-lg sm:max-w-md h-auto transition-opacity duration-300"
              style={{ maxHeight: '250px', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="md:w-1/2 md:pl-8 flex flex-col justify-center text-justify md:text-left transition-opacity duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay:  0.2, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center">
              About Us
            </h2>
            <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
              At Nimet Graphics, we are passionate about creating exceptional visual experiences that captivate and engage. Founded in 2023, we have been dedicated to delivering innovative design solutions that help brands stand out.
            </p>
            <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
              We take pride in our ability to merge creativity with strategy, crafting designs that not only look great but also drive results. Whether it’s a logo, a website, or a full branding package, we’re here to help you make a lasting impression.
              <Link to='/about' className="inline text-purple-500 border-b border-secondary-dot ml-2">Read More</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
