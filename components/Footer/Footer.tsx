import React from "react";
import { BiCopyright } from "react-icons/bi";
import Logo from "../Helper/Logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-gray-400 container py-8 lg:py-12">
        {/* upper part */}
        <div className="grid justify-between gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4">
          <div className="">
            <Logo />
            <p className="py-3 ">
              Providing reliable geotechnical and environmental inspection,
              testing, and consulting services to support safe, sustainable, and
              informed project decisions.
            </p>
            <p className="text-white text-xl py-3">Connect With Us</p>
            <div className="flex gap-4 text-xl text-white">
              <a href="#" className="hover:text-brand-accent">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-brand-accent">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-brand-accent">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="footer-subheading">About</h1>
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Leadership Team
            </a>
            <a href="#" className="footer-link">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="footer-subheading">Need Help?</h1>
            <p className="flex flex-col gap-1">
              Call us{" "}
              <a href="#" className="footer-link">
                123-456-789
              </a>
            </p>
            <p className="flex flex-col gap-1">
              Write Us{" "}
              <a href="#" className="footer-link">
                info@rajila.np
              </a>
            </p>
          </div>
          <div>
            <h1 className="footer-subheading">Australia Head Office</h1>
            <p>45/111-222 Victoria Street</p>
            <p>Wetherill Park, NSW 2164</p>
            <h1 className="footer-subheading pt-4">QDL Office</h1>
            <p>4/18 Spine St</p>
            <p>Sumner, QLD 4074</p>
          </div>
        </div>
        <hr />
        {/* below part */}
        <div className="justify-between py-4">
          <div>
            <p className="flex">
              <BiCopyright /> 2026 AETG - All Rights reserved.{" "}
              <a href="#" className="underline footer-link">
                Privacy Policy
              </a>
              <span> | </span>
              <a href="#" className="underline footer-link">
                Terms of Use
              </a>
            </p>
          </div>
          <div>
            <p>
              Powered by{" "}
              <a href="#" className="underline hover:text-brand-accent">
                Geocon Engineering Consultancy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
