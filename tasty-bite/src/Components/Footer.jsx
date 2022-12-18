import React from 'react'
import {Box,Text,Image,Button} from "@chakra-ui/react"
import Footerstyles from "../Styles/Footer.module.css"
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <Box className={Footerstyles.container}>
<Box className={Footerstyles.topBox}>
    <Box className={Footerstyles.logoImg}><Image w="100%" h="100%" src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"></Image></Box>
    <Box className={Footerstyles.Details}>
        <Box>
            <Text>KFC Food</Text>
            <Text>Menu</Text>
            <Text>Order Lookup</Text>
            <Text>Gift Card</Text>
            <Text>Nutrition & Allergen</Text>
        </Box>
        <Box>
            <Text>Support</Text>
            <Text>Get Help</Text>
            <Text>Contact Us</Text>
            <Text>KFC Feedback</Text>
            <Text>Privact Policy</Text>
        </Box>
        <Box>
            <Text>Legal</Text>
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy</Text>
            <Text>Disclaimer</Text>
            <Text>Caution Notice</Text>
        </Box>
        <Box>
            <Text>KFC India</Text>
            <Text>About KFC</Text>
            <Text>KFC Care</Text>
            <Text>Careers</Text>
            <Text>Our Golden Past</Text>
        </Box>
    </Box>
    <Box className={Footerstyles.FindKFC}>
        <Image w="20px" h="20px" src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"></Image>
        <Button colorScheme='black' variant='link'>Find a KFC </Button>

    </Box>
    <Box className={Footerstyles.DownloadBtn}>
        <Image w="47%" h="90%" src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"></Image>
        <Image w="47%" h="90%" src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"></Image>
    </Box>
</Box>

<Box className={Footerstyles.belowBox}>
    <Box className={Footerstyles.copyrightBox}>Copyright © KFC Corporation 2021 All Rights Reserved</Box>
    <Box className={Footerstyles.socialAccounts}>
    <FaInstagram style={{border:"1px solid white",padding:"4px",borderRadius:"50%"}} size="25px"/>
    <FaFacebookF style={{border:"1px solid white",padding:"4px",borderRadius:"50%"}} size="25px"/>
    <FaTwitter style={{border:"1px solid white",padding:"4px",borderRadius:"50%"}} size="25px"/>
    </Box>
</Box>
    </Box>
    </>
  )
}

export default Footer