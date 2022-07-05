import { Button } from "bootstrap";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AdminPage from "./adminpage";
import "../App.css";
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import HomeAdmin from "../pages/home/HomeAdmin";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import OrderList from "../pages/orderList/OrderList";
import OrderDetailList from "../pages/orderDetailList/OrderDetailList"
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";
import DataTable from "./category";
import Category from "./editCategory/Category";
import NewCategory from "./newCategory/NewCategory";
import EditOrder from "../pages/editOrder/EditOrder";

export default function Admin() {
    return (
        <div>



            <Topbar />
            <div className="container">
                <Sidebar />

                <Routes>
                    <Route path='/' element={<HomeAdmin />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/user/:userId' element={<User />} />
                    <Route path='/newUser' element={<NewUser />} />
                    <Route path='/products' element={<ProductList />} />
                    <Route path='/orders' element={<OrderList />} />
                    <Route path='/order/:orderId' element={<EditOrder />} />
                    <Route path='/orderdetail/:orderDetailId' element={<OrderDetailList />} />

                    <Route path='/product/:productId' element={<Product />} />

                    <Route path='/newproduct' element={<NewProduct />} />
                    <Route path='/category' element={<DataTable />} />
                    <Route path='/category/:categoryId' element={<Category />} />
                    <Route path='/newcategory' element={<NewCategory />} />
                </Routes>

            </div>


        </div>
    )
}
function Admin1() {
    return (
        <div>
            <h1>AnhyeuEM</h1>
        </div>
    )
}
function Admin2() {
    return (
        <div>
            <h1>ThanhTopflc</h1>
        </div>
    )
}