import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  // let links = [
  //   { name: "Home", link: "/" },
  //   { name: "Business", link: "/" },
  //   { name: "Entertainment", link: "/" },
  //   { name: "Health", link: "/" },
  //   { name: "Science", link: "/" },
  //   { name: "Sports", link: "/" },
  //   { name: "Technology", link: "/" },
  // ];
  let [open, setOpen ] = useState(false);
  return (
    <div className="border-b w-full bg-[#0f162b] fixed top-0 left-0 z-10">
      <div className="md:flex justify-between bg- text-white py-4 md:px-10 px-7">
        <div className=" text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-4xl text-white mr-1  text-white-800 pt-2">
            <ion-icon name="newspaper"></ion-icon> <span className="font-[Comicsans] text-[#38BDF9]">NewsMonkey</span>
          </span>
        </div>
        <div onClick={() => setOpen(!open)} className="text-5xl absolute right-8 top-6 cursor-pointer xl:hidden">
        <ion-icon name= {open ? "close-outline" : "menu"}></ion-icon>
        </div>
        <ul onClick={() => setOpen(!open)} className={`md:flex md:flex-col bg-[#0f162b] md:z-auto z-[-1] lg:opacity-0 xl:opacity-100 md-opacity-0 left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in uppercase  pl-14 md:pb-0 pb-12 absolute md:static md:ml-8  my-2 lg:flex lg:flex-row  md:items-center pr-5 flex  flex-col ${open? `top-20 opacity-100`: `top-[-600px]`} }`}>
          <Link className="mr-5 md:my-0 my-7 hover:text-[#38BDF9] text-xl duration-300" to="general">
            Home
         </Link>
          {/* <Link className="mr-5 md:my-0 my-7  hover:text-[#38BDF9] text-xl duration-300" to="general">
            general
         </Link> */}

          <Link  className="mr-5 md:my-0 my-7  hover:text-[#38BDF9] my- text-xl duration-300" to="sports">
            Sports
          </Link>
          <Link className="mr-5 md:my-0 my-7  hover:text-[#38BDF9]  text-xl duration-300" to="science">
            Science
          </Link>
          <Link
            className="mr-5 md:my-0 my-7  hover:text-[#38BDF9]  text-xl duration-300"
            to="entertainment"
          >
            Entertainment
          </Link>
          <Link className="mr-5 md:my-0 my-7  hover:text-[#38BDF9]  text-xl duration-300" to="health">
            Health
          </Link>
          <Link className="mr-5 md:my-0 my-7  hover:text-[#38BDF9]  text-xl duration-300" to="technology">
            Technology
          </Link>
          <Link
            className="hover:text-[#38BDF9]   mr-5 md:my-0 my-7  text-xl duration-300"
            to="business"
          >
            Business
          </Link>
        </ul>
        <img src="./" alt=""></img>
      </div>
    </div>
  );
}


