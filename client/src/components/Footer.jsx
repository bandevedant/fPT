import React from 'react';
import {  FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Contact Information</h4>
            <p>Email: vedantbande200@gmail.com</p>
          </div>
          <div className="col-md-4">
            <ul className="list-inline ">
              
              <li className="list-inline-item px-5">
                <a href="https://www.twitter.com">
                  <FaTwitter size={34} />
                </a>
              </li>
              <li className="list-inline-item px-5">
                <a href="https://www.instagram.com">
                  <FaInstagram size={34} />
                </a>
              </li>
              <li className="list-inline-item px-5">
                <a href="http://www.linkedin/in/vedantjain2002">
                  <FaLinkedin size={34} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
