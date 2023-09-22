import styles from "../style";
import { discount, robot, videoAsset } from "../assets";
import GetStarted from "./GetStarted";
import StartTrading from "./StartTrading";
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
            Blazing Fast <br className="sm:block hidden" />
            <span className="bg-red-gradient "> Discord</span>
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full slide-in-from-left delay-500">
          Crypto Sniper
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 slide-in-from-left`}>
          Introducing Mevarik, the Ultimate Discord Sniper. Offering an unparalleled user experience, it delivers lightning-fast reactions and impeccable token simulations, all powered by precision. Venture into crypto's new frontier with Mevarik.
        </p>
      </div>
      <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative justify-between`}>
        <div className="video-container">
          <video ref={videoRef} src={videoAsset} className="w-full   h-full documentationAnimation2"></video>
          <div ref={overlayRef} className="video-overlay documentationAnimation2" onClick={playVideo}>
            <div className="play-button documentationAnimation2"></div>
          </div>
        </div>
        <div className="ss:flex hidden space-x-5 md:mr-5 mr-0 mt-10">
          <div className="transform scale-95 startTradingAnimation">
            <StartTrading />
          </div>
          <div className="transform scale-95 documentationAnimation">
            <Documentation />
          </div>
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[75%] top-0  blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[100%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[100%] left-20 bottom-40 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
