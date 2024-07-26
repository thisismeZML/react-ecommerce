import React from "react";
import { RiHeartAdd2Line } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useEcommerceStore } from "@/store/ecommerceStore";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Feature = ({
  product: { id, title, category, price, image, color, description },
}) => {
  const { addToCart, addToWishList, cartProducts, wishListProducts } =
    useEcommerceStore((state) => ({
      addToCart: state.addToCart,
      addToWishList: state.addToWishList,
      cartProducts: state.cartProducts,
      wishListProducts: state.wishListProducts,
    }));

  const handleAdd = () => {
    const quantity = 1;
    const cost = parseFloat(quantity * price);
    const newProduct = {
      id,
      title,
      price,
      image,
      cost,
      quantity,
    };

    const isExist = cartProducts.some((product) => product.id === id);
    if (!isExist) {
      addToCart(newProduct);
      toast.success("Your Product is added");
    } else {
      toast.error("Your Product is already existed");
    }
  };

  const handleWishAdd = () => {
    const newProduct = {
      id,
      title,
      category,
      price,
      image,
    };

    const isExist = wishListProducts.some((product) => product.id === id);
    if (!isExist) {
      addToWishList(newProduct);
      toast.success("Wish Product added");
    } else {
      toast.error("Your Product is already existed");
    }
  };
  return (
    <div className="border py-3 bg-clr-bg px-4 group relative overflow-hidden flex flex-col gap-4 animate__animated animate__fadeIn">
      <div className="">
        <p>{category.toUpperCase()}</p>
        <div className="flex flex-col p-2 gap-2 absolute right-0 top-0 translate-x-full duration-200    group-hover:translate-x-0">
          <NavLink to={`product/${id}`}>
            <button className="bg-white p-3 shadow-xl">
              <AiOutlineEye />
            </button>
          </NavLink>
          <button
            onClick={handleWishAdd}
            className="bg-clr-accent p-3 shadow-xl text-white"
          >
            <RiHeartAdd2Line />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="" />
      </div>
      <p className=" line-clamp-1">{title}</p>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <button
          onClick={handleAdd}
          className="bg-[#f5f5f5] p-2 rounded-full hover:bg-clr-accent hover:text-white duration-200"
        >
          <PiShoppingCartSimpleLight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Feature;
