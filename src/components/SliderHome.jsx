import React from "react";

import { Carousel } from "@material-tailwind/react";

const SliderHome = () => {
  return (
    <div className="p-3 sm:p-0">
      <Carousel className="rounded-xl z-0 ">
        <div>
          <img
            src="https://market-gray-sigma.vercel.app/assets/slider_img_1-aa711fe6-pqzTE0TF.jpg"
            alt="image 1"
            className="rounded-lg  w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://market-gray-sigma.vercel.app//assets/slider_img_2-ad43ef2a-YRFqMuDP.jpg"
            alt="image 2"
            className="rounded-lg  w-full object-cover"
          />
        </div>

        <div>
          <img
            src="https://market-gray-sigma.vercel.app//assets/slider_img_1-aa711fe6-pqzTE0TF.jpg"
            alt="image 3"
            className="rounded-lg  w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderHome;
