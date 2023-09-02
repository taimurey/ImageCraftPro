import React, { useState } from "react";

const Documentation = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    background: 'linear-gradient(157.81deg, #B2DFDB 0%, #0097A7 100%)', // Updated gradient
    boxShadow: isHovered ? '0 0 50px 5px rgba(178, 223, 219, 0.2)' : 'none', // Updated box shadow color
    transition: 'box-shadow 0.3s ease',
  };

  return (
    <a href="https://your-link-placeholder.com" target="_blank" rel="noopener noreferrer">
      <button 
          type="button" 
          style={buttonStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}>
              
              Documentation 🢁
      </button>
    </a>
  );
};

export default Documentation;
