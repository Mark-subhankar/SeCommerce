import React, { useContext } from "react";
import MyContext from "../context/data/MyContext";
import Layout from "../components/layout/Layout";

function AddProduct() {
  const context = useContext(MyContext);
  const {mode, products, setProducts, addProduct } = context;
  return (
    <Layout>
    <div>
      <div style={{height : "125vh"}} className="flex justify-center items-center h-screen">
        <div style={{border : "2px solid white",backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}  className=" bg-gray-300 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 style={{ color: mode === 'dark' ? 'white' : '' }} 
             className="text-center text-black text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
            style={{border : "2px solid white"}}
              type="text"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              name="title" 
              className=" bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[60em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
            style={{border : "2px solid white"}}
              type="text"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              name="price" 
              className=" bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[60em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
            style={{border : "2px solid white"}}
              type="text"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              name="imageurl" 
              className=" bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[60em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
            style={{border : "2px solid white"}}
              type="text"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              name="category" 
              className=" bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[60em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
            style={{border : "2px solid white"}}
              cols="30"
              rows="10"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              } 
              className=" bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[60em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product desc"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button style={{cursor : "pointer"}}
              onClick={addProduct}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AddProduct;
