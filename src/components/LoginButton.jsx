import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Button styles similar to StartTrading
  const buttonStyles = {
    background: 'linear-gradient(-120deg, #3CD969 0%, #084f4e 100%)',
    boxShadow: isHovered ? '0 0 100px 5px rgba(60, 217, 105, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease',
    color: 'white', // Assuming you want white text color
    // Add other styles as necessary
  };

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/login'); // Navigate to the dashboard
  };

  return (
    <button 
      type="button" 
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick} // Add onClick event handler
      className={`py-3 px-6 font-poppins font-medium text-[16px] rounded-[10px] outline-none ${styles}`}
    >
      Login
    </button>
  );
}

export default LoginButton;
