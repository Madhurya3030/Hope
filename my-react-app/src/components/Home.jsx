import React from "react";
import Header from './Homepageheader.jsx';
import Features from './Features';
import Causes from './Causes';
import Footer from './Footer';
import Carousel from './Carousel';
import Aboutus from "./aboutus.jsx";
import Stories from "./stories.jsx";
import Partner from "./Partner.jsx";

function Home() {
  return (
        <><Header /><Carousel /><Aboutus /><Features /><Stories /><Causes /><Partner /><Footer /></>
  );
}

export default Home;
