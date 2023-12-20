import styles from "../style";
import Button from "./EditImages";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Start Trading Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Outpace transactions with our enhanced gas modes, boasting a 99.8% chance of inclusion in the bundle.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <Button styles="bg-blue-500" />

    </div>
  </section>
);

export default CTA;
