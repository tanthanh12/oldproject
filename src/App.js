import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Address from "./pages/address/Address";
import Payment from "./pages/payment/Payment";
import Sign_in from "./pages/signIn/SignIn";
import ProductDetail from "./pages/productDetail/ProductDetail";
import LogIn from "./pages/logIn/LogIn";
import Success from "./pages/success/Success";
import BlogDetail from "./components/blog/blogDetail/BlogDetail";
import Footer from "./components/footer/Footer";
import HomeBlog from "./pages/blog/homeBlog/HomeBlog";
import SourceProduct from "./pages/source/SourceProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home/" element={<Home />}></Route>
          <Route path="/footer/" element={<Footer />}></Route>
          <Route path="/signin/" element={<Sign_in />}></Route>
          <Route path="/payment/" element={<Payment />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route path="/s-product/" element={<SourceProduct />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/address/" element={<Address />}></Route>
          <Route path="/success/" element={<Success />}></Route>
          <Route path="/home-blog/" element={<HomeBlog />}></Route>
          <Route path="/blog-detail/" element={<BlogDetail />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
