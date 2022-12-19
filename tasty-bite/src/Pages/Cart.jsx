import React from 'react'
import CartCard from '../Components/CartCard'
import Navbar from '../Components/Navbar'
import { Box, Text } from '@chakra-ui/react'
import { CartContext } from '../Contexts/CartContext'



const Cart = () => {
  const{data,getCart}=React.useContext(CartContext);
  // const[price,setPrice]=React.useState(0)
  // const[itemCount,setItemCount]=React.useState(0)

  React.useEffect(()=>{
getCart()
// totalPrice()
  },[]);

// const totalPrice=()=>{
//  data.forEach((el)=>{
// setPrice(prev=>Math.round(prev+Number(el.Price)))
// })
// }

  return(
    <>
    <Navbar/>
    <Text fontSize="4xl" as="b" ml="48vw">CART</Text>
    <Box w="100vw" display="flex" gap="15px">
    <Box border="2px solid red" w="70%" display="grid" gridTemplateColumns="repeat(4,1fr)">
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
  Total Price:{price}
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
