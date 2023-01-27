import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSideBar from './components/layout/AdminSideBar';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import ProductReview from './pages/ProductReview';
import UpdateUser from './pages/UpdateUser';
import UpdateProduct from './pages/UpdateProduct';
import UsersList from './pages/UsersList';
import ProcessOrder from './pages/ProcessOrder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminSideBar />}>
            <Route path='' element={<Dashboard/>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product" element={<NewProduct />} />
            <Route path="product/:id" element={<UpdateProduct />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="order/:id" element={<ProcessOrder />} />
            <Route path="users" element={<UsersList />} />
            <Route path="user/:id" element={<UpdateUser />} />
            <Route path="reviews" element={<ProductReview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
