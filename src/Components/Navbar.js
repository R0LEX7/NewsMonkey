import React, { Component } from "react";
import { Link } from "react-router-dom";



export class Navbar extends Component {
  render() {
    

		
    return (

<> 
    <header className=" fixed truncate w-full text-white border-b body-font z-10 bg-[#0F162B]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

    <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl text-white">NewsMonkey</span>
    </Link>
         
      <Link className="mr-5 hover:text-[#38BDF9] text-xl" to="general">Home</Link>
      <Link className="mr-5 hover:text-[#38BDF9] text-xl" to="general">General</Link>
      <Link className="mr-5 hover:text-[#38BDF9]  text-xl"to="sports">Sports</Link>
      <Link className="mr-5 hover:text-[#38BDF9]  text-xl"to="science">Science</Link>
      <Link className="mr-5 hover:text-[#38BDF9]  text-xl"to="entertainment">Entertainment</Link>
      <Link className="mr-5 hover:text-[#38BDF9]  text-xl"to="health">Health</Link>
      <Link className="mr-5 hover:text-[#38BDF9]  text-xl"to="technology">Technology</Link>
      <Link className="hover:text-[#38BDF9] capitalize text-xl" to="business">business</Link>
    </nav>

    


    {/* <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg- border-2 py-1 px-3 focus:outline-none hover:text-[#38BDF9] hover:border-[#38BDF9] rounded text-base mt-4 md:mt-0"> Source code
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div> */}
  </div>
</header>

    </>
    );
  }
}

export default Navbar;
