import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import test1 from '../assets/testimonials/HK.jpg';
import test2 from '../assets/testimonials/ZH.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Zeynu Hassen',
      testimonial: 'Nimet Graphics transformed my brand with their stunning design work. Highly recommended!',
      image: test2,
    },
    {
      name: 'Habiba Kedir',
      testimonial: 'The creativity and professionalism at Nimet Graphics are unmatched. I’m thrilled with the results!',
      image: test1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-8 px-4">
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="shadow-md bg-secondary rounded-lg overflow-visible relative flex flex-col md:flex-row items-center md:h-[400px]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="relative w-full md:w-1/2 h-[300px] md:h-full bg-[#f1f1f1] rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
          <div className="flex-1 p-6 md:p-8">
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <React.Fragment key={index}>
                  <motion.h3
                    className="text-black font-extrabold text-xl md:text-3xl lg:text-4xl mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.div
                    className="text-black text-sm md:text-lg lg:text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="leading-relaxed">{testimonial.testimonial}</p>
                  </motion.div>
                </React.Fragment>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-2 w-3 h-3 md:w-4 md:h-4 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
