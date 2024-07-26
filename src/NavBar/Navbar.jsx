import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { useEcommerceStore } from "@/store/ecommerceStore";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { toggleMenu, cartProducts, removeFromCart, products, fetchProducts } =
    useEcommerceStore((state) => ({
      isMenuOpen: state.isMenuOpen,
      toggleMenu: state.toggleMenu,
      cartProducts: state.cartProducts,
      removeFromCart: state.removeFromCart,
      products: state.products,
      fetchProducts: state.fetchProducts,
    }));
  const [currency, setCurrency] = useState("USD $");
  const [language, setLanguage] = useState("English");
  const [searchTerms, setSearchTerms] = useState("");

  const filterProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerms.toLowerCase())
  );

  const handleCurrency = () => {
    currency === "USD $" ? setCurrency("KYATS $") : setCurrency("USD $");
  };

  const handleLanguage = () => {
    language === "English" ? setLanguage("Myanmar") : setLanguage("English");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const total = cartProducts.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <>
      <div className=" bg-clr-bg font-primaryFont">
        <div className="">
          <div className="container text-[12px] py-2 flex items-center justify-center md:justify-between text-clr-text">
            <p className="">Free Shipping Over $100 & Free Returns</p>
            <div className="hidden md:flex items-center gap-8">
              <p>Hotline:(+95)09795458965</p>
              <div className="relative group">
                <p className="flex items-center gap-2">
                  <span>{language}</span>
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </p>
                <p
                  onClick={handleLanguage}
                  className=" absolute top-6 right-0 bg-clr-accent p-2 text-clr-bg px-4 group-hover:visible invisible -translate-y-3 group-hover:translate-y-0 duration-200 whitespace-nowrap cursor-pointer"
                >
                  <span>{language === "English" ? "Myanmar" : "English"}</span>
                </p>
              </div>
              <div className="relative group">
                <p className="flex items-center gap-2">
                  <span className="cursor-pointer">{currency}</span>
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </p>
                <p
                  onClick={handleCurrency}
                  className="absolute opacity-0 group-hover:opacity-100 duration-200 top-6 right-0 bg-clr-accent p-2 text-clr-bg px-4 transform -translate-y-3 group-hover:translate-y-0 whitespace-nowrap cursor-pointer"
                >
                  <span>{currency === "USD $" ? "KYATS $" : "USD $"}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-b border-[#e5e5e5]"></div>
          <div className="container flex justify-between md:grid md:grid-cols-3 w-full items-center py-5 text-[#303840] gap-7">
            <NavLink to="/">
              <h1 className="  w-full text-3xl font-bold">StoreHub</h1>
            </NavLink>
            <div className="relative">
              <div className="md:flex items-center w-full h-10 hidden">
                <input
                  value={searchTerms}
                  onChange={(e) => setSearchTerms(e.target.value)}
                  type="text"
                  className="border border-clr-primary focus-visible:outline-none px-2 text-clr-primary h-full rounded-l-md w-full"
                />
                <button className="bg-clr-accent h-full px-3 rounded-r-md text-clr-bg">
                  <IoSearchOutline />
                </button>
              </div>
              {searchTerms.length !== 0 && (
                <div className="absolute bg-white w-full max-h-[300px] shadow-2xl z-30 top-12 overflow-y-auto px-5">
                  {filterProduct.map((product) => (
                    <div
                      key={product.id}
                      className="border-b py-2 "
                      onClick={() => {
                        navigate(`product/${product.id}`);
                        setSearchTerms(""); // Clear search input
                      }}
                    >
                      <div className="grid grid-cols-4">
                        <div className=" col-span-1 cursor-pointer">
                          <img className="h-14" src={product.image} alt="" />
                        </div>
                        <p className="col-span-3 line-clamp-3 cursor-pointer">
                          {product.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center w-full justify-end lg:gap-12 gap-5">
              <div className="md:flex hidden items-center xl:flex-row flex-col gap-0 xl:gap-2">
                <NavLink to="wishlist">
                  <button>
                    <FaRegHeart className=" hover:text-clr-accent text-[20px] xl:text-[25px]" />
                  </button>
                </NavLink>
                <p className="text-[13px]">WishList</p>
              </div>
              <div className="flex items-center xl:flex-row flex-col gap-0 xl:gap-2">
                <NavLink>
                  <button>
                    <FaRegUser className="hover:text-clr-accent text-[20px] xl:text-[25px]" />
                  </button>
                </NavLink>
                <p className="text-[13px]">Log In</p>
              </div>
              <div className="md:flex hidden items-center xl:flex-row flex-col gap-0 relative xl:gap-2 group">
                <NavLink to="viewcart">
                  <button className=" text-clr-accent">
                    <GrCart className=" text-[20px] xl:text-[25px]" />
                  </button>
                </NavLink>
                <p className="flex flex-col items-center text-[12px] gap-1">
                  <span className=" px-3 py-0 flex flex-col items-center justify-center text-[10px] rounded-full bg-clr-accent text-clr-bg absolute -top-2 -right-4 xl:static">
                    {cartProducts.length}
                  </span>
                  <span>${total}</span>
                </p>
                <div className=" absolute top-[58px] right-0 shadow-2xl z-40 bg-white w-[300px] p-5 invisible group-hover:visible transition-all duration-300 translate-y-5 group-hover:translate-y-0">
                  {cartProducts.length === 0 ? (
                    <div className=" font-[300] text-center">
                      No products in the cart
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {cartProducts?.map((product) => (
                        <div
                          key={product.id}
                          className="grid grid-cols-6 gap-3"
                        >
                          <div className=" col-span-2">
                            <img className=" h-14" src={product.image} alt="" />
                          </div>
                          <div className="col-span-3">
                            <p className="text-[12px] line-clamp-3">
                              {product.title}
                            </p>
                            <p className="flex text-[12px] items-center gap-1">
                              <span>{product.quantity}</span>
                              <span>
                                <HiXMark />
                              </span>
                              <span>{product.price}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className=" col-span-1"
                          >
                            <HiXMark />
                          </button>
                        </div>
                      ))}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <p>Total</p>
                          <p>${total}</p>
                        </div>
                        <div className="flex text-sm items-center text-white justify-between">
                          <NavLink to="viewcart">
                            <button className=" bg-clr-accent py-3 px-5">
                              View Cart
                            </button>
                          </NavLink>
                          <button className=" bg-zinc-300 duration-200 hover:bg-clr-accent hover:text-white py-3 px-5 text-black">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex md:hidden">
                <button onClick={toggleMenu}>
                  <TfiMenu className="text-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b md:hidden border-[#e5e5e5]"></div>
        <div className=" bg-clr-accent py-2 hidden md:block ">
          <div className=" container">
            <ul className="flex items-center gap-12">
              <NavLink to="/">
                <li className="nav-item text-clr-bg">Home</li>
              </NavLink>
              <NavLink to="store">
                <li className="nav-item text-clr-bg">Our Store</li>
              </NavLink>
              <NavLink to="blog">
                <li className="nav-item text-clr-bg">Blog</li>
              </NavLink>
              <NavLink>
                <li className="nav-item text-clr-bg">Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
