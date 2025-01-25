import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <ul className='flex space-x-6 items-center justify-center'>
                <li>
                  <a href='https://www.instagram.com/shk_haseeb_/' target='_blank' rel="noopener noreferrer">
                    <FaInstagram className='text-2xl cursor-pointer' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/shaseeb843' target='_blank' rel="noopener noreferrer">
                    <FaGithub className='text-2xl cursor-pointer' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/sheikh-haseeb-0a8738262/' target='_blank' rel="noopener noreferrer">
                    <FaLinkedin className='text-2xl cursor-pointer' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-7 flex flex-col items-center'>
              <p>&copy; 2025 Sheikh Haseeb. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
