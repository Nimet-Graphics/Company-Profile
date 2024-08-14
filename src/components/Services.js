import React from 'react';
import { motion } from 'framer-motion';
import { MdDesignServices  } from 'react-icons/md';
import {  FaPaintBrush, FaCode, FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon:<FaPaintBrush className="w-10 h-10 mx-auto mb-4 text-primary" />,
    title: 'DESIGN SOLUTIONS',
    description: "From logo design and branding to print materials such as business cards, banners, flyers, and brochures, I specialize in creating visually striking assets."
  },
  {
    icon:  <MdDesignServices className="w-10 h-10 mx-auto mb-4 text-primary" />,
    title: 'UX/UI',
    description: "Whether you're looking for responsive design or user-friendly interfaces, I specialize in crafting websites that reflect your unique brand identity and engage your target audience."
  },
  {
    icon: <FaCode className="w-10 h-10 mx-auto mb-4 text-primary" />,
    title: 'WEB DEV\'T',
    description: "An online presence for the business has become a must in today’s world. I build hybrid web apps that assure your online presence."
  }
];

const Services = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 mt-20'>
      <div className='text-center'>              
        <motion.h2
          className="text-3xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >Our Top Services
        </motion.h2>

        <motion.p
          className="text-md mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        > we offer a range of professional services tailored to meet your needs. 
        </motion.p>
      </div>

      <div className='container mx-auto'>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} interval={5000} className='md:hidden'>
          {servicesData.map((service, index) => (
            <motion.div key={index} 
            className='border rounded m-4 py-6 px-5 text-center'
             initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}>
                {service.icon}              
              <motion.h2
          className="text-xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >{service.title}</motion.h2>

        <motion.p
          className="text-md mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >{service.description}</motion.p>
            </motion.div>
          ))}
        </Carousel>

        <div className='hidden md:flex flex-row justify-center'>
          {servicesData.map((service, index) => (
            <motion.div key={index} 
            className='border rounded m-4 md:m-10 py-6 px-5 w-full md:w-1/3 text-center'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}>
              {service.icon}
              

              <motion.h2
          className="text-lg font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >{service.title}</motion.h2>

        <motion.p
          className="text-md mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >{service.description}</motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      <Link to='/services' className="flex justify-end mt-8 mr-4">
        <button 
              className="bg-primary text-white font-semibold px-4 py-2 rounded"
            >
              Show More Services <FaArrowRight className='text-white inline ml-1'/>
            </button>
        </Link>
    </div>
  );
}

export default Services;