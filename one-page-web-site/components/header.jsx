import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo.png";
import MobileNavbar from "./mobileNavbar";
import Navbar from "./navbar";
function Menu() {
  return (
    <div className="flex w-[100%] h-68  place-items-center lg:justify-around justify-between px-3 lg:px-0 bg-[#0C0C0C] h-[68px] fixed top-0 z-50">
      <Image src={Logo} alt="no image" />
      <div className="lg:block hidden ">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}

export default Menu;
