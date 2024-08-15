import React from 'react';
import { motion } from 'framer-motion';
import { MdDesignServices, MdBrandingWatermark } from 'react-icons/md';
import { FaBullhorn, FaBox, FaEnvelope, FaPaintBrush, FaCode } from 'react-icons/fa';


const services = [
  { title: 'Branding', description: 'Building a strong and cohesive brand identity.', icon: <MdBrandingWatermark className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'Promotional Design', description: 'Crafting designs that promote your products and services.', icon: <FaBullhorn className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'Package Design', description: 'Designing packaging that stands out and attracts attention.', icon: <FaBox className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'Invitation Card Design', description: 'Designing personalized and beautiful invitation cards.', icon: <FaEnvelope className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'Graphic Design', description: 'Creating visually stunning graphics for all your needs.', icon: <FaPaintBrush className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'UI/UX Design', description: 'Designing user interfaces and experiences that are both intuitive and engaging.', icon: <MdDesignServices className="w-10 h-10 mx-auto mb-4 text-primary" /> },
  { title: 'Web Development', description: 'Developing modern and responsive websites tailored to your needs.', icon: <FaCode className="w-10 h-10 mx-auto mb-4 text-primary" /> }
];

const Services = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <motion.div 
       initial={{ opacity: 0, scale: 0.95 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="container mx-auto px-6">
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
          Our Services
        </motion.h2>

        <motion.p
          className="text-md mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >           
          At Nimet Graphics, we offer a comprehensive range of design and development services tailored to meet your unique needs.
            Our expert team is dedicated to delivering creative and effective solutions that elevate your brand.
          
        </motion.p>
        </motion.div>



        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut'}}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-500"
            >
              {service.icon}
              <h2 className="text-lg font-bold mb-3 text-primary">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
