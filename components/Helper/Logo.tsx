import React from "react";
import { FaBuilding } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <FaBuilding className="text-white" />
      </div>
      <div className="text-xl hidden sm:block md:text-2xl text-primary font-bold">
        Logo
      </div>
    </div>
  );
};

export default Logo;
