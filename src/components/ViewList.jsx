import React from "react";
import { HiXMark } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { TableCell, TableRow } from "./ui/table";
import { useEcommerceStore } from "@/store/ecommerceStore";

const ViewList = ({ product: { id, title, price, image, quantity, cost } }) => {
  const { updateQuantity, removeFromCart } = useEcommerceStore((state) => ({
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));
  return (
    <TableRow>
      <TableCell className="md:w-[500px] w-full">
        <div className="md:grid md:grid-cols-3 items-center md:text-start gap-3 flex flex-col">
          <div className="col-span-1 flex items-center justify-center">
            <img src={image} className="h-20" alt="" />
          </div>
          <p className="col-span-2 line-clamp-2 md:line-clamp-none overflow-auto">
            {title}
          </p>
          <p className="md:hidden">${price}</p>
          <div className="flex items-center rounded-full border p-2 justify-between md:hidden">
            <button onClick={() => updateQuantity(id, -1)}>
              <HiOutlineMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(id, 1)}>
              <HiOutlinePlus />
            </button>
          </div>
          <p className="md:hidden">${cost}</p>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">${price}</TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="flex items-center rounded-full border p-2 justify-between">
          <button onClick={() => updateQuantity(id, -1)}>
            <HiOutlineMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => updateQuantity(id, 1)}>
            <HiOutlinePlus />
          </button>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">${cost}</TableCell>
      <TableCell>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-clr-accent px-4 py-2 text-sm text-zinc-100 rounded-full tracking-wide hover:bg-blue-700 transition-colors duration-200"
        >
          <HiXMark />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ViewList;
