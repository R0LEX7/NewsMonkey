import React, { } from "react";

const NewsItem = (props) =>  {
  
    let { title, description , imageUrl, source , newsUrl , author, date} = props;
    return (
      <div>
        
          <div className="container flex flex-nowrap px-6 pt-4 lg:pt-0 mx-auto">
    <div className="">
      <div className="p-0">
        <div className="h-full border-2 border-[#38BDF9] border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-48 w-full object-cover object-center" src= {imageUrl}  href="/" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Source: {source} | Author: {author?author:"Unknown"}</h2>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Publised at {new Date(date).toGMTString()}</h2>
          
            <h1 className="title-font text-lg font-medium mb-3 text-[#38BDF9]">{title}...</h1>
            <p className="leading-relaxed mb-3">{description}...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-[#38BDF9] inline-flex items-center animate-pulse md:mb-2 lg:mb-0" href=  {newsUrl}>Read More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>


    );
  }
 export default NewsItem;
