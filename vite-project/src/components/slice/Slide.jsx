import React, { useContext } from "react";
import "../slice/slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "./Productdata";
import MyContext from "../../context/data/MyContext";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  return (
    <div className="products_section" style={{marginTop : "0px"}}>
      <div  className="products_deal">
        <h3 style={{ color: mode === 'dark' ? 'white' : '' }}> Food Essentials Zone </h3> 
      </div>{" "}
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((e) => {
          return (
            <Link to={"/allproducts"}>
            <div className="products_items">
              <div className="product_img">
                <img src={e.url} alt="product" />
              </div>{" "}
              <p className="products_name" style={{ color: mode === "dark" ? "white" : "black"}}> {e.title.shortTitle} </p>{" "}
              <p className="products_offer" style={{color: mode === "dark" ? "white" : "black" }}>
                {" "}
                {e.discount}{" "}
              </p>{" "}
              <p className="products_explore" style={{color: mode === "dark" ? "white" : "black" }}> {e.tagline} </p>{" "}
            </div>
            </Link>
          );
        })}
      </Carousel>{" "}
    </div>
  );
};

export default Slide;
