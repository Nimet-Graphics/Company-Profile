import React from 'react';
import { motion } from 'framer-motion';
import historyImage from '../assets/about/history.jpg'; 
import missionImage from '../assets/about/mission.avif'; 
import visionImage from '../assets/about/vision.jpg';   

const CompanyOverview = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-6 space-y-16">

        {/* Company History */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nimet Graphics was founded in 2023 by a group of passionate designers with a vision to revolutionize the world of graphic design. Over the years, we have grown into a full-service design agency, serving clients worldwide with top-notch design solutions. Our journey began with small projects, but our dedication to quality and creativity quickly earned us a reputation for excellence. Today, Nimet Graphics is proud to be a trusted partner for businesses looking to elevate their brand through exceptional design.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={historyImage} alt="Our History" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <div className="md:w-1/2 w-full">
            <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our vision is to be a global leader in the graphic design industry, known for our creativity, innovation, and commitment to excellence. We envision a future where Nimet Graphics is the go-to agency for businesses of all sizes, helping them to create visually stunning and impactful designs that resonate with their audience. We aspire to grow and evolve with our clients, building lasting relationships and contributing to their long-term success.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission at Nimet Graphics is to empower brands through creative and innovative design solutions. We aim to deliver designs that not only meet but exceed our clients' expectations, helping them to stand out in a competitive market. By staying ahead of industry trends and continuously improving our skills, we strive to provide the highest quality of service to our clients, ensuring their success is our success.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyOverview;
