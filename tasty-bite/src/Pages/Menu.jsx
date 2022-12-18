import { Box,Text,Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Menustyles from "../Styles/Menu.module.css";
import mealsData from "../MenuPageData.json";
import MealsCard from "../Components/MealsCard";

const Menu = () => {
  return (
    <>
      {/* <Box className={styles.container}> */}
      <Navbar />
      <Box className={Menustyles.SidebarAndMeals}>
        <Box className={Menustyles.SidebarBox}>
        <Image
        ml="58px"
            w="80px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Berchem%2C_Antwerp.svg"
          ></Image>
          <br />
          <Text fontSize="4xl" as="b" ml="65px">KFC MENU</Text>
           <br />
           <br />
           <a href="#sectionOne"><Text fontSize="1xl" ml="65px">CHICKEN BUCKETS</Text></a>
          <a href="#sectionTwo"><Text fontSize="1xl" mt="20px" ml="65px">NEW LUNCH</Text></a>
          <a href="#sectionThree"><Text fontSize="1xl" mt="20px" ml="65px">BIRYANI BUCKETS</Text></a>
          <a href="#sectionFour"><Text fontSize="1xl" mt="20px" ml="65px">BOX MEAL</Text></a>
          <a href="#sectionFive"> <Text fontSize="1xl" mt="20px" ml="65px">BURGERS</Text></a>
         <a href="#sectionSix"> <Text fontSize="1xl" mt="20px" ml="65px">SNACKS</Text></a>
         <a href="#sectionSeven"><Text fontSize="1xl" mt="20px" ml="65px">STAY HOME SPECIALS</Text></a>
          <a href="#sectionEight"><Text fontSize="1xl" mt="20px" ml="65px">BEVERAGES</Text></a>
          
        </Box>
        <Box className={Menustyles.MealsBox}>
      
            <Text id="sectionOne" fontSize="4xl" as="b">CHICKEN BUCKETS</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Chicken_buckets"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
          {/* ********** */}
          <Text id="sectionTwo" fontSize="4xl" as="b">NEW LUNCH</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="New_lunch"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
           {/* ********** */}
           <Text id="sectionThree" fontSize="4xl" as="b">BIRYANI BUCKETS</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Biryani_Buckets"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
    {/* ********** */}
    <Text id="sectionFour" fontSize="4xl" as="b">BOX MEAL</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Box_Meal"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
 {/* ********** */}
 <Text id="sectionFive" fontSize="4xl" as="b">BURGERS</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Burgers"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
{/* ********** */}
<Text id="sectionSix" fontSize="4xl" as="b">SNACKS</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="snacks"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
          {/* ********** */}
<Text id="sectionSeven" fontSize="4xl" as="b">STAY HOME SPECIALS</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Stay_home_specials"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>
           {/* ********** */}
<Text id="sectionEight" fontSize="4xl" as="b">BEVERAGES</Text>
          <Box className={Menustyles.MealsCategoryBox}>
            {mealsData.map((el) => {
              if(el.category=="Beverages"){
                return (
                  <MealsCard
                    image={el.image}
                    Title={el.Title}
                    Description={el.Description}
                    Price={el.Price}
                    id={el.id}
                  />
                );
              }
           
          })}
          </Box>

        </Box>
      </Box>
      <Box className={Menustyles.goTop}>
        <a href="#sectionOne"><Image src="https://online.kfc.co.in/static/media/GoTop.c21e2377.svg"></Image></a>
        
        </Box>
      <Footer />
      {/* </Box> */}
    </>
  );
};

export default Menu;
