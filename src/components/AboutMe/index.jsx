import React from "react";
import AboutMeImg from "../../asset/home/about-me.png";
import ReactIcon from "../../asset/icons/react-js.png";
import HTMLIcon from "../../asset/icons/html-5.png";
import CSSICon from "../../asset/icons/css.png";
import GraphQLIcon from "../../asset/icons/graphql.png";
import { ReactComponent as Movie } from "../../asset/icons/clapper-board.svg";
import { ReactComponent as Transport } from "../../asset/icons/metro.svg";

function index() {
  return (
    <section>
      <div className="grid grid-cols-3 bg-white items-center">
        <div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="relative w-[250px] h-[250px] rounded-full border-[32px] border-primary-light">
              <div className="w-[140px] h-[140px] absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 bg-whiteLight rounded-lg flex flex-col justify-center items-center">
                <div className="w-[45px] h-[45px]">
                  <img className="w-full" src={HTMLIcon} alt="html" />
                </div>
                <div className="text-sm text-secondary font-medium mt-2">
                  HTML
                </div>
              </div>
              <div className="w-[160px] h-[160px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-0 bg-whiteLight rounded-lg flex flex-col justify-center items-center">
                <div className="w-[45px] h-[45px]">
                  <img className="w-full" src={CSSICon} alt="css" />
                </div>
                <div className="text-sm text-secondary font-medium mt-2">
                  CSS
                </div>
              </div>
              <div className="w-[160px] h-[160px] absolute transform translate-x-1/2 -translate-y-1/2 top-0 right-0 bg-whiteLight rounded-lg flex flex-col justify-center items-center">
                <div className="w-[45px] h-[45px]">
                  <img className="w-full" src={ReactIcon} alt="react" />
                </div>
                <div className="text-sm text-secondary font-medium mt-2">
                  ReactJS
                </div>
              </div>
              <div className="w-[140px] h-[140px] absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 bg-whiteLight rounded-lg flex flex-col justify-center items-center">
                <div className="w-[45px] h-[45px]">
                  <img className="w-full" src={GraphQLIcon} alt="graphql" />
                </div>
                <div className="text-sm text-secondary font-medium mt-2">
                  GraphQL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full mx-auto">
          <div className="absolute w-full bottom-10">
            <img src={AboutMeImg} alt="my" />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-2xl text-primary-main uppercase mb-2">
            about me
          </h3>
          <h5 className="font-semibold text-3xl text-secondary mb-6">
            Front-end Developer
          </h5>
          <p className="text-sub mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            magnam iure. Fuga et vel iure, veritatis quaerat eveniet voluptates
            sapiente! Sequi fugiat ad labore natus quam nihil vero nemo
            pariatur.
          </p>
          <p className="text-sub mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            magnam iure. Fuga et vel iure, veritatis quaerat eveniet voluptates
            sapiente! Sequi fugiat ad labore natus quam nihil vero nemo
            pariatur.
          </p>
          <div>
            <h3 className="font-semibold text-2xl text-secondary">My hobby</h3>
            <div className="grid grid-cols-3">
              <div className="my-6 flex items-center space-x-4">
                <Movie />
                <span className="text-base font-semibold text-sub">Movie</span>
              </div>
              <div className="my-6 flex items-center space-x-4">
                <Transport />
                <span className="text-base font-semibold text-sub">Travel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
