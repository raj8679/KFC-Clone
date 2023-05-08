import React, { useEffect } from "react";
import Navstyles from "../Styles/Navbar.module.css";
import Logo from "../Images/Logo.jpg";
import {
  Button,
  Text,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { auth } from "../firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { loggedUserName, setLoggedUserName, setDeletePass } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignInBtn = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await signOut(auth).then((res) => setLoggedUserName(""));
  };

  const handleDeleteAccountBtn =() => {
  navigate("/login")
  setDeletePass(true)
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setLoggedUserName(user.displayName);
      }     
    });
  }, []);
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
              <Text as="b" mr="20px">
                Menu
              </Text>
            </RouterLink>

            <RouterLink to="/deals">
              <Text as="b">Deals</Text>
            </RouterLink>
          </Box>
          <Box className={Navstyles.user_part}>
            {loggedUserName ? (
              <>
                <Menu isLazy>
                  <MenuButton
                    as={IconButton}
                    icon={<FaUserCircle size={"30"} />}
                    variant={"unstyled"}
                  ></MenuButton>
                  <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                    <MenuItem>
                      {" "}
                      <Text fontWeight="bold" as="i">
                        Welcome{" "}
                        <span style={{ color: "tomato" }}>
                          {loggedUserName}
                        </span>
                      </Text>
                    </MenuItem>
                    <MenuItem>Orders</MenuItem>
                    <MenuItem>Cart</MenuItem>
                    <MenuItem>Register</MenuItem>
                   
                    <MenuItem color={"tomato"} onClick={handleLogout}>
                      LogOut
                    </MenuItem>
                    <MenuItem onClick={handleDeleteAccountBtn} color={"tomato"}>
                      Delete account
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : null}

            <Text
              as="b"
              onClick={handleSignInBtn}
              _hover={{ cursor: "pointer" }}
            >
              {loggedUserName ? loggedUserName : "Log In"}
            </Text>
            <Text>|</Text>
            <Text>₹0</Text>
            <RouterLink to="/cart">
              <Image
                w="50px"
                src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              ></Image>
            </RouterLink>
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
