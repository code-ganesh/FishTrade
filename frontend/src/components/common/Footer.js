// client/src/components/common/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sea-blue p-4 text-white text-center text-sm mt-auto z-50 relative">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} AquaTrade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;