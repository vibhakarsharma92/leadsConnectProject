import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbars from "./Components/navbar";
import ProductList from "./Components/productList";
import Drawer from "./Components/drawer";

function App() {
  const [productData, setproductData] = useState([]);
  const [showDrawers, setshowDrawers] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [clickedQty, setclickedQty] = useState(1);
  const [clickedInputId, setclickedInputId] = useState(null);
  const [quantities, setQuantities] = useState({});
console.log("gggggggggg",quantities)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setproductData(response.data);
    });
  }, []);

  const onClickCartOpen = () => {
    setshowDrawers(true);
  };
  const onclickCartClose = () => {
    setshowDrawers(false);
  };

  const onChangeQty = (event, value) => {
    console.log("vvvvvvvvv", event.target.value, value);
    setclickedQty(event.target.value);
    setclickedInputId(value);
    setQuantities({ ...quantities, [value]: parseInt(event.target.value) });

  };

  const addToCart = (values, quantity) => {
    if (!cartItems?.some((el) => el.id === values.id)) {
      const newVals = { ...values, quantity: quantity };
      setcartItems([...cartItems, newVals]);
    } else {

        const newArray = cartItems.map((item, i) => {
          if (item.id === values.id) {
            return { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) };
          } else {
            return item;
          }
        });

      setcartItems(newArray);
    }

    // setcartItems(newArray);
  };

  const plusItem = (value,id)=>{
    setclickedQty(null)
    const newArray = cartItems.map((item, i) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(item.quantity) + 1 };
      } else {
        return item;
      }
    });
    setcartItems(newArray)
  }

  const minusItem = (value,id)=>{
    if (value >=2) {
      console.log("vvvv",value)
      const newArray = cartItems.map((item, i) => {
        if (item.id === id) {
          return { ...item, quantity: parseInt(item.quantity) - 1 };
        } else {
          return item;
        }
      });
      setcartItems(newArray)
    }
    
  }

  const deleteItem =(id)=>{
    const newArr = cartItems.filter((val)=>{
      return val.id !== id
    })
    setcartItems(newArr)
  }

  console.log("xxxxxxxxxx", cartItems);

  return (
    <>
      <Navbars cartItems={cartItems} onClickCart={onClickCartOpen} />
      <ProductList
        onChangeQty={onChangeQty}
        addToCart={addToCart}
        items={productData}
        quantitiess={quantities}
      />
      <Drawer
        cartItems={cartItems}
        onclickCartClose={onclickCartClose}
        showDrawer={showDrawers}
        plusItem={plusItem}
        minusItem={minusItem}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
