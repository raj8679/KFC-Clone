import React from "react";
import Navstyles from "../Styles/Navbar.module.css";
import Logo from "../Images/Logo.jpg";
import { Button, Text, Box, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box className={Navstyles.parent}>
        <Box className={Navstyles.child_one}>
          <Box className={Navstyles.findLocation}>
            <Image
              w="20px"
              src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg"
            />
            <Text>Allow location access for local store menu and promos</Text>
            <Button borderRadius="30px" bg="#202124" color="white">
              Set Location
            </Button>
          </Box>
        </Box>

        <Box className={Navstyles.child_two}>
          <Box className={Navstyles.logo_part}>
            <RouterLink to="/">
              <Image
                w="50%"
                h="100%"
                borderRadius="50%"
                border="2px solid red"
                src={Logo}
              />
            </RouterLink>

            <RouterLink to="/menu">
              <Text as="b" mr="20px">Menu</Text>
            </RouterLink>

            <RouterLink to="/deals">
              <Text as="b">Deals</Text>
            </RouterLink>
          </Box>
          <Box className={Navstyles.user_part}>
            <Image
              w="30px"
              src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
            />
            <Text as="b">Sign In</Text>
            <Text>|</Text>
            <Text>₹0</Text>
            <Image
              w="50px"
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
            ></Image>
          </Box>
        </Box>
      </Box>

      {/* **************** */}

      <Box className={Navstyles.startOrder}>
        <Text as="b">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
        <Button colorScheme="red" borderRadius="40px" size="lg">
          Start Order
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
