import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React from 'react';
import { useState } from 'react';
  import {useNavigate} from "react-router-dom";
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../../firebase';
  
  export default function LoginCard() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const handleRegisterBtn = () => {
      navigate("/register")
    };

    const handleLoginForm = async() => {
      console.log(email,password)
     await signInWithEmailAndPassword(auth, email, password)
     .then(res => console.log(res)).catch(err=> console.log(err));
     navigate("/")
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  onChange={(e) => setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Text>New User? <span style={{color:"#3296a8",cursor:'pointer'}} onClick={handleRegisterBtn}>Register</span></Text>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLoginForm}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }