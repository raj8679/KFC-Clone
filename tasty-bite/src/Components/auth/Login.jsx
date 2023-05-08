import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
  import React, { useContext } from 'react';
import { useState } from 'react';
  import {useNavigate} from "react-router-dom";
  import { deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../../firebase';
import { AuthContext } from '../../Contexts/AuthContext';
  
  export default function LoginCard() {
    const {deletePass, setLoggedUserName} = useContext(AuthContext)
    console.log(deletePass)
    const toast = useToast()
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const handleRegisterBtn = () => {
      navigate("/register")
    };

    const handleLoginForm = async() => {
      let user;
      try{
        await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          user = res.user;
         if(deletePass) {
          deleteUserAccount()
         }
        })
        .catch(err=> 
          toast({
            title: err.message,
            status: 'error',
            duration: 3500,
            isClosable: true,
          })   
           );
          
           if(user){
            navigate("/")
           }
        
      } catch(err) {
       console.log(err)
      }
        };

        const deleteUserAccount = async() => {
          const user = auth.currentUser;
          await deleteUser(user)
             .then(() => {
              setLoggedUserName("");
             })
             .catch((error) => {
               console.log(error.message);
             });
             navigate("/")
        }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} w="fit-content">
           {deletePass ? <Heading fontSize={'4xl'} color={"red.500"}>Confirm login credentials</Heading> :  <Heading fontSize={'4xl'}>Sign in to your account</Heading>}
          
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
                    {deletePass ? null :
                    <Text>New User? <span style={{color:"#3296a8",cursor:'pointer'}} onClick={handleRegisterBtn}>Register</span></Text>
                    }
                  
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={deletePass ? 'red' : 'blue.400'}
                  color={'white'}  
                  _hover={deletePass ?{
                    bg: 'red.500',
                  } : {
                    bg: 'blue.500',
                  }}
                  onClick={handleLoginForm}
                  isDisabled={!email || !password}
                  >
                  {deletePass ? "Delete Account" : "Sign In"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }