import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks as initialNavLinks } from "../constants";  // Import it as initialNavLinks to differentiate from local state
import Button from "./discordbutton";
import Telegram from "./telegram";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [navLinks, setNavLinks] = useState(initialNavLinks); // Create local state for navLinks

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar fadeSlideInFromTop">
      <img src={logo} alt="Vaultum" className="w-[20%] h-[20%]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            style={{
              transition: 'transform 0.3s ease, filter 0.3s ease, color 0.3s ease, fontWeight 0.3s ease',
              transform: nav.isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: nav.isHovered
              ? 'drop-shadow(0 0 1px #1399e3) drop-shadow(0 0 15px #1399e3)'
              : 'none',
              color: nav.isHovered ? '#1399e3' : (active === nav.title ? 'white' : 'dimWhite'),
              fontWeight: nav.isHovered ? 'bold' : (active === nav.title ? 'bold' : 'normal')
            }}
            
            
            
            onMouseEnter={() => {
              const updatedLinks = navLinks.map(link => {
                if (link.id === nav.id) {
                  link.isHovered = true;
                }
                return link;
              });
              setNavLinks(updatedLinks);
            }}
            onMouseLeave={() => {
              const updatedLinks = navLinks.map(link => {
                if (link.id === nav.id) {
                  link.isHovered = false;
                }
                return link;
              });
              setNavLinks(updatedLinks);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        
        <Button className="absolute " styles={"ml-20"} />
        <Telegram className="absolute " styles={"ml-2"} />
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
