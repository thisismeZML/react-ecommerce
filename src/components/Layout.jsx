import Footer from "@/Footer/Footer";
import Navbar from "@/NavBar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
      />
    </>
  );
};

export default Layout;
