import React from "react";
import MainCarousel from "./MainCarousel";
import ItemsList from "./ItemsList";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ItemsList />
      <Subscribe />
    </div>
  );
};

export default Home;
