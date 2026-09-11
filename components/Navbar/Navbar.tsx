import React from "react";
import Logo from "../Helper/Logo";
import { NAV_LINKS } from "@/constants/contants";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import MobileNav from "./MobileNav";

type Props = {
    openNavbar: () => void;
}

const Navbar = ({openNavbar}:Props) => {
  return (
    <div className="container h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full w-[90%] xl:w-[80%] mx-auto justify-between lg:justify-center">
        {/* logo */}
        <Logo />
        {/* Links */}
        <div className="hidden lg:flex h-[10vh] md:pl-4 items-center space-x-10">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-primary hover:font-semibold transition-all duration-200"
              >
                <p>{link.lable}</p>
              </Link>
            );
          })}
        <button className="button">Get a Quote</button>
        </div>
      {/* Menu */}
      <div onClick={openNavbar} className="lg:hidden">
        <TiThMenu className="w-6 h-6 cursor-pointer"/>
        <MobileNav isMenuOpen={false} closeNavbar={function (): void {
            throw new Error("Function not implemented.");
          } } />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
