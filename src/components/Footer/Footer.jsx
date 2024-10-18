import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-200"
          >
            <RiTwitterXFill className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-600">© 2020 PokeZizi, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
