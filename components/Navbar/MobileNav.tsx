import { NAV_LINKS } from "@/constants/contants";
import Link from "next/link";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props ={
  isMenuOpen: boolean;
  closeNavbar: ()=> void;
}

const MobileNav = ({isMenuOpen, closeNavbar}: Props) => {
  const navOpenStyles = isMenuOpen ? 'translate-x-0':'translate-x-[-100%]';
  return (
    <div>
      <div className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white ${navOpenStyles} top-0 left-0 fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-primary space-y-6 z-1050`}>
        {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-primary hover:font-semibold transition-all duration-200"
              >
                <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.lable}</p>
              </Link>
            );
          })}
        <button className="button">Get a Quote</button>
        <IoCloseSharp onClick={closeNavbar} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  );
};

export default MobileNav;
