import { useEffect, useRef } from "react";
import TradeVolume from "./TradeVolume";

const Intro = () => {
  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="container" ref={containerRef}>
        <svg className="path-svg" viewBox="0 0 100 5">
          <path className="path" d="M0 2.5 Q50 0 100 2.5" />
        </svg>
        <div className="container-inner">
          <div className="lg:flex lg:justify-between">
            <div className="relative lg:w-[45%]">
              <figure className="relative">
                <img
                  src="/images/dao/intro_dao.jpg"
                  className="rounded-2.5xl"
                  alt="web protocol"
                />
              </figure>
            </div>
            <div className="py-10 lg:w-[55%] lg:pl-24">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                Evolution of NFT Platforms Web3 Social Impact Protocol
              </h2>
              <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                NFTs are implemented on blockchains using smart contracts. Each
                token minted on the blockchain protocol carries unique information
                called Metadata.
              </p>
              <p className="dark:text-jacarta-300">
                Therefore, NFT platforms or the NFT marketplace cannot be
                centralized. However, the founders of the blockchain protocol have
                sovereignty over decisions such as launching features on the
                blockchain, establishing rules, and unveiling upgrades.
              </p>
              <TradeVolume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
