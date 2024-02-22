import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/font-awesome/css/font-awesome.css";
import "./App.css";
//components
import App from "./App";
import Products from "./routes/Products";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Cart from "./routes/Cart";

//Routing
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
