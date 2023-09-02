import React, { useState } from "react";
import { discord } from "../assets";

const Button = ({ styles }) => {
  // State to control whether the SVG is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the SVG
  const defaultStyle = {
    width: '45px',
    height: '45px',
    transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',  // Add opacity and box-shadow to the transition
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    opacity: isHovered ? 1 : 0.95,  // Change opacity based on hover state
    filter: isHovered
    ? 'drop-shadow(0 0 5px rgba(58, 209, 255, 0.2)) drop-shadow(0 0 10px rgba(58, 209, 255, 0.3))' // double drop-shadow for a more intense glow
    : 'none'
  };

  return (
    <a href="https://discord.gg/TKjPZcJcYP" target="_blank" rel="noopener noreferrer">
      <button type="button" className={`py-3 px-3 font-poppins font-medium text-[18px] text-primary 
      rounded-[10px] outline-none ${styles}`}>
        <img 
          src={discord} 
          alt="Discord" 
          style={defaultStyle} 
          onMouseEnter={() => setIsHovered(true)}  // Set hover state to true when mouse enters
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
        />
      </button>
    </a>
  );
}

export default Button;
