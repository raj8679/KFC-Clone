import React, { useState } from "react";
import axios from "axios";

export const CartContext = React.createContext();

export default function CartContextProvider({ children }) {
  const[data,setData]=useState([]);

// const totalPrice=()=>{
//  data.forEach((el)=>{
// setPrice(price+Number(el.Price))
// })
// }

  const getCart=()=>{
    return axios.get("http://localhost:8080/posts").then((res)=>{
      setData(res.data)     
    })   
  }

  const postData = ( image, Title, Description, Price) => {
    return axios.post("http://localhost:8080/posts", {
        image: image,
        Title: Title,
        Description: Description,
        Price: Price,
      }).then((res)=>{
        console.log(res)
      })
  
  };

  const deleteCartItem = (id) => {
    return axios.delete(`http://localhost:8080/posts/${id}`).then((res)=>{
      getCart()
    })
  };

  

  return (
    <CartContext.Provider value={{ postData,getCart,data,deleteCartItem}}>{children}</CartContext.Provider>
  );
}
