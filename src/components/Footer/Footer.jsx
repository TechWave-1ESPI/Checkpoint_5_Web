import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition duration-200"
          >
            <RiTwitterXFill className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition duration-200"
          >
            <FaSquareFacebook className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-600">© 2020 PokeZizi, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
