import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/MyContext';

function Aboutus() {
    const context = useContext(MyContext);
    const { mode} = context;
  return (
    <>
    <Layout>
           <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
            
                <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className="xl:w-8/12 lg:w-10/12 w-full font-bold  lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
"Bringing Freshness to Your Fingertips: Making Quality Groceries Accessible and Delightful for Everyone"</h2>
                <p style={{ color: mode === 'dark' ? 'white' : '' }}
                 className="font-normal text-base leading-6 mt-6">In the vibrant aisles of our grocery ecommerce store, we firmly establish that a shopper's focus should be on the delectable array of products, not on a cluttered layout. Our commitment echoes through a charter, dedicating this space to you. Just as the English Church enjoys freedom and rights, we pledge a haven where your grocery experience is undistracted, seamless, and perpetually delightful. Join us as we confirm a lasting promise: an online marketplace where your shopping journey is as enriching as the quality products we offer, forever</p>
            </div>
    
            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src="https://www.spiderindia.com/spiderblog/wp-content/uploads/2021/02/banneronline-1536x521.jpg" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
            </div>
    
            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 style={{ color: mode === 'dark' ? 'white' : '' }} className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 ">Our Story</h2>
                    <p style={{ color: mode === 'dark' ? 'white' : '' }}className="font-normal text-base leading-6  mt-4">Welcome to our My E-Commerce, where every click leads you to a fresher, more convenient shopping experience. Our story began with a simple belief: that shopping for quality groceries should be as enjoyable as savoring them. Navigating through aisles of the finest products, we meticulously curate a selection that speaks to your taste and values.
Founded on the idea that busy lives deserve easy access to wholesome essentials, our online marketplace brings the neighborhood grocery store to your fingertips. From farm-fresh produce to pantry staples, each item is handpicked to meet our high standards of quality and sustainability.

</p>
                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="font-normal text-base leading-6 mt-6">Join us on this journey of flavor and freshness, where every ingredient tells a story. Embrace the simplicity of ordering from home while enjoying the richness of locally sourced goods. At our My E-Commerce, we're not just delivering groceries; we're delivering a promise of simplicity, quality, and a connection to the heart of your kitchen. Elevate your shopping experience with us, where every click brings you closer to the joy of cooking and the pleasure of savoring life's delicious moments.</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2">
                    <img className="lg:block hidden w-full" src="https://www.fatbit.com/fab/wp-content/uploads/2015/04/Online-Grocery-Store-Business.jpg" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div>
            </div>
        </div>
        </Layout>
 
    
    </>
  )
}

export default Aboutus
