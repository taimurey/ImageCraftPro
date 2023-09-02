import React, { useState } from "react";
import { telegram } from "../assets";

const Telegram = ({ styles }) => {
  // State to control whether the SVG is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the SVG
  const defaultStyle = {
    width: '40px',
    height: '40px',
    transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease', 
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', 
    opacity: isHovered ? 1 : 0.95, 
    filter: isHovered
    ? 'drop-shadow(0 0 5px rgba(58, 209, 255, 0.2)) drop-shadow(0 0 10px rgba(58, 209, 255, 0.3))'
    : 'none'
  };

  return (
    <a href="https://t.me/YourTelegramGroupOrChannelLink" target="_blank" rel="noopener noreferrer"> {/* Replace 'YourTelegramGroupOrChannelLink' with your actual link */}
      <button type="button" className={`py-3 px-3 font-poppins font-medium text-[18px] text-primary 
      rounded-[10px] outline-none ${styles}`}>
        <img 
          src={telegram} 
          alt="Telegram" 
          style={defaultStyle} 
          onMouseEnter={() => setIsHovered(true)}  
          onMouseLeave={() => setIsHovered(false)} 
        />
      </button>
    </a>
  );
}

export default Telegram;
