import React, { useState } from "react";

const StartTrading = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    background: 'linear-gradient(157.81deg, #FDBF47 -50%, #c36613 100%)',
    boxShadow: isHovered ? '0 0 50px 5px rgba(253, 191, 71, 0.2)' : 'none',
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
              
          Start Trading 🢁
      </button>
    </a>
  );
};

export default StartTrading;
