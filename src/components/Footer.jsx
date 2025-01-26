import React from "react";

const Footer = () => {
  return (
    <div className="sm:h-20 bg-green-800 text-white flex justify-between items-center ">
      <div className="container flex items-center justify-between m-auto flex-col sm:flex-row">
        <h1 className="text-[1.2em] font-bold mt-5 sm:m-0">
          © 2023 Material Tailwind
        </h1>
        <ul className="flex gap-3 text-[1em] font-bold mb-5 mt-5 sm:m-0">
          <li className="cursor-pointer hover:text-green-500">About Us</li>
          <li className="cursor-pointer hover:text-green-500">License</li>
          <li className="cursor-pointer hover:text-green-500">Contribute</li>
          <li className="cursor-pointer hover:text-green-500">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
