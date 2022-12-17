import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import DealsCard from '../Components/DealsCard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import data from "../DealsData.json"

const Deals = () => {
  console.log(data)
  return (
    <>
    
    <Navbar/>
    <Box w="100vw" h="400px">
      <Image w="100%" h="100%" src="https://cdn.zoutons.com/images/originals/stores/KFCOVERVIEW2_1639381625.png"></Image>
    </Box>

    <Box w="100vw" h="160px" bg="rgba(222, 184, 135, 0.113)">
        <Box h="100%" w="400px" ml="10%">
          <Image
            w="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Berchem%2C_Antwerp.svg"
          ></Image>
          <Text fontSize="4xl" as="b">
            NATIONAL OFFERS
          </Text>
        </Box>
      </Box>

    <Box  
    w="80vw"
         
         h="800px"
         margin="auto"
         marginTop="50px"
         display="grid"
         gridTemplateColumns="repeat(3,1fr)"
         justifyContent="space-between"
         gap="20px">
      {data.map((el)=>{
        return <DealsCard img={el.img} title={el.title} details={el.details}></DealsCard>
      })}
    </Box>
    <Footer/>
    </>
  )
}

export default Deals