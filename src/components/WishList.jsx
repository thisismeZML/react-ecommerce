import React from "react";
import WishItem from "./WishItem";
import { useEcommerceStore } from "@/store/ecommerceStore";

const WishList = () => {
  const { wishListProducts, removeFromWishList, addToCart } = useEcommerceStore(
    (state) => ({
      wishListProducts: state.wishListProducts,
      removeFromWishList: state.removeFromWishList,
      addToCart: state.addToCart,
    })
  );

  return (
    <div className="mb-[50px] font-primaryFont">
      <div className=" flex flex-col items-center justify-center  border-b py-12">
        <p className="text-3xl tracking-wider font-sans">WishList</p>
      </div>
      <div className="container mt-[30px] flex flex-col h-[50dvh] overflow-y-auto">
        <table className="w-full  ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishListProducts.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center border-b py-5 pb-11 font-primaryFont text-zinc-400"
                >
                  No Product added to the wishlist
                </td>
              </tr>
            )}
            {wishListProducts?.map((product) => (
              <WishItem
                key={product.id}
                product={product}
                removeFromWishList={removeFromWishList}
                addToCart={addToCart}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
