import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EditImages = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const buttonStyles = {
    background: 'linear-gradient(-120deg, #3CD969 0%, #084f4e 100%)',
    boxShadow: isHovered ? '0 0 100px 5px rgba(60, 217, 105, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease',
  };

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/Dashboard'); // Replace '/your-desired-route' with the actual route you want to navigate to
  };

  return (
    <button 
      type="button" 
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick} // Add onClick event handler
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
    >
      Edit Images
    </button>
  );
};

export default EditImages;
