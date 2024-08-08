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
    <div className="relative mt-8">
      <div className="max-w-sm mx-auto">
        <div className="shadow-md h-[522px] w-[744px] bg-secondary rounded-lg overflow-visible relative">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="absolute top-[35px] left-[-322px] w-[462px] h-[449px] bg-[#f1f1f1]"
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
          <div className="pl-20 pt-6 pb-8 pr-6 font-roboto">
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <React.Fragment key={index}>
                  <motion.h3
                    className="text-black font-extrabold text-[40px] absolute right-[230px] top-[50px]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.div
                    className="w-[490px] h-[270px] rounded-lg p-4 mt-4 absolute right-[60px] top-[130px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="text-black text-[20px] p-5">
                      {testimonial.testimonial}
                    </p>
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
            className={`mx-2 w-6 h-3 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
