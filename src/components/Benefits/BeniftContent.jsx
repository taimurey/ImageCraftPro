import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const BeniftContent = () => {
  return (
    <Tabs>
      <div className="lg:flex lg:flex-nowrap lg:space-x-10 benifit">
        <div className="lg:w-[43%]">
          {/* <!-- tabs --> */}

          <TabList className="nav nav-tabs mb-12 space-y-2">
            <Tab className="nav-item">
              <button
                className="nav-link nav-link--style-2  group relative flex w-full border-jacarta-100 p-6 text-left dark:border-jacarta-600 dark:bg-transpare"
                type="button"
              >
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
>
    <g transform="translate(0,24) scale(0.0469,-0.0469)" fill="#000000">
        <path d="M960 3590 c-332 -71 -604 -288 -746 -594 -29 -64 -57 -152 -78 -248 -4 -19 -17 -32 -39 -42 -126 -52 -126 -240 0 -292 22 -10 35 -23 39 -42 49 -223 131 -384 270 -531 203 -216 471 -331 769 -331 396 0 757 225 938 585 37 76 80 203 92 275 15 88 107 194 211 242 71 33 217 33 288 0 104 -48 196 -154 211 -242 19 -119 87 -283 164 -400 46 -70 159 -190 234 -247 311 -240 755 -281 1107 -103 294 148 488 406 564 752 4 19 17 32 39 42 126 52 126 240 0 292 -22 10 -35 23 -39 42 -21 96 -49 184 -78 248 -149 322 -448 548 -798 604 -109 18 -310 8 -418 -20 -96 -25 -241 -90 -327 -147 -83 -55 -213 -182 -271 -266 -57 -82 -112 -189 -136 -263 l-17 -51 -62 33 c-192 102 -442 102 -634 0 l-62 -33 -17 51 c-77 236 -269 460 -498 582 -216 115 -477 153 -706 104z m415 -331 c246 -76 419 -250 497 -499 33 -108 33 -292 0 -400 -80 -252 -251 -423 -502 -502 -63 -19 -95 -23 -205 -22 -113 1 -141 4 -210 27 -243 81 -430 279 -491 519 -25 98 -25 258 0 356 69 273 304 491 584 542 78 15 248 4 327 -21z m2790 -3 c241 -77 430 -277 491 -518 25 -98 25 -258 0 -356 -61 -240 -248 -438 -491 -519 -69 -23 -97 -26 -210 -27 -110 -1 -142 3 -205 22 -251 79 -422 250 -502 502 -33 108 -33 292 0 400 87 276 302 470 580 520 85 16 249 4 337 -24z"/>
    </g>
</svg>



                <div>
              <span className="mb-2 mt-1 block font-display text-xl font-bold group-hover:text-accent dark:text-white transition transition-colors ">
                Mevarik
              </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                    Mevarik, hailing from Paradis Island, is a top-tier Discord bot offering insights for token traders, 
                    rapid transaction processing, and simulation capabilities by connecting directly with MEV builders.</p>
                  </div>
                </div>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              <button
                className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zm-9.707 10.13l-2.475-2.476-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z" />
                </svg>

                <div>
                  <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
                    Voting Power
                  </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                      DAOs own the smart contracts and digital assets (NFTs) to
                      bring autonomy, removing the concept of CEO and leadership
                      from any NFT platform.
                    </p>
                  </div>
                </div>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              <button
                className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209.902-1.902a8 8 0 1 0-2.27-5.837l-.005.25h2.5l-2.706 5.716A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2zm1 4v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z" />
                </svg>

                <div>
                  <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent decoration-white transition transition-colors ">
                    Rewards & Income
                  </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                      DAOs own the smart contracts and digital assets (NFTs) to
                      bring autonomy, removing the concept of CEO and leadership
                      from any NFT platform.
                    </p>
                  </div>
                </div>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              <button
                className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zm0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13zm10.5-10.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13z" />
                </svg>

                <div>
                  <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
                    Complete Decentralization
                  </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                      DAOs own the smart contracts and digital assets (NFTs) to
                      bring autonomy, removing the concept of CEO and leadership
                      from any NFT platform.
                    </p>
                  </div>
                </div>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              <button
                className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="mr-2 h-8 w-8 flex-shrink-0 fill-accent "
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM13 11V6.5L8.5 13H11v4.5l4.5-6.5H13z" />
                </svg>

                <div>
                  <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
                    NFT Yield Farming
                  </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                      DAOs own the smart contracts and digital assets (NFTs) to
                      bring autonomy, removing the concept of CEO and leadership
                      from any NFT platform.
                    </p>
                  </div>
                </div>
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End tablist */}

        <div className="flex items-center justify-center lg:w-[57%]">
          {/* <!-- content --> */}
          <div className="tab-content flex-1">
            <TabPanel>
              <div className=" relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/src/assets/dao/benefit_dao_1.jpg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/src/assets/dao/3d_elements_circle.png"
                    alt=""
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/src/assets/dao/benefit_dao_2.jpg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/src/assets/dao/3d_elements_circle.png"
                    alt="benifit"
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/src/assets/dao/benefit_dao_3.jpg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/src/assets/dao/3d_elements_circle.png"
                    alt="benifit"
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/src/assets/dao/benefit_dao_4.jpg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/src/assets/dao/3d_elements_circle.png"
                    alt="benifit"
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" relative">
                <figure className="flex items-center justify-center">
                  <img
                    src="/src/assets/dao/benefit_dao_5.jpg"
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/src/assets/dao/3d_elements_circle.png"
                    alt="benifit"
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </Tabs>
  );
};

export default BeniftContent;
