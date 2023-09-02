import { useEffect } from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal, // seems unused, consider removing if not needed
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials, // seems unused, consider removing if not needed
  Hero
} from "./components";
import Benifits from "./components/Benefits/Benifits";
import Intro from "./components/Benefits/Intro";

const App = () => {
  
  useEffect(() => {
    console.log("Component did mount!");

    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg- ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

    

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        {/* <Intro /> */}
          <Stats />
          <Benifits />
          <Business />
          <Billing />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
