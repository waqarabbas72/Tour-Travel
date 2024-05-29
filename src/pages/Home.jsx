import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Slider />
      <Cards />
    </>
  );
};

export default Home;
