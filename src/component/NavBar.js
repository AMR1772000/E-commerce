import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap py-4 sticky justify-between items-center  text-black">
        <div className="flex ml-10">
          <h1 className="text-[26px] leading-5 font-bold">React E-commerce</h1>
        </div>
        <div >
          <ul className="flex flex-row gap-5 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 mr-10 font-medium">
          <button className="border-2 border-solid border-black  rounded-md p-2">
            <Link to="/login">
              <i className="fa fa-sign-in mr-2" aria-hidden="true"></i>
              Login
            </Link>
          </button>
          <button className="border-2 border-solid border-black rounded-md p-2">
            <Link to="/register">
              <i className="fa fa-user-plus mr-2" aria-hidden="true"></i>
              Register
            </Link>
          </button>
          <button className="border-2 border-solid border-black rounded-md p-2">
            <Link to="/cart">
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
              Cart
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
