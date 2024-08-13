import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Header from './components/Header'; 
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
