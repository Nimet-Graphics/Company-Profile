import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white p-4 sm:p-6 md:p-8">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-4 text-primary mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-xl lg:text-2xl mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>
        <TypeAnimation
          sequence={[
            'Logo Design',
            1000,
            'Business Card Design',
            1000,
            'Invitation Card Design',
            1000,
            'Banner Design',
            1000,
            'Infographics',
            1000,
            'UX/UI Design',
            1000,
            'Web Development',
            1000,
          ]}
          wrapper="span"
          speed={1}
          style={{ fontSize: '2em', fontWeight:'bold', display: 'inline-block' , color:'#42065B'}}
          repeat={Infinity}
        />
        <div className='mt-16'>
        {buttonText && buttonLink && (
          <motion.a
            href={buttonLink}
            className="bg-primary text-white py-3 px-4 rounded hover:opacity-70 transition duration-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            <button>{buttonText}</button>
          </motion.a>
        )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
