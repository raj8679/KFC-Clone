import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react'

const FoodCard = ({img,title}) => {
  return (
    <>
    <Box  h="300px" w="300px" >
<Box h="80%" w="100%">
<Image h="100%" w="100%" borderTopRadius="7" src={img}/>
</Box>

  <Box display="flex" justifyContent="center" h="20%" alignItems="center" bg="rgba(222, 184, 135, 0.113)">
  <Text fontSize="xl" as="b" >{title}</Text>
  </Box>
    </Box>
    </>
  )
}

export default FoodCard