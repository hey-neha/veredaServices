import React from "react";
import vereda from "../assets/vereda2.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col px-5 md:px-10 lg:px-16  pt-2  md:flex-row justify-between ">
        {/*     image section */}
        <div>
          <img className=" w-32 md:w-36 mt-1" src={vereda} alt="" />
        </div>

        {/*   content section */}

        <ul className="flex flex-col md:flex-row gap-5 md:gap-7 pt-3 md:pt-4 lg:gap-12 justify-between ">
          <li>About</li>
          <li className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            Services
          </li>
          <li>Porfolio</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
