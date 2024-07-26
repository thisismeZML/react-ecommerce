import React from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home";
import MenuDrawer from "./components/MenuDrawer";
import WishList from "./components/WishList";
import ProductDetail from "./components/ProductDetail";
import ViewCart from "./components/ViewCart";
import StoreGroup from "./components/StoreGroup";
import Layout from "./components/Layout";
import BlogContext from "./components/BlogContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="viewcart" element={<ViewCart />} />
        <Route path="store" element={<StoreGroup />} />
        <Route path="store/product/:id" element={<ProductDetail />} />
        <Route path="blog" element={<BlogContext />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
