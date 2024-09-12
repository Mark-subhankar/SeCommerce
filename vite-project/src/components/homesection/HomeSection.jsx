import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../homesection/homecarousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import homebg1 from "../homesection/homebg11.jpg";
import homebg2 from "../homesection/homebg12.jpg";
import homebg3 from "../homesection/homebg13.jpg";
import homebg4 from "../homesection/homebg14.jpg";
import homebg5 from "../homesection/homebg15.jpg";
import homebg6 from "../homesection/homebg16.png";

function HomeSection() {
  return (
    <div >
      <Carousel 
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        transitionTime={500} // Set transition time to 500 milliseconds (0.5 seconds)
        interval={2000} // Set interval time to 5 seconds between slides
      >
        <div style={{maxHeight : "479px"}}>
          <img src={homebg1} alt="" />
        </div>
        <div style={{maxHeight : "479px"}}>
          <img src={homebg2} alt="" />
        </div>
        <div style={{maxHeight : "479px"}}>
          <img src={homebg3} alt="" />
        </div>
        <div style={{maxHeight : "479px"}}>
          <img src={homebg4} alt="" />
        </div>
        <div style={{maxHeight : "479px"}}>
          <img src={homebg5} alt="" />
        </div>
        <div style={{maxHeight : "479px"}}>
          <img src={homebg6} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeSection;
