import { BaseUrl } from "@/config/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEcommerceStore } from "@/store/ecommerceStore";
import DetailSkeleton from "@/Loader/DetailSkeleton";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { addToCart, addToWishList,cartProducts,wishListProducts } = useEcommerceStore((state) => ({
    addToCart: state.addToCart,
    cartProducts: state.cartProducts,
    addToWishList: state.addToWishList,
    cartProducts: state.cartProducts,
    wishListProducts: state.wishListProducts
  }));

  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const fetchDetail = async () => {
    setIsLoading(true);
    const res = await axios.get(`${BaseUrl}/${id}`);
    setDetailProduct(res.data.product);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const handleAdd = () => {
    const isExist = cartProducts.some(product => product.id === detailProduct.id);
    
    const quantity = 1;
    const cost = parseFloat(quantity * detailProduct.price);
    const newProduct = {
      id: detailProduct.id,
      title: detailProduct.title,
      price: detailProduct.price,
      image: detailProduct.image,
      quantity,
      cost,
    };
    
    if(!isExist) {
      addToCart(newProduct);
      toast.success("Your Product is added")
    } else {
      toast.error("Your Product is already existed")
    }
    
  };

  const handleFav = () => {
    const isExist = wishListProducts.some(product => product.id === detailProduct.id);
    if(!isExist) {
      addToWishList(detailProduct);
      toast.success("Wish Product added")
    } else {
      toast.error("Your Product is already existed")
    }
  }

  return (
    <>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <div className="my-[50px] font-primaryFont">
          <div className="container grid grid-cols-1 md:grid-cols-2 items-center md:gap-5">
            <div className="flex items-center justify-center md:items-start md:justify-start">
              <img
                className="w-[300px] md:w-auto"
                src={detailProduct.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl tracking-wide">{detailProduct.title}</p>
              <p className="text-2xl text-blue-500 tracking-wider">
                ${detailProduct.price}
              </p>
              <p className="h-[100px] overflow-y-auto hide-scrollbar">
                {detailProduct.description}
              </p>
              {detailProduct.color && (
                <p className="text-xl">
                  Color : {detailProduct.color.toUpperCase()}
                </p>
              )}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className=" bg-clr-accent text-white px-6 py-2 rounded-md"
                >
                  Add To Cart
                </button>
                <button onClick={handleFav} className="border py-2 px-6 rounded-md border-y-clr-secondary">
                  <span>Add To Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
