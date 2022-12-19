import React from "react";
import {
  Text,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const CartCard = ({image,Title,Description,Price,id}) => {

    const deleteCartItem = (id) => {
        return axios.delete(`http://localhost:8080/posts/${id}`);
      };
  return (
    <>
      <Card maxW="sm" backgroundColor="white">
        <CardBody>
          <Image
            src={image}
            // alt=""
            borderRadius="lg"
          />
          <Stack mt="3" spacing="3">
            <Heading size="md">{Title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {Price}
            </Text>
            <Text>
              {Description}
            </Text>
            
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button colorScheme="red" borderRadius="20px" onClick={()=>deleteCartItem(id)}>
             Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};


export default CartCard;
