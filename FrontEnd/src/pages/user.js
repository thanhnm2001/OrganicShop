import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "./cart";
import { CheckOut } from "./checkout";
import Contact from "./contact";
import Home from "./home";
import Login from "./login";
import News from "./news";
import Product from "./product";
export default function User() {
    return (

        <div>


            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/news' element={News} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Home />} />
            </Routes>




        </div>

    )
}