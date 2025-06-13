// client/src/components/ui/Button.js
import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-sea-blue hover:bg-sky-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;