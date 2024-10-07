import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.351C0 23.407.593 24 1.324 24H12.81v-9.293H9.692v-3.63h3.118V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.099 2.797.142v3.242h-1.918c-1.504 0-1.797.715-1.797 1.764v2.31h3.594l-.468 3.63h-3.126V24h6.126C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.797 9.797 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.862 9.862 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482 13.94 13.94 0 01-10.124-5.14 4.918 4.918 0 001.523 6.573A4.903 4.903 0 01.96 9.722v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.213.084 4.917 4.917 0 004.59 3.417A9.867 9.867 0 010 21.539a13.9 13.9 0 007.548 2.212c9.056 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.322-.024-3.023-1.844-3.023-1.846 0-2.128 1.442-2.128 2.93v5.662H9.279V9h3.437v1.561h.048c.478-.9 1.643-1.844 3.38-1.844 3.614 0 4.283 2.378 4.283 5.469v6.266zM5.337 7.433a2.002 2.002 0 11.004-4.004 2.002 2.002 0 01-.004 4.004zm-1.714 13.02H7.05V9H3.623v11.453z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
