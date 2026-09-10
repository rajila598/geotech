"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const NavContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openNav = () => setIsMenuOpen(true);
  const closeNav = () => setIsMenuOpen(false);
  return (
    <div>
      <Navbar openNavbar={openNav}/>
      <MobileNav showNav={isMenuOpen} closeNavbar={closeNav}/>
    </div>
  );
};

export default NavContainer;
