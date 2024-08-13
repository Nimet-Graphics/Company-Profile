import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h3 className="text-2xl font-roboto font-bold mb-4">Nimet Graphics</h3>
          <ul className="space-y-2">
            <li>
              <a href="/portfolio" className="font-roboto hover:text-purple-700">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="font-roboto hover:text-purple-700">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="font-roboto hover:text-purple-700">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="font-roboto hover:text-purple-700">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="font-roboto hover:text-purple-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-roboto font-bold mb-4">More</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-purple-700 font-roboto">
                FAQ
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-purple-700 font-roboto">
                Support
              </a>
            </li>
            <li>
              <a href="/feedback" className="hover:text-purple-700 font-roboto">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="text-lg font-roboto font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto bg-gray-200 px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
            />
            <button className="bg-purple-700 hover:bg-opacity-80 px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none mt-4 sm:mt-0 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.behance.net"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              <FaBehance />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400">
            &copy; 2023 Nimet Graphics. All rights reserved.
          </div>

          {/* Policy Links */}
          <div className="space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-purple-700 hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
