import React, { useState } from "react";

const StartTrading = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    background: 'linear-gradient(-120deg, #3CD969 0%, #084f4e 100%)',
    boxShadow: isHovered ? '0 0 100px 5px rgba(60, 217, 105, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease',
    
  };

  return (
    <a href="https://discord.gg/TKjPZcJcYP" target="_blank" rel="noopener noreferrer">
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
