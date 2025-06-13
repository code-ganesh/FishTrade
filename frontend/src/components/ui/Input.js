// client/src/components/ui/Input.js
import React from 'react';

const Input = ({ label, id, type = 'text', value, onChange, placeholder, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sky-blue text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sea-blue ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;