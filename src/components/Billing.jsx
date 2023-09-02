import { useEffect, useRef } from 'react';
import { apple, hourglass, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          textRef.current.classList.add('visible');
          imageRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(textRef.current);
    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className={layout.sectionReverse}>
      <div ref={imageRef} className={`${layout.sectionImgReverse} slide-in-from-left`}>
        <img src={hourglass} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-[100px]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div ref={textRef} className={`${layout.sectionInfo} slide-in-from-right`}>
        <h2 className={styles.heading2}>
          Streamline transactions <br className="sm:block hidden" /> with our intuitive, advanced UI.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our advanced bot simplifies tracking transactions in one place with responsive features for seamless management.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
