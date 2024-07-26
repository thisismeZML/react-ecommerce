import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isBackToTop, setIsBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollUp}
      className={`fixed bottom-10 right-10 ${
        isBackToTop ? "translate-x-0" : "translate-x-full"
      } duration-500`}
    >
      {isBackToTop && (
        <button className="bg-clr-accent text-white p-2.5 rounded-full">
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
