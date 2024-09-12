import React, { useContext, useEffect } from 'react';
import MyContext from '../../context/data/MyContext';
import { Provider,useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../redux/CartSlice';
import { Link } from 'react-router-dom';

function ProductCard() {
    const context = useContext(MyContext);
    const { mode, product ,searchkey,setSearchkey} = context;

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    // add to cart
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart');
    }

    useEffect(() => {  // does not remove cart number like 1, 2, 3
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto" style={{paddingTop : "0px"}}>
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey)).slice(0,4).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item; // Destructure the item object here
                        return (
                            <div key={index} onClick={()=> window.location.href = `/productinfo/${id}`} className="p-4 md:w-1/4 drop-shadow-lg">
                                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                    <div className="flex justify-center cursor-pointer">
                                        <img style={{height : "14rem"}} className="rounded-2xl w-full h-80 p-6 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="product" />
                                    </div>
                                    <div className="p-2 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{title}</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{description}</h1> */}
                                        <p className="leading-relaxed mb-3">₹ {price}</p>
                                        <div className="flex justify-center">
                                            <button type="button" onClick={()=>addCart(item)} className="focus:outline-none text-white bg-blue-600 hover:bg-yellow-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link to={"/allproducts"}>
            <button style={{cursor : "pointer",display: "block",margin: "auto",borderRadius : "15px"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Read more
</button>
</Link>
        </section>
    );
}

export default ProductCard;
