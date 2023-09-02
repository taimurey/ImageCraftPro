import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://your-link-placeholder.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer"> {/* Replace 'your-link-placeholder.com' with your actual link */}
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-red-gradient p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-red-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-red-gradient">Started</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
