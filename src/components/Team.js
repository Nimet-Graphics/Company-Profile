import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../assets/team/HK.jpg'; 
import member2 from '../assets/team/ZH.jpeg'; 

const teamMembers = [
  {
    name: 'Neima Nesru',
    role: 'Founder & Lead Designer',
    image: member1,
    description: 'Neima is the creative force behind Nimet Graphics, with a passion for crafting visually stunning designs. With years of experience in the design industry, Neima leads the team with a focus on innovation and client satisfaction.',
    web:'https://neima-nesru.github.io/my-portfolio-website/'
  },
  {
    name: 'John Doe',
    role: 'Creative Director',
    image: member2,
    description: 'John is responsible for overseeing all creative projects, ensuring they meet the highest standards. His expertise in design and his ability to inspire the team makes him an invaluable asset to Nimet Graphics.',
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Get to know the talented individuals behind our success.
        </motion.p>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((teamMember, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <img src={teamMember.image} alt={teamMember.title} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <p>{teamMember.description}</p>
                </div>
              </div>

              <div className='text-left p-4'>
                <h3 className="text-xl font-bold mb-2">{teamMember.name}</h3>
              
                <p className="mb-2">{teamMember.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Team;
