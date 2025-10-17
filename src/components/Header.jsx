import React, { useState } from "react";
import {
  Navbar,
  Button,
  Input,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { TfiMenu } from "react-icons/tfi";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "../redux/slices/search";

export default function Header({ text, setText, openDrawer }) {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");
  const { CartProducts } = useSelector((state) => state.products);
  const wishlistState = useSelector((state) => state.wishlist) || {
    WishlistProducts: [],
  };
  const { WishlistProducts } = wishlistState;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🌙 Toggle Dark Mode
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Navbar className="bg-green-800 dark:bg-green-800 sticky top-0 z-50 py-3 px-4 lg:px-8 max-w-full shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* === Left Section === */}
        <div className="flex items-center gap-3">
          <button onClick={openDrawer} className="text-white">
            <TfiMenu className="text-xl" />
          </button>
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="logo"
              className="w-7 h-7"
            />
            <h1 className="text-white font-bold text-lg">Market</h1>
          </div>
        </div>

        {/* === Center (Search) === */}
        <div className="hidden lg:flex items-center w-1/3 relative">
          <Input
            type="search"
            placeholder="Search for products..."
            className="!border-white text-white bg-transparent pl-3 w-full placeholder:text-white placeholder:opacity-100 focus:placeholder:opacity-100"
            labelProps={{ className: "before:content-none after:content-none" }}
            onChangeCapture={(e) => setText(e.target.value)}
            onChange={() => dispatch(getSearchProducts(text))}
          />
          <button
            onClick={() => navigate("/search-page")}
            disabled={!text}
            className={`absolute right-1 px-3 py-1 rounded-md font-semibold text-sm transition ${
              text
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-700 text-gray-300 cursor-not-allowed"
            }`}
          >
            Search
          </button>
        </div>

        {/* === Right Section === */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Wishlist */}
          <div className="relative">
            <motion.button
              onClick={() => navigate("/wishlist")}
              className="bg-green-700 hover:bg-green-600 rounded-lg p-2 flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-white text-lg" />
            </motion.button>
            {WishlistProducts?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {WishlistProducts.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <Button
              onClick={() => navigate("/cart")}
              className="bg-black hover:bg-gray-800 rounded-lg p-2"
            >
              <FaCartArrowDown className="text-white text-lg" />
            </Button>
            {CartProducts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {CartProducts.length}
              </span>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white bg-transparent border border-white rounded-full p-2 hover:bg-white/10 transition"
            title="Toggle theme"
          >
            {darkMode ? (
              // 🌙 Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // ☀️ Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* === Mobile Menu Button === */}
        <IconButton
          variant="text"
          className="text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? "✖" : "☰"}
        </IconButton>
      </div>

      {/* === Mobile Menu === */}
      <Collapse open={openNav}>
        <div className="mt-3 flex flex-col items-center gap-3 pb-4">
          <Input
            type="search"
            placeholder="Search for products..."
            className="!border-gray-400 text-black pl-3 w-[90%] placeholder:text-gray-700 placeholder:opacity-100 focus:placeholder:opacity-100"
            labelProps={{ className: "before:content-none after:content-none" }}
            onChangeCapture={(e) => setText(e.target.value)}
            onChange={() => dispatch(getSearchProducts(text))}
          />
          <Button
            onClick={() => navigate("/search-page")}
            disabled={!text}
            className={`w-[90%] ${
              text ? "bg-green-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Search
          </Button>

          <Button
            onClick={() => navigate("/wishlist")}
            className="w-[90%] bg-green-700 text-white flex items-center justify-center gap-2"
          >
            <FaHeart /> Wishlist
          </Button>

          <Button
            onClick={() => navigate("/cart")}
            className="w-[90%] bg-black text-white flex items-center justify-center gap-2"
          >
            <FaCartArrowDown /> Cart
          </Button>

          <Button
            onClick={toggleTheme}
            className="w-[90%] bg-green-700 text-white"
          >
            Toggle Theme
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
