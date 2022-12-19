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
import { CartContext } from "../Contexts/CartContext";

const MealsCard = ({image,Title,Description,Price}) => {
  const{postData}=React.useContext(CartContext);
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
            ₹{Price}
            </Text>
            <Text>
              {Description}
            </Text>
            
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button colorScheme="red" borderRadius="20px" onClick={()=>postData(image,Title,Description,Price)}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

// postData(image={image},Title={Title},Description={Description},Price={Price})
export default MealsCard;
