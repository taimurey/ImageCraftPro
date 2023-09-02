import React, { useState, useEffect } from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./StartTrading";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[75%] h-[75%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">

        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const section = document.getElementById('features');
      const position = section.getBoundingClientRect();

      if (position.top <= window.innerHeight && position.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check initially if it's visible without scrolling

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} ${isVisible ? "slide-in-from-right visible" : "slide-in-from-right"}`}>
        <h2 className={styles.heading2}>
          Lightning Trades,  <br className="sm:block hidden" /> Seamless Wins.
        </h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
          Empower Your Token Ecosystem – Vesting, Payroll, Airdrops, Grants, & Beyond!
        </p>

        <Button styles={`mt-10`} />
      <div className="absolute z-[0] w-[50%] h-[100%] right-20 bottom-20 pink__gradient" />

      </div>

      <div className={`${layout.sectionImg} flex-col ${isVisible ? "slide-in-from-left visible" : "slide-in-from-left"}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
