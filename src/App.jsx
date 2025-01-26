import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Beauty from "./pages/Categories/Beauty";
import Groceries from "./pages/Categories/Groceries";
import Furniture from "./pages/Categories/Furniture";
import Fragrances from "./pages/Categories/Fragrances";
import HomeDecoration from "./pages/Categories/HomeDecoration";
import KitchenAccesories from "./pages/Categories/KitchenAccesories";
import Laptops from "./pages/Categories/Laptops";
import MensShirts from "./pages/Categories/MensShirts";
import MensShoes from "./pages/Categories/MensShoes";
import MensWatches from "./pages/Categories/MensWatches";
import MobileAccessories from "./pages/Categories/MobileAccessories";
import Motorcycle from "./pages/Categories/Motorcycle";
import SkinCare from "./pages/Categories/SkinCare";
import SmartPhones from "./pages/Categories/SmartPhones";
import SportAccessories from "./pages/Categories/SportAccessories";
import SunGlasses from "./pages/Categories/SunGlasses";
import Taplets from "./pages/Categories/Taplets";
import Tops from "./pages/Categories/Tops";
import Vehicle from "./pages/Categories/Vehicle";
import WomensDresses from "./pages/Categories/WomensDresses";
import WomensJewellery from "./pages/Categories/WomensJewellery";
import WomensWatches from "./pages/Categories/WomensWatches";
import WomensBags from "./pages/Categories/WomensBags";
import WomensShoes from "./pages/Categories/WomensShoes";
import SearchPage from "./pages/SearchPage";
import ShowProduct from "./pages/ShowProduct";
import Cart from "./pages/Cart";

const App = () => {
  let [text, setText] = useState("");

  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const navigate = useNavigate();
  return (
    <div>
      <div className={"dark:bg-gray-800 backdrop-blur-sm"}>
        <Header setText={setText} openDrawer={openDrawer} text={text} />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Beauty />} path="/beauty" />
          <Route element={<Groceries />} path="/groceries" />
          <Route element={<Furniture />} path="/furniture" />
          <Route element={<Fragrances />} path="/fragrances" />
          <Route element={<HomeDecoration />} path="/home-decoration" />
          <Route element={<KitchenAccesories />} path="/kitchen-accesories" />
          <Route element={<Laptops />} path="/laptops" />
          <Route element={<MensShirts />} path="/mens-shirts" />
          <Route element={<MensShoes />} path="/mens-shoes" />
          <Route element={<MensWatches />} path="/mens-watches" />
          <Route element={<MobileAccessories />} path="/mobile-accessories" />
          <Route element={<Motorcycle />} path="/motorcycle" />
          <Route element={<SkinCare />} path="/skin-care" />
          <Route element={<SmartPhones />} path="/phones" />
          <Route element={<SportAccessories />} path="/sport-accessories" />
          <Route element={<SunGlasses />} path="/sun-glasses" />
          <Route element={<Taplets />} path="/taplets" />
          <Route element={<Tops />} path="/tops" />
          <Route element={<Vehicle />} path="/vehicles" />
          <Route element={<WomensBags />} path="/womens-bags" />
          <Route element={<WomensShoes />} path="/womens-shoes" />
          <Route element={<WomensDresses />} path="/womens-dresses" />
          <Route element={<WomensJewellery />} path="/womens-jewellery" />
          <Route element={<WomensWatches />} path="/womens-watches" />
          <Route
            element={text == "" ? <Home /> : <SearchPage text={text} />}
            path="/search-page"
          />
          <Route element={<Cart />} path="/cart" />
          <Route element={<ShowProduct />} path="/product/:productId" />
        </Routes>
        <Drawer
          open={open}
          onClose={closeDrawer}
          className={
            open == true
              ? " p-4 dark:bg-gray-800 sticky inset-0 top-0 left-0"
              : " p-4 dark:bg-gray-800 inset-0 top-0 left-0"
          }
        >
          <div className="mb-6 flex items-center justify-between ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-white"
            >
              Categories
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div
            color="gray"
            className="mb-8 pr-4 font-normal h-full overflow-auto "
          >
            <List className="overflow-auto w-full dark:text-white font-bold">
              <ListItem onClick={() => navigate("/beauty")}>Beatuy</ListItem>
              <ListItem onClick={() => navigate("/fragrances")}>
                Fragrances
              </ListItem>
              <ListItem onClick={() => navigate("/furniture")}>
                Furniture
              </ListItem>
              <ListItem onClick={() => navigate("/groceries")}>
                Groceries
              </ListItem>
              <ListItem onClick={() => navigate("/home-decoration")}>
                Home Decoration
              </ListItem>
              <ListItem onClick={() => navigate("/kitchen-accesories")}>
                Kitchen Accesories
              </ListItem>
              <ListItem onClick={() => navigate("/laptops")}>LapTops</ListItem>
              <ListItem onClick={() => navigate("/mens-shirts")}>
                Mens Shirts
              </ListItem>
              <ListItem onClick={() => navigate("/mens-shoes")}>
                Mens Shoes
              </ListItem>
              <ListItem onClick={() => navigate("/mens-watches")}>
                Mens Watches
              </ListItem>
              <ListItem onClick={() => navigate("/skin-care")}>
                Skin Care
              </ListItem>
              <ListItem onClick={() => navigate("/phones")}>
                Smart Phones
              </ListItem>
              <ListItem onClick={() => navigate("/sport-accessories")}>
                Sport Accessories
              </ListItem>
              <ListItem onClick={() => navigate("/sun-glasses")}>
                Sun Glasses
              </ListItem>
              <ListItem onClick={() => navigate("/motorcycle")}>
                Motorcycle
              </ListItem>
              <ListItem onClick={() => navigate("/taplets")}>Taplets</ListItem>
              <ListItem onClick={() => navigate("/tops")}>Tops</ListItem>
              <ListItem onClick={() => navigate("/vehicles")}>Vehicle</ListItem>
              <ListItem onClick={() => navigate("/womens-bags")}>
                Womens Bags
              </ListItem>
              <ListItem onClick={() => navigate("/womens-watches")}>
                Womens Watches
              </ListItem>
              <ListItem onClick={() => navigate("/womens-jewellery")}>
                Womens Jewellery
              </ListItem>
              <ListItem onClick={() => navigate("/womens-shoes")}>
                Womens Shoes
              </ListItem>
              <ListItem
                className="mb-10"
                onClick={() => navigate("/womens-dresses")}
              >
                Womens Dresses
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Footer />
      </div>
    </div>
  );
};

export default App;
