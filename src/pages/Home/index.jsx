import React from "react";
import HeroBanner from "../../components/HeroBanner";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <div className="container mx-auto">
        <div className="my-12">
          <AboutMe />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default HomePage;
