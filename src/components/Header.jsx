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
    <Navbar className="bg-green-800 lg:px-8 lg:py-4 max-w-screen-3xl mx-auto px-4 py-2 sticky top-0 z-20">
      <div className="container flex flex-wrap justify-between text-blue-gray-900 items-center mx-auto">
        <div className="flex items-center">
          <button className="text-white me-2" onClick={openDrawer}>
            <TfiMenu className="text-[1.1em] font-bold" />
          </button>

          <Typography
            className="text-[1.1em] text-white cursor-pointer font-bold mr-4 py-1.5"
            onClick={() => navigate("/")}
          >
            Market
          </Typography>
        </div>
        <div className="w-1/2 gap-x-3 hidden items-center lg:flex">
          <div className="flex w-full items-center relative">
            <Input
              type="search"
              placeholder="Search Here"
              className="text-white w-full !border-white pl-3 placeholder:text-white relative"
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
                className="bg-gray-800 p-1 rounded-lg text-white absolute font-bold ms-2 px-3 right-1"
              >
                Search
              </button>
            ) : (
              <button
                onClick={() => navigate("/search-page")}
                size="sm"
                // color="green"
                className="bg-black p-1 rounded-lg text-white absolute font-bold ms-2 px-3 right-1"
              >
                Search
              </button>
            )}
          </div>
          <div className="relative">
            <Button
              className="flex rounded-lg gap-3 items-center"
              onClick={() => navigate("/cart")}
              // size="sm"
            >
              <FaCartArrowDown className="text-[1.3em] text-white" />
            </Button>
            {/* <span className="flex bg-red-600 justify-center rounded-[50%] text-white w-6 absolute font-bold items-center right-0 top-0">
              {CartProducts.length}
            </span> */}
          </div>
          {/* dark mode */}
          <div>
            {check ? (
              <a
                size="sm"
                id="theme-switcher"
                className="bg-transparent text-gray-700 text-sm w-full active:no-underline active:text-zinc-800 block cursor-pointer dark:hover:bg-gray-600 dark:text-gray-100 disabled:bg-transparent disabled:pointer-events-none disabled:text-gray-400 focus:bg-gray-200 focus:dark:bg-gray-600 focus:outline-none font-normal px-3 py-2 whitespace-nowrap"
                className="text-[.8em] text-white"
                data-theme="light"
                onClick={() => setCheck(!check)}
              >
                <div className="pointer-events-none">
                  <div
                    className="text-center w-[24px] inline-block"
                    data-theme-icon="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block"
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
                className="bg-transparent text-gray-700 text-sm w-full active:no-underline active:text-zinc-800 block cursor-pointer dark:hover:bg-gray-600 dark:text-gray-100 disabled:bg-transparent disabled:pointer-events-none disabled:text-gray-400 focus:bg-gray-200 focus:dark:bg-gray-600 focus:outline-none font-normal px-3 py-2 whitespace-nowrap"
                data-theme="dark"
                onClick={() => setCheck(!check)}
                data-twe-dropdown-item-ref
              >
                <div className="pointer-events-none">
                  <div
                    className="text-center w-[24px] inline-block"
                    data-theme-icon="dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 inline-block"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clipRule="evenodd"
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
          className="h-6 text-inherit text-white w-6 active:bg-transparent focus:bg-transparent hover:bg-transparent lg:hidden ml-auto"
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
            <div className="bg-white rounded-lg text-black w-full gap-2 md:w-max relative">
              <Input
                type="search"
                placeholder="Search"
                onChange={() => dispatch(getSearchProducts(text))}
                onChangeCapture={(e) => setText(e.target.value)}
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className="!border-t-blue-gray-300 focus:!border-blue-gray-300 pl-9 placeholder:text-blue-gray-300"
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
                onClickCapture={() => setOpenNav(!openNav)}
                size="md"
                className="rounded-lg mt-2"
              >
                Search
              </Button>
            )}
            <Button
              className="flex justify-center rounded-lg gap-3 items-center mt-2"
              onClick={() => navigate("/cart")}
              onClickCapture={() => setOpenNav(!openNav)}
              size="md"
            >
              Cart <FaCartArrowDown className="text-[1.1em] text-white" />
            </Button>
            <Button
              className="flex justify-center rounded-lg gap-3 items-center mt-2"
              size="sm"
              onClick={() => setCheck(!check)}
              onClickCapture={() => setOpenNav(!openNav)}
            >
              <div>
                {check ? (
                  <a
                    size="sm"
                    id="theme-switcher"
                    className="bg-transparent text-gray-700 text-sm text-white w-full active:no-underline active:text-zinc-800 block cursor-pointer dark:hover:bg-gray-600 dark:text-gray-100 disabled:bg-transparent disabled:pointer-events-none disabled:text-gray-400 focus:bg-gray-200 focus:dark:bg-gray-600 focus:outline-none font-normal px-3 py-2 whitespace-nowrap"
                    data-theme="light"
                    onClick={() => setCheck(!check)}
                  >
                    <div className="pointer-events-none">
                      <div
                        className="text-center w-[24px] inline-block"
                        data-theme-icon="light"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6 inline-block"
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
                    className="bg-transparent text-gray-700 text-sm w-full active:no-underline active:text-zinc-800 block cursor-pointer dark:hover:bg-gray-600 dark:text-gray-100 disabled:bg-transparent disabled:pointer-events-none disabled:text-gray-400 focus:bg-gray-200 focus:dark:bg-gray-600 focus:outline-none font-normal px-3 py-2 whitespace-nowrap"
                    data-theme="dark"
                    onClick={() => setCheck(!check)}
                    data-twe-dropdown-item-ref
                  >
                    <div className="pointer-events-none">
                      <div
                        className="text-center w-[24px] inline-block"
                        data-theme-icon="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6 inline-block"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span data-theme-name="dark"></span>
                    </div>
                  </a>
                )}
              </div>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
