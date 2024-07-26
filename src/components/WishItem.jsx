import { useEcommerceStore } from "@/store/ecommerceStore";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import { LiaCartPlusSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const WishItem = ({
  product: { id, title, image, price },
  removeFromWishList,
  addToCart,
}) => {
  const { cartProducts } = useEcommerceStore((state) => ({
    cartProducts: state.cartProducts,
  }));

  const handleAdd = () => {
    const quantity = 1;
    const cost = parseFloat(quantity * price);
    const newProduct = {
      id,
      title,
      image,
      price,
      quantity,
      cost,
    };
    const isExist = cartProducts.some((product) => product.id === id);
    if (!isExist) {
      addToCart(newProduct);
      toast.success("Your Product is added");
    } else {
      toast.error("Your Product is already existed");
    }
  };
  return (
    <tr className="border-b font-primaryFont flex flex-col gap-2 md:gap-0  md:table-row py-8">
      <td className="flex justify-center md:table-cell">
        <button
          onClick={() => removeFromWishList(id)}
          className="md:hidden inline-block text-red-500"
        >
          Remove
        </button>
        <button
          onClick={() => removeFromWishList(id)}
          className="hidden md:inline-block"
        >
          <HiXMark size={23} />
        </button>
      </td>
      <td className="flex flex-col md:flex-row justify-center items-center md:justify-start">
        <img
          className="w-24 h-24 object-cover rounded-md"
          src={image}
          alt={title}
        />
        <p className=" px-8 text-center md:text-left">{title}</p>
      </td>
      <td className="text-center md:table-cell px-5">${price.toFixed(2)}</td>
      <td className="flex justify-center md:table-cell text-end">
        <button
          onClick={handleAdd}
          className="bg-clr-accent px-4 py-2 text-sm text-zinc-100 rounded-full tracking-wide hover:bg-blue-700 transition-colors duration-200"
        >
          <LiaCartPlusSolid />
        </button>
      </td>
    </tr>
  );
};

export default WishItem;
