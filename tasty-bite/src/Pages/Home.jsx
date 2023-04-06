import React from "react";
import CarouselComponent from "../Components/Crousel";
import Navbar from "../Components/Navbar";
import { Box, Card, Image, Text, Button } from "@chakra-ui/react";
import FoodCard from "../Components/FoodCard";
import DealsCard from "../Components/DealsCard";
import Footer from "../Components/Footer";
import dealsData from "../DealsData.json"
import categoryData from "../CategoryData.json"
import Animation from "../Components/Animation"

const Home = () => {
  const[animationRender,setAnimationRender]=React.useState(true)

//   React.useEffect(()=>{
// setTimeout(()=>{
// setAnimationRender(false)
// },2000)
//   },[])

// if(animationRender){
//   return <Animation/>
// }

  return (
    <>
      <Navbar />

      <CarouselComponent />

      <Box w="100vw" h="160px" bg="rgba(222, 184, 135, 0.113)">
        <Box h="100%" w="400px" ml="10%">
          <Image
            w="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Berchem%2C_Antwerp.svg"
          ></Image>
          <Text fontSize="4xl" as="b">
            WELCOME TO KFC!
          </Text>
        </Box>
      </Box>

      {/* Categories on home page */}
      <Box w="80vw" h="800px" ml="200px" mt="100px">
        <Box
          h="10%"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="4xl" as="b">
            BROWSE CATEGORIES
          </Text>
          <Box
            border="1px solid black"
            borderColor="rgba(0, 0, 0, 0.305)"
            w="60%"
            h="1px"
          ></Box>
        </Box>
        <Box
          h="90%"
          w="100%"
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          mt="10px"
        >
          {categoryData.map((el) => {
            return <FoodCard key={el.id} img={el.img} title={el.title} />;
          })}
        </Box>
      </Box>

      {/* Deals & offer */}
      <Box w="100vw"  h="550px" mt="100px" bg="#202124" color="white">
        <Box
          margin="auto"
          w="70vw"
        
          h="20%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text as="b" fontSize="4xl">
            OFFERS & DEALS
          </Text>
          <Button colorScheme="black" variant="link">
            View All Deals ⟶
          </Button>
        </Box>

        <Box
          w="80vw"
         
          h="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          gap="20px"
          overflowX="auto"
        >
         {dealsData.map((el)=>{
          return <DealsCard key={el.id} img={el.img} title={el.title} details={el.details}></DealsCard>
         })}
        </Box>
      </Box>

      <Footer/>
    </>
  );
};

export default Home;
