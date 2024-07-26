import { useEcommerceStore } from "@/store/ecommerceStore";
import React from "react";
import ViewList from "./ViewList";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";

const ViewCart = () => {
  const { cartProducts, removeFromCart } = useEcommerceStore((state) => ({
    cartProducts: state.cartProducts,
    removeFromCart: state.removeFromCart,
  }));

  const total =  cartProducts.reduce((pv,cv) => pv + parseFloat(cv.cost),0)

  return (
    <div className="mb-[50px] font-primaryFont">
      <div className="flex flex-col items-center justify-center border-b py-12">
        <p className="text-3xl tracking-wider font-sans">Shopping Cart</p>
      </div>
      <div className="container mt-[30px] flex flex-col h-[50dvh] overflow-y-auto">
        {cartProducts.length === 0 && (
          <div>
            <div className="text-center mb-8 border-b py-5 pb-11 font-primaryFont text-zinc-400">
              Your cart is currently empty.
            </div>
            <div className="flex flex-col items-center justify-center">
              <NavLink to="/">
                <button className=" bg-clr-accent px-6 py-2 text-white">
                  Return To Shop
                </button>
              </NavLink>
            </div>
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow></TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {cartProducts.map((product) => (
              <ViewList
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </TableBody>
          <TableFooter>
            {cartProducts.length !== 0 && (
              <TableRow>
                <TableCell colSpan={3} className="hidden md:table-cell">
                  Total
                </TableCell>
                <TableCell colSpan={4} className="text-center md:text-start">
                  ${total}
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ViewCart;
