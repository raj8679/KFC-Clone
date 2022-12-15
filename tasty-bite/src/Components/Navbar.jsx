import React from 'react'
import styles from "../Styles/Navbar.module.css";
import Logo from "../Images/Logo.jpg"
import Bag from "../Images/Bag.svg"
import { Button,Text,Box } from '@chakra-ui/react';

const Navbar = () => {
  return (
  <> 
    <div className={styles.parent}>
        <div className={styles.child_one}>
            
            <img style={{width:"150px",height:"100%",borderRadius:"50%"}} src={Logo} alt="logo" />                     
            <Text as="b">Menu</Text>
            <Text as="b">Career</Text>
            <Text as="b">About</Text>
            <Text as="b">Find A KFC</Text>
        </div>
        <div className={styles.child_two}>
        
        <Button colorScheme='red' borderRadius="15px" w="10vw">Start Order</Button>
       <img style={{width:"80px",height:"50%"}} src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="user" />
        
        <img style={{width:"70px",height:"30%"}} src={Bag} alt="Bag" />
        </div>
    </div>

    <Box w="100%" bg="black" color="white" textAlign="center">
        Start an order for Pick a
    </Box>
    </>
  )
}

export default Navbar