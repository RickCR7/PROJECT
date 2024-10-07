// import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Items from "../Components/Items";
import Carousel from "../Components/Carousel";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="m-3">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
