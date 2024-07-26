import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-clr-secondary font-primaryFont py-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 items-center border-b pb-11">
          <div className=" col-span-1">
            <h1 className="mb-3 text-lg">Get To Know Us</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <span>About us</span>
              <span>Our Sevices</span>
              <span>Stores</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className=" col-span-1">
            <h1 className="mb-3 text-lg">Customer Services</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <span>My account</span>
              <span>Order Tracking</span>
              <span>Pricing Plans</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div className=" col-span-1">
            <h1 className="mb-3 text-lg">Get To Know Us</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <span>About us</span>
              <span>Our Sevices</span>
              <span>Stores</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className=" col-span-1">
            <h1 className="mb-3 text-lg">Quick Links</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <span>Smartphones</span>
              <span>Headphones</span>
              <span>Laptop & Tablet</span>
              <span>Gadgets</span>
            </div>
          </div>
        </div>
        <div className="py-7 flex md:flex-row flex-col gap-5 md:items-center justify-between">
          <p className="flex items-center gap-3">&copy; Developed by Zin Min Latt</p>
          <div className="flex items-center md:gap-2">
            <img src="/images/footer-bottom-logo-1.png" alt="" />
            <img src="/images/footer-bottom-logo-2.png" alt="" />
            <img src="/images/footer-bottom-logo-3.png" alt="" />
            <img src="/images/footer-bottom-logo-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
