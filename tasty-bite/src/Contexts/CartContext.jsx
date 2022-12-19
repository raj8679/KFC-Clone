import React from "react";
import axios from "axios";

export const CartContext = React.createContext();

export default function CartContextProvider({ children }) {
  
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

  

  return (
    <CartContext.Provider value={{ postData}}>{children}</CartContext.Provider>
  );
}
