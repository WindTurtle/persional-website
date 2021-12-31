import React from "react";
// import IphoneImage from "../../asset/home/iPhone.png";
// import MacbookImage from "../../asset/home/Mockup.png";
import TEST from "../../asset/home/banner.png";

function index() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-primary-main to-background">
        <div
          style={{ zIndex: 1 }}
          className="absolute top-0 transform overflow-hidden -translate-x-1/3 left-0 border-[80px] border-white rounded-full bg-transparent opacity-10 w-[900px] h-[900px]"
        ></div>
        <div style={{ zIndex: 3 }} className="container mx-auto relative">
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="flex w-5/6 h-screen flex-col justify-center space-y-8">
                <div className="text-5xl text-main font-semibold">
                  FRONT-END DEVELOPER
                </div>
                <p className="text-xl text-main font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex space-x-8">
                  <div className="h-12 w-32 font-semibold text-primary-main transform hover:scale-105 transition-transform cursor-pointer bg-white rounded-[50px] flex justify-center items-center">
                    Hire me
                  </div>
                  <div className="h-12 w-32 font-semibold text-white border border-white transform hover:scale-105 transition-transform cursor-pointer bg-brandb-default rounded-[50px] flex justify-center items-center">
                    Get CV
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ zIndex: 3 }}
              className="image absolute bottom-0 right-0 w-1/2 h-full flex justify-center items-center"
            >
              <img src={TEST} alt="avt" />
            </div>
            <div
              style={{ zIndex: 1 }}
              className="absolute bottom-0 transform translate-x-1/4 -right-10 border-[80px] overflow-hidden border-white rounded-full bg-transparent opacity-5 w-[700px] h-[700px]"
            ></div>
          </div>
        </div>
        <div className="absolute w-full h-[350px] -bottom-10">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-7.05,32.08 C242.37,-50.80 285.83,130.77 513.82,-5.41 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#ffffff" }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default index;
