import styles from "../style";
import { discount, robot, imageuploadbutton } from "../assets";
import GetStarted from "./GetStarted";
import EditImages from "./EditImages";
import Documentation from "./Documentation";
import React, { useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.setAttribute('controls', ''); // Add controls to the video
      overlayRef.current.style.display = 'none'; // hide the overlay after playing
    }
}


  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[60px] text-white ss:leading-[100.8px] leading-[75px] slide-in-from-left">
            ImageCraft Pro <br className="sm:block hidden" />
            <span className="bg-red-gradient "> offers</span>
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full slide-in-from-left delay-500">
          Real Time Upscalers
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 slide-in-from-left`}>
          Unparalled experience in upscaling images and dynamic object Manipulation.
          </p>
      </div>
      <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative justify-between`}>
      <div className="img-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* image */}
          <img 
            src={imageuploadbutton} 
            alt="Upload Button" 
            style={{ opacity: 1 }}
          />
        </div>

        <div className="ss:flex hidden space-x-5 md:mr-5 mr-0 mt-10">
         
        </div>
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[75%] top-0  blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[100%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[100%] left-20 bottom-40 blue__gradient" />
        {/* gradient end */}
      </div> */
      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
