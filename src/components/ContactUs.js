import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-8 md:py-16 bg-[#f9f9f9] mt-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            We’d love to hear from you! Fill out the form below or reach out to us directly.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-sm font-bold text-lg hover:bg-[#3a0550] transition duration-500 w-full md:w-auto"
              >
                Send Message
              </button>
              {formSent && (
                <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2"
          >
            <h5 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-primary">
              Contact Information
            </h5>
            <motion.p
              className="text-base md:text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <FaMapMarkerAlt className="inline mr-2" /> Keranyo, Addis Ababa, Ethiopia
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <FaPhone className="inline mr-2" />{' '}
              <a href="tel:+251974436829">+251 974 436 829</a>
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <FaEnvelope className="inline mr-2" />{' '}
              <a href="mailto:nimetgraphics@gmail.com">nimetgraphics@gmail.com</a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
