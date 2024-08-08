import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/office.png'; // Replace with your actual image path
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0">
          {/* About Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-md h-auto"
              style={{ maxHeight: '400px' }} // Adjust the maximum height as needed
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="md:w-1/2 md:pl-8 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              About Nimet Graphics
            </h2>
            <p className="text-md mb-6 leading-relaxed">
              At Nimet Graphics, we are passionate about creating exceptional visual experiences that captivate and engage. Founded in 2020, we have been dedicated to delivering innovative design solutions that help brands stand out. Our team of creative professionals brings a wealth of experience and expertise to every project, ensuring that each design is not only visually stunning but also strategically aligned with our clients' goals.
            </p>
            <p className="text-md mb-6 leading-relaxed">
              We take pride in our ability to merge creativity with strategy, crafting designs that not only look great but also drive results. Whether it’s a logo, a website, or a full branding package, we’re here to help you make a lasting impression.        
              <a href='/about' className="inline text-secondary border-b border-secondary-dot ml-2">Read More</a>

            </p>
          </motion.div>
          
        </div>

      </div>

    </section>
  );
};

export default About;
