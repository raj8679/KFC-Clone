import React from 'react'
import axios from 'axios'
import CartCard from '../Components/CartCard'
import Navbar from '../Components/Navbar'
import { Box, Text } from '@chakra-ui/react'

const getCart=()=>{
  return axios.get("http://localhost:8080/posts")

  
}

const Cart = () => {
  const[data,setData]=React.useState([]);
  const[item,setItem]=React.useState(0)
  const[count,setCount]=React.useState(0)
  React.useEffect(()=>{
getCart().then((res)=>{
  setData(res.data)
  // details()
})
  },[]);

  // const details=()=>{
  //   data.forEach((el)=>{
  // setCount(count)
  // setItem(count)
  //   })
  // }
  return(
    <>
    <Navbar/>
    <Text fontSize="4xl" as="b" ml="48vw">CART</Text>
    <Box w="100vw" display="flex" gap="15px">
    <Box border="2px solid red" w="70%" display="flex" gap="20px">
    {data.map((el)=>{
  return <CartCard image={el.image} Title={el.Title} Description={el.Description} Price={el.Price} id={el.id} />
})}
    </Box>
    {/* <Box border="2px solid teal" w="25%" h="400px">
<Text fontSize="3xl" as="b">
  Total Item:{}
</Text>
<br />
<br />
<Text fontSize="3xl" as="b">
  Total Price:{}
</Text>
    </Box> */}
    </Box>
    </>
  )

}

export default Cart


// const deleteCartItem = (id) => {
//   return axios.delete(`http://localhost:5000/cart/${id}`);
// };
