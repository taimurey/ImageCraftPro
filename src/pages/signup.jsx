import React from "react";
import { Link } from "react-router-dom";
import { firebaseConfig } from "./firebaseconfig";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import { Navbar } from "../components";

const Signup = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      // Use Firebase authentication to create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!");

      console.log("User signed up successfully!");
      navigate("/");

      // You can redirect the user to another page or handle the signup success as needed
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle signup failure, display an error message, etc.
      toast.error("Error signing up:", error.message);
    }
  };
  return (
    <div className="bg-[#c9e8e4] w-full relative min-h-[100vh]">
       <div className='bg-primary'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      </div>
      <div className="w-full absolute">
        <img src="./Assests/front.png" alt="" className="h-[100vh]  mx-auto" />
        <div className="bg-black/50 h-[100vh]  mx-auto w-full absolute top-0"></div>
      </div>
      <div className="w-full z-20 justify-center items-center flex flex-col gap-8 h-[100vh] bg-">
        <p className="z-20 text-3xl font-bold text-white">Sign Up</p>
        <form
          onSubmit={handleSignup}
          action=""
          className="z-20 flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-[500px]  z-20   shadow-md font-bold  bg-white  px-8 py-2 rounded-md "
          />
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="min-w-[500px]  z-20   shadow-md font-bold  bg-white  px-8 py-2 rounded-md "
          />
          <button
            className="flex z-20 min-w-[200px] justify-center shadow-md font-bold items-center bg-black text-white px-8 py-2 rounded-md "
            type="submit"
          >
            Sign Up
          </button>
          <Link to="/login">
          <button
            className="flex z-20 min-w-[200px] justify-center shadow-md font-bold items-center bg-black text-red-300 px-8 py-2 rounded-md "
            type="submit">Already Registered? Login
          </button>
          </Link>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Signup;
