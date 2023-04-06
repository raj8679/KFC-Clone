import React from 'react'
import { Box,Button,Text,Image } from '@chakra-ui/react'

const DealsCard = ({img,title,details}) => {
  return (
    <>
     <Box  h="420px" w="320px">
 
 <Box h="60%" w="100%">
 <Image h="100%" w="100%" borderTopRadius="7" src={img}/>
 </Box>
 
   <Box  h="29%">
   <Text as="b" fontSize="3xl" color="red" display="flex" justifyContent="center">{title}</Text>
   <Box overflow-y="scroll"><Text>{details}</Text></Box>
   
   </Box>
   
   <Box h="11%"  display="flex" justifyContent="space-around">
   <Button colorScheme='black' variant='link'>
     View Details
   </Button>
    <Button colorScheme='black' variant='outline' borderRadius="20px">
     Redeem
   </Button>
   </Box>
     </Box>
    </>
  )
}

export default DealsCard