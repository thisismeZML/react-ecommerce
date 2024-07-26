import { useEcommerceStore } from "@/store/ecommerceStore";
import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const MenuDrawer = () => {
  const { isMenuOpen, toggleMenu, cartProducts } = useEcommerceStore(
    (state) => ({
      isMenuOpen: state.isMenuOpen,
      toggleMenu: state.toggleMenu,
      cartProducts: state.cartProducts,
    })
  );

  const total = cartProducts.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <div
      className={`fixed md:hidden right-0 top-0 w-full duration-300 h-screen bg-white shadow-2xl p-5 flex flex-col gap-5 font-primaryFont ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } duration-300 z-30`}
    >
      <div className="flex items-center justify-between">
        <p className=" text-lg font-bold">Menu</p>
        <button onClick={toggleMenu}>
          <HiOutlineXMark size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-5">
          <NavLink to="wishlist">
            <button>
              <FaRegHeart className=" hover:text-clr-accent text-[20px]" />
            </button>
          </NavLink>
          <p className="text-[13px]">WishList</p>
        </div>
        <div className="flex items-center gap-5">
          <NavLink>
            <button>
              <FaRegUser className="hover:text-clr-accent text-[20px]" />
            </button>
          </NavLink>
          <p className="text-[13px]">Log In</p>
        </div>
        <div className="flex items-center relative gap-5">
          <NavLink to="viewcart">
            <button className=" text-clr-accent">
              <GrCart className=" text-[20px]" />
            </button>
          </NavLink>
          <p className="flex flex-col items-center text-[12px] gap-1">
            <span className=" px-3 py-0 flex flex-col items-center justify-center text-[10px] rounded-full bg-clr-accent text-clr-bg">
              {cartProducts.length}
            </span>
            <span>${total}</span>
          </p>
        </div>
      </div>
      <div className="border-t py-3">
        <ul className="flex flex-col gap-7">
          <NavLink to="/">
            <li className=" text-clr-text  duration-300">Home</li>
          </NavLink>
          <NavLink to="store">
            <li className=" text-clr-text  duration-300">Our Store</li>
          </NavLink>
          <NavLink>
            <li className=" text-clr-text  duration-300">Blog</li>
          </NavLink>
          <NavLink>
            <li className=" text-clr-text  duration-300">Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MenuDrawer;
