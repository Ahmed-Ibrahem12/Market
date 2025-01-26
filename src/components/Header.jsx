import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Input,
  Drawer,
  Collapse,
  ListItem,
  List,
} from "@material-tailwind/react";
import { TfiMenu } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "../redux/slices/search";
import { FaCartArrowDown } from "react-icons/fa";
import "./drawer.css";

export default function Header({ text, setText, openDrawer }) {
  const [openNav, setOpenNav] = React.useState(false);
  const { CartProducts } = useSelector((state) => state.products);
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }

  function onThemeSwitcherItemClick(event) {
    const theme = event.target.dataset.theme;

    if (theme === "system") {
      localStorage.removeItem("theme");
      // setSystemTheme();
    } else if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }

  const themeSwitcherItems = document.querySelectorAll("#theme-switcher");
  themeSwitcherItems.forEach((item) => {
    item.addEventListener("click", onThemeSwitcherItemClick);
  });

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);

  return (
    <Navbar className="mx-auto bg-green-800 max-w-screen-3xl px-4 py-2 lg:px-8 lg:py-4 top-0 sticky z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <button className="text-white me-2 " onClick={openDrawer}>
            <TfiMenu className="font-bold text-[1.1em]" />
          </button>

          <Typography
            className="mr-4 cursor-pointer text-white text-[1.1em] py-1.5 font-bold"
            onClick={() => navigate("/")}
          >
            Market
          </Typography>
        </div>
        <div className="hidden items-center gap-x-3 lg:flex w-1/2 ">
          <div className="w-full relative flex items-center">
            <Input
              type="search"
              placeholder="Search Here"
              className="!border-white relative pl-3 w-full text-white placeholder:text-white "
              onChange={() => dispatch(getSearchProducts(text))}
              onChangeCapture={(e) => setText(e.target.value)}
              containerprops={{
                className: "min-w-[288px]",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            {text == "" ? (
              <button
                disabled
                size="sm"
                className="rounded-lg absolute ms-2 right-1 bg-gray-800 text-white p-1 px-3 font-bold"
              >
                Search
              </button>
            ) : (
              <button
                onClick={() => navigate("/search-page")}
                size="sm"
                // color="green"
                className="rounded-lg absolute ms-2 right-1 bg-black text-white p-1 px-3 font-bold"
              >
                Search
              </button>
            )}
          </div>
          <div className="relative">
            <Button
              className="flex items-center gap-3 rounded-lg"
              onClick={() => navigate("/cart")}
              // size="sm"
            >
              <FaCartArrowDown className="text-white text-[1.3em]" />
            </Button>
            {/* <span className="absolute top-0 right-0 rounded-[50%] w-6 text-white flex items-center justify-center bg-red-600 font-bold">
              {CartProducts.length}
            </span> */}
          </div>
          {/* dark mode */}
          <div>
            {check ? (
              <a
                size="sm"
                id="theme-switcher"
                class="block w-full whitespace-nowrap cursor-pointer bg-transparent px-3 py-2 text-sm font-normal text-gray-700  focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
                className="text-white text-[.8em]"
                data-theme="light"
                onClick={() => setCheck(!check)}
              >
                <div class="pointer-events-none">
                  <div
                    class="inline-block w-[24px] text-center"
                    data-theme-icon="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="inline-block h-6 w-6"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </div>
                  <span data-theme-name="light"></span>
                </div>
              </a>
            ) : (
              <a
                id="theme-switcher"
                class="block w-full whitespace-nowrap bg-transparent cursor-pointer px-3 py-2 text-sm font-normal text-gray-700  focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
                data-theme="dark"
                onClick={() => setCheck(!check)}
                data-twe-dropdown-item-ref
              >
                <div class="pointer-events-none">
                  <div
                    class="inline-block w-[24px] text-center"
                    data-theme-icon="dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="inline-block h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span data-theme-name="dark"></span>
                </div>
              </a>
            )}
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative bg-white rounded-lg text-black w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                onChange={() => dispatch(getSearchProducts(text))}
                onChangeCapture={(e) => setText(e.target.value)}
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]"></div>
            </div>
            {text == "" ? (
              <Button disabled size="md" className="rounded-lg mt-2">
                Search
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/search-page")}
                size="md"
                className="rounded-lg mt-2"
              >
                Search
              </Button>
            )}
            <Button
              className=" gap-3 rounded-lg mt-2 flex items-center justify-center"
              onClick={() => navigate("/cart")}
              size="md"
            >
              {/* <div className=" gap-3 m-auto"> */}
              Cart <FaCartArrowDown className=" text-white text-[1.1em]" />
              {/* </div> */}
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
