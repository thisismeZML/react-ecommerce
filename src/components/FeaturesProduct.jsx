import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import { usefetchProduct } from "@/customHooks/useProduct";
import PaginationFeat from "./PaginationFeat";
import SkeletonLoader from "@/Loader/SkeletonLoader";
import Aos from "aos";

const FeaturesProduct = () => {
  const { data, isLoading } = usefetchProduct();
  const [FilterFeature, setFilterFeature] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");

  useEffect(() => {
    Aos.init({
      duration : 1500
    })
  },[])

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const skeletons = Array.from({length : 5} , (_,el) => el)

  if (isLoading) {
    return (
      <div className="mb-[50px] font-primaryFont">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 mt-5 gap-3">
            {
              skeletons.map((_,index) => <SkeletonLoader key={index}/>)
            }
          </div>
        </div>
      </div>
    );
  }

  const handlefilterFeature = (category) => {
    if (category === "all") {
      setFilterFeature(data.products);
      setSelectedCat("all");
    } else {
      setFilterFeature(
        data.products.filter((product) => product.category === category)
      );
      setSelectedCat(category);
    }
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProduct = (
    FilterFeature.length !== 0 ? FilterFeature : data.products
  ).slice(indexOfFirstItem, indexOfLastItem);

  const totalItem =
    FilterFeature.length !== 0 ? FilterFeature.length : data.products.length;

  const paginate = (number) => {
    setCurrentPage(number);
  };



  return (
    <div className="mb-[50px] font-primaryFont">
      <div className="container">
        <div className="flex items-center gap-12 border-b py-2 duration-300">
          <button
            onClick={() => handlefilterFeature("all")}
            className={`${
              selectedCat === "all" && "bg-clr-accent p-2 text-clr-bg"
            }`}
          >
            All Features
          </button>
          <button
            onClick={() => handlefilterFeature("audio")}
            className={`p-2 ${
              selectedCat === "audio" && "bg-clr-accent p-2 text-clr-bg"
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => handlefilterFeature("gaming")}
            className={`p-2 ${
              selectedCat === "gaming" && "bg-clr-accent p-2 text-clr-bg"
            }`}
          >
            Popular
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 mt-5 gap-3" data-aos="fade-up">
          {currentProduct?.map((product) => (
            <Feature key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mt-5">
        <div className="flex items-center">
          <PaginationFeat
            currentPage={currentPage}
            itemPerPage={itemPerPage}
            totalItem={totalItem}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesProduct;
