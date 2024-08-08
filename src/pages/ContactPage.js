import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactUsImg from '../assets/contactus.jpeg'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-8">
          {/* Contact Form */}
          <motion.div
            className="md:pr-8"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Let's collaborate together</h2>
            <p className="text-md mb-6">Feel free to contact</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  placeholder='Your Name'
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  placeholder='Your Email'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder='Your Message'
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
              >
                Send Message
              </button>
              {formSent && (
                <p className="text-green-500 mt-4">Your message has been sent successfully!</p>
              )}
            </form>
          </motion.div>

          {/* Contact us Image */}
          <motion.div
            className="md:w-full flex justify-center"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
            <img
              src={contactUsImg}
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-lxl h-auto"
              style={{ maxHeight: '400px' }} // Adjust the maximum height as needed
            />
          </motion.div>
          </div>

          {/* Contact Details */}
          <motion.div
            className='mt-20 px-4 sm:px-6 md:px-8'
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
          >
          <div className='text-center'>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-6 text-primary">Contact Us</h1>
            <p className='mb-4 mt-2 text-md'>Get in touch with us</p>
          </div>
    
          <div className='container mx-auto flex flex-col md:flex-row items-center justify-center'>
    
            <div className='py-6 px-10 flex flex-col justify-center items-center'>
              <FaPhoneAlt  className="text-primary mb-2 w-6 h-6" />
              <h3 className='text-md leading-tight mt-4'>+251 974-436-829</h3>
            </div>
    
            <div className='py-6 px-10 flex flex-col justify-center items-center'>
              <FaEnvelope className="text-primary mb-2  w-6 h-6" />
              <h3 className='text-md leading-tight mt-4'>neimanesru34@gmail.com</h3>
            </div>
    
            <div className='py-6 px-10 flex flex-col justify-center items-center'>
              <FaMapMarkerAlt  className="text-primary mb-2  w-6 h-6" />
              <h3 className='text-md leading-tight mt-4'>Keranyo, Addis Ababa, Ethiopia</h3>
            </div>
    
          </div>
          </motion.div>
        
      </div>
    </section>
  );
};

export default ContactPage;
