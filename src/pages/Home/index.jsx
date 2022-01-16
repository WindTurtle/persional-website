import React from "react";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Porfolio from "../../components/Porfolio";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <div className="container mx-auto">
        <div className="my-12">
          <AboutMe />
        </div>
        <Services />
        <Porfolio />
      </div>
    </div>
  );
}

export default HomePage;
