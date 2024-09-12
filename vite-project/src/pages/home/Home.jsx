import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import HomeSection from '../../components/homesection/HomeSection';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';
import Slide from '../../components/slice/Slide';
import Slide2 from '../../components/slice/Slide2';
import Slide3 from '../../components/slice/Slide3';
import ProductCard2 from '../../components/productCard/ProductCart2';
// import {useDispatch, useSelector} from 'react-redux';
// import { addToCart, deleteFromCart } from '../../redux/CartSlice';

function Home() {
  return (
    <div>
      <Layout>
        <HomeSection/>
        <ProductCard/>
        <Slide/>
        <Slide3/>
        <Slide2/>
        <ProductCard2/>
        <Testimonial/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Home
