import BeniftContent from "./BeniftContent";
import { useEffect, useRef } from "react";

const Benifits = () => {
  const container2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('scrolled');
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );

    if (container2Ref.current) {
      observer.observe(container2Ref.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>
        {/* <!-- Benefits --> */}
        <section className="py-6 dark:bg-jacarta-900" id="features" >
            <div className="container2" ref={container2Ref}>
                <div className="mx-auto mb-16 max-w-xl text-center">
                    <h2 className="font-sans mb-6 text-center text-5xl font-bold text-jacarta-700 bg-fire-gradient gradient-text">
                        Meet Mevarik!
                    </h2>
                    <p className="font-poppins text-lg dark:text-jacarta-300">
                        The Blazing Fast Pinnacle of Crypto Bots from Paradis Island.
                    </p>
                </div>
                <BeniftContent />
            </div>
        </section>
        {/* <!-- end benefits --> */}
    </>
);
  };

export default Benifits;
