import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Mystate from "./context/data/Mystate";
import Login from "./pages/register/Login";
import SignUp from "./pages/register/SignUp";
import ProductInfo from "./pages/productinfo/ProductInfo";
import AddProductItem from "./pages/AddProductItem";
import UpdateProductItem from "./pages/UpdateProductItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aboutus from "./pages/aboutus/Aboutus";
import AllProducts from "./pages/allproducts/AllProducts";

function App() {
  return (
    <>
      <Mystate>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/allproducts" element={<AllProducts/>} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  {" "}
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  {" "}
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route
              path="/addproductitem"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductItem />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproductitem"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductItem />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </Mystate>
    </>
  );
}

export default App;

// user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "subhankardas7044444@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
