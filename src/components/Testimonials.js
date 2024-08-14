import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import test1 from '../assets/testimonials/HK.jpg';
import test2 from '../assets/testimonials/ZH.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Zeynu Hassen',
      role: 'Entrepreneur',
      testimonial: 'Nimet Graphics transformed my brand with their stunning design work. Highly recommended!',
      image: test2,
    },
    {
      name: 'Habiba Kedir',
      role: 'Marketing Director',
      testimonial: 'The creativity and professionalism at Nimet Graphics are unmatched. I’m thrilled with the results!',
      image: test1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-16 px-4 text-center">
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
         Testimonials
        </motion.h2>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          What our Clients say about our Servies.
        </motion.p>

        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                className="relative  shadow-sm rounded-lg bg-white overflow-hidden p-8 md:p-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary opacity-30 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-left">
                    <FaQuoteLeft className="text-xl text-primary mb-4" />
                    <p className="text-lg leading-relaxed text-gray-700 transition-opacity duration-300">
                      {testimonial.testimonial}
                    </p>
                    <h3 className="text-black font-bold text-lg md:text-xl mt-4 transition-opacity duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-500 transition-opacity duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: currentIndex === index ? 1.2 : 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          ></motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
