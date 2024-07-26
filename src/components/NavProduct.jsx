import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { PiDeviceTabletSpeakerLight } from "react-icons/pi";
import { IoFlashlightOutline } from "react-icons/io5";

const NavProduct = () => {
  return (
    <div className="mb-[30px] font-primaryFont">
      <div className="container border-t border-b flex flex-col md:flex-row items-center justify-between py-7 overflow-auto flex-wrap gap-7 lg:gap-0">
        <div className="flex items-center gap-2">
          <FiSmartphone />
          <NavLink to="/store?category=mobile">
            <span className="">
              Mobile phone
            </span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <IoGameControllerOutline />
          <NavLink to="/store?category=gaming">
            <span>Games</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <MdComputer />
          <NavLink to="/store?category=tv">
            <span>Television</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <CiHeadphones />
          <NavLink to="/store?category=audio">
            <span>Headphones</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <PiDeviceTabletSpeakerLight />
          <NavLink to="/store?category=laptop">
            <span>Laptop & Computer</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <IoFlashlightOutline />
          <NavLink to="/store?category=appliances">
            <span>Appliances</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavProduct;
