import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import banner from '../assets/banner.jpg'

const HeroWrapper = () => {
  const location = useLocation();

  const getHeroContent = () => {
    switch (location.pathname) {
      case '/about':
        return {
          title: 'About Us',
          subtitle: 'Learn more about Nimet Graphics and our journey.',
        };
      case '/portfolio':
        return {
          title: 'Our Portfolio',
          subtitle: 'Explore our creative works and successful projects.',
        };
      case '/services':
        return {
          title: 'Our Services',
          subtitle: 'Discover the wide range of services we offer.',
        };
      case '/contact':
        return {
          title: 'Get in Touch',
          subtitle: 'We would love to hear from you. Contact us today!',
        };
      default:
        return {
          title: 'Welcome to Nimet Graphics',
          subtitle: 'We create stunning graphic designs that captivate and inspire.',
        };
    }
  };

  const heroContent = getHeroContent();

  return (
    <Hero
      backgroundImage={banner}
      title={heroContent.title}
      subtitle={heroContent.subtitle}
      buttonText="Get Started"
      buttonLink="tel:+251974436829"
    />
  );
};

export default HeroWrapper;
