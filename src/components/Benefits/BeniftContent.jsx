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
      {/* New SVG */}
      <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8 flex-shrink-0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#f89238", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#d3148b", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" d="M229.096 33l-43.082 71.803 30.744 76.857 15.726 110.098L243.73 303h24.542l11.245-11.242 15.726-110.098 30.744-76.857L282.904 33H265v151h-18V33h-17.904zm-80.77 16l-46.242 57.799 71.719 15.937-7.817-19.539L198.504 49h-50.178zm165.17 0l32.518 54.197-7.815 19.54 71.715-15.938L363.674 49h-50.178zM60.262 115.943l11.353 45.41 131.576 52.631-3.949-27.644-17.346-43.365-121.634-27.032zm391.476 0l-121.634 27.032-17.346 43.365-3.95 27.644 131.577-52.63 11.353-45.41zM89 187.693v73.05l62 74.4v-57.268l16.055-32.111L112 232v-35.107l-23-9.2zm334 0l-23 9.2V232l-55.055 13.764L361 277.875v57.268l62-74.4v-73.05zm-227.986 42.405L169 282.125V390l52-39h70l52 39V282.125l-26.014-52.027-11.115 4.445-9.387 65.7L275.73 321H236.27l-20.755-20.758-9.387-65.699-11.115-4.445zM134.826 343.85l-13.072 91.507L167 462.504V435.5l70-52.5h38l70 52.5v27.004l45.246-27.147-13.074-91.505L361 363.258V426l-76-57h-58l-76 57v-62.742l-16.174-19.408zM243 401l-58 43.5v28.805l9.492 5.695H247v-23h18v23h52.508l9.492-5.695V444.5L269 401h-26z"/>
      </svg>


      <div>
        <span className="mb-2 mt-1 block font-display text-xl font-bold group-hover:text-accent dark:text-white transition transition-colors ">
          Mevarik
        </span>
        <div className="nav-link-content hidden">
          <p className="text-jacarta-500 dark:text-jacarta-300">
            Mevarik, hailing from Paradis Island, is a top-tier Discord bot offering insights for token traders, 
            rapid transaction processing, and simulation capabilities by connecting directly with MEV builders.
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
              {/* Start of new SVG */}
              <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8 flex-shrink-0 fill-accent">
                <defs>
                  <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#03a0c9", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#f60c81", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <g>
                  <path fill="url(#gradient-2)" d="M444.969,118.656c-18.016-18.359-42.063-28.844-67.703-29.531l-8.672-0.234l-1.828-8.469
                    c-4.844-22.422-17.344-42.828-35.25-57.453C313.125,7.969,290.844,0.016,267.047,0C243,0.016,220.516,8.109,202.016,23.422
                    C184,38.344,171.594,59.094,167.031,81.859l-2.125,10.531l-10.625-1.859c-6.094-1.031-11.625-1.547-16.922-1.547
                    c-26.203,0.016-50.875,10.219-69.5,28.797c-18.547,18.578-28.75,43.25-28.766,69.469c0.016,26.219,10.219,50.875,28.797,69.5
                    c18.578,18.547,43.25,28.781,69.484,28.781h43.703l90.313-103.344l54.297-57.922c3.375-3.594,8.844-4.234,12.938-1.5
                    c4.109,2.734,5.641,8.016,3.625,12.516l-67.156,150.25h99.563c26.203,0,50.875-10.234,69.484-28.797
                    c18.531-18.609,28.75-43.266,28.766-69.484C472.891,161.531,462.984,137.188,444.969,118.656z"/>
                  <polygon fill="url(#gradient-2)" points="287.469,196.25 133.672,372.25 176.156,374.844 117.5,512 331.047,299.781 250.078,299.781"/>
                </g>
              </svg>
              {/* End of new SVG */}

              <div>
              <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
                Ultra-Fast Response Time
                </span>
                <div className="nav-link-content hidden">
                  <p className="text-jacarta-500 dark:text-jacarta-300">
                  Built with the efficiency of Rust, our bot boasts lightning-fast response times, clocking in at less than 1 second. Experience real-time interactions like never before.
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
                ><defs>
                <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#f72560", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#b20791", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="url(#gradient-3)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209.902-1.902a8 8 0 1 0-2.27-5.837l-.005.25h2.5l-2.706 5.716A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2zm1 4v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z" />
                </svg>

                <div>
                  <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent decoration-white transition transition-colors ">
                  Private Transactions
                  </span>
                  <div className="nav-link-content hidden">
                    <p className="text-jacarta-500 dark:text-jacarta-300">
                    Our bot ensures the utmost privacy by utilizing Flashbots bundles for transactions. These transactions are sent directly to the miners and MEV (Miner Extractable Value) builders, bypassing public mempools and ensuring that your transaction details remain confidential.
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
    {/* Start of new SVG */}
    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8 flex-shrink-0 fill-accent">
    <defs>
        <linearGradient id="gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00c6e2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2e3154", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path fill="url(#gradient-4)" d="M453.004 35.117c-65.314 46.61-189.755 41.018-213.559 125.426C184.41 101.41 98.625 83.031 21.771 63.209c6.532 139.103 71.38 147.437 192.44 194.547 23.71 25.786 29.786 49.93 19.254 82.705 46.403 5.1 71.504 15.468 106.754 27.742-.708-71.67-25.14-108.928-75.518-175.035 11.058 4.233 44.979 37.02 56.578 58.607 109.419-42.421 147.64-112.074 131.725-216.658zM180.178 353.9c-60.89-.24-114.034 19.49-158.426 74.221 167.075-48.84 292.003-13.21 471.893 7.895-118.936-38.752-224.474-81.763-313.467-82.116zm98.043 77.844c-99.28.255-206.34 18.738-256.866 63.139 168.002-26.61 356.801-28.408 470.8-4.967 1.102-35.337-101.418-58.46-213.934-58.172z"/>
    </svg>
    {/* End of new SVG */}

    <div>
      
        <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
        Whale Tracer Mode
      </span>
      <div className="nav-link-content hidden">
        <p className="text-jacarta-500 dark:text-jacarta-300">
          Keep an eye on the big players. Trace the wallet balances of token holders, especially those who've recently acquired the token. Stay informed and strategize accordingly.
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
          {/* Start of new SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="24"
            height="24"
            className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
          ><defs>
          <linearGradient id="gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#41c79f", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#009aa3", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#gradient-5)"d="M28.021 24.161l-11.552 6.505v-5.068l7.198-3.943zM28.813 23.448v-13.609l-4.229 2.432v8.745zM3.901 24.161l11.552 6.505v-5.068l-7.198-3.943zM3.109 23.448v-13.609l4.229 2.432v8.745zM3.604 8.958l11.849-6.672v4.901l-7.646 4.188zM28.318 8.958l-11.849-6.672v4.901l7.646 4.188zM15.453 24.448l-7.099-3.891v-7.703l7.099 4.083zM16.469 24.448l7.099-3.891v-7.703l-7.099 4.083zM8.833 11.964l7.13-3.901 7.13 3.901-7.13 4.099z"/>
          </svg>
          {/* End of new SVG */}

          <div>
            <span className="mb-2 mt-1 block font-display text-xl font-bold text-jacarta-700 group-hover:text-accent dark:text-white transition transition-colors ">
              Transaction Bundling
            </span>
            <div className="nav-link-content hidden">
              <p className="text-jacarta-500 dark:text-jacarta-300">
                Why send one when you can send many? Bundle multiple transactions together 
                for a streamlined and efficient process.
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
