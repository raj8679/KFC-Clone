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

const MealsCard = ({image,Title,Description,Price,id}) => {
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
            <Button colorScheme="red" borderRadius="20px">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default MealsCard;
