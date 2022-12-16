import React from 'react'
import CarouselComponent from '../Components/Crousel';
import Navbar from '../Components/Navbar';
import { Box,Image,Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
   <Navbar/>
  <CarouselComponent/>
  <Box w="100vw" h="160px" bg="rgba(222, 184, 135, 0.113)">
<Box h="100%" w="400px" ml="10%">
  <Image w="50px" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Berchem%2C_Antwerp.svg"></Image>
  <Text fontSize='4xl' as="b">WELCOME TO KFC!</Text>

</Box>
  </Box>
  
  </>
  )
}

export default Home;