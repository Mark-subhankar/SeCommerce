import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { fireDB } from "../../fireabase/FirebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

function Mystate(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add product ----
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);

      toast.success("Product Added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  //   Get product---
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time") // firebase provide
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        // store data
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Instand see all product
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item);
  };
  // Edit product
  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products); // edit use - setDoc(database, collection , id)
      toast.success("Product Updated successfully");
      getProductData();
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };

  // Delete Product---
  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id)); // detete use - deleteDoc
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };


// ger order details
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
      setLoading(true)
      try {
          const result = await getDocs(collection(fireDB, "order"))
          const ordersArray = [];
          result.forEach((doc) => {
              ordersArray.push(doc.data());
              setLoading(false)
          });
          setOrder(ordersArray);
          console.log(ordersArray)
          setLoading(false);
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }


//get user 
const [user, setUser] = useState([]);

const getUserData = async () => {
  setLoading(true)
  try {
    const result = await getDocs(collection(fireDB, "users"))
    const usersArray = [];
    result.forEach((doc) => {
      usersArray.push(doc.data());
      setLoading(false)
    });
    setUser(usersArray);
    console.log(usersArray)
    setLoading(false);
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

  useEffect(() => {
    getOrderData();
    getUserData();
}, []);

const [searchkey, setSearchkey] = useState('')

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,order,user,
        searchkey,setSearchkey
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default Mystate;
