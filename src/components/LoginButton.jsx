import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import personSvg from '../assets/person.svg'; // Import SVG

const LoginButton = ({ styles }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe(); // Cleanup subscription
  }, [auth]);

  const imageStyles = { // Corrected the variable name here
    width: '30px',
    height: '30px',
  };

  if (isLoggedIn) {
    return <img src={personSvg} style={imageStyles} alt="User Logged In" />;
  }

  const buttonStyles = {
    background: 'linear-gradient(-120deg, #3CD969 0%, #084f4e 100%)',
    color: 'white',
  };

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <button
      type="button"
      style={buttonStyles}
      onClick={handleButtonClick}
      className={`py-3 px-6 font-poppins font-medium text-[16px] rounded-[10px] outline-none ${styles}`}
    >
      Login
    </button>
  );
};

export default LoginButton;
