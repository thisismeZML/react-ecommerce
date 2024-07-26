import { useEcommerceStore } from "@/store/ecommerceStore";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Categories from "./Categories";
import Storeitem from "./Storeitem";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import PaginationProduct from "./PaginationProduct";
import SkeletonLoader from "@/Loader/SkeletonLoader";
import StoreSkeleton from "@/Loader/StoreSkeleton";

const StoreGroup = () => {
  const { categories, fetchCategories, products, fetchProducts, isLoading } =
    useEcommerceStore((state) => ({
      categories: state.categories,
      fetchCategories: state.fetchCategories,
      products: state.products,
      fetchProducts: state.fetchProducts,
      isLoading: state.isLoading,
    }));

  const [isOpen, setIsOpen] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryFilter === "all" || !categoryFilter) {
      setFilterProduct(products);
    } else {
      setFilterProduct(products.filter((product) => product.category === categoryFilter));
    }
  }, [categoryFilter, products]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProducts = filterProduct.slice(indexOfFirstItem, indexOfLastItem);

  const totalItem = filterProduct.length;

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const skeletons = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="mb-[50px] font-primaryFont">
      <div className="flex flex-col items-center justify-center border-b py-12">
        <p className="text-3xl tracking-wider font-sans">Shop</p>
      </div>
      <div className="container mt-[50px]">
        <div className="grid grid-cols-7 gap-5">
          <div className="md:flex hidden flex-col gap-5 md:col-span-2 border h-screen p-6">
            {isLoading ? (
              <StoreSkeleton />
            ) : (
              <div className="border-l border-r flex flex-col gap-4 p-5">
                <h1 className="font-[500]">Category</h1>
                <ul className="flex flex-col gap-5">
                  <button
                    onClick={() => setSearchParams({ category: "all" })}
                    className="category-item text-sm cursor-pointer flex w-full"
                  >
                    All
                  </button>
                  {categories.map((category, index) => (
                    <Categories
                      key={index}
                      category={category}
                      setSearchParams={setSearchParams}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="col-span-7 md:col-span-5 flex flex-col gap-7">
            <div className="mb-5 flex items-center justify-end md:hidden">
              <div className="flex justify-between flex-col relative">
                <button
                  onClick={toggleDropdown}
                  className="border flex text-sm items-center justify-between gap-7 px-8 py-2"
                >
                  <span>Category</span>
                  <span>
                    {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </span>
                </button>
                <ul
                  className={`border px-8 py-3 absolute top-12 z-10 right-0 left-0 bg-white flex flex-col gap-4 ${
                    isOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-4"
                  } duration-300`}
                >
                  <button
                    onClick={() => setSearchParams({ category: "all" })}
                    className="category-item text-sm cursor-pointer"
                  >
                    All
                  </button>
                  {categories.map((category, index) => (
                    <button
                      onClick={() => setSearchParams({ category })}
                      className="category-item text-sm cursor-pointer"
                      key={index}
                    >
                      {category}
                    </button>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading
                ? skeletons.map((index) => <SkeletonLoader key={index} />)
                : currentProducts.map((product) => (
                    <Storeitem key={product.id} product={product} />
                  ))}
            </div>
            <div className="flex items-center justify-center mt-5">
              <PaginationProduct
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                totalItem={totalItem}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreGroup;
