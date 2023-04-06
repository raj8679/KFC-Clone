import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
  } from '@chakra-ui/react';
  import { useContext, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';

  import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
  import {auth} from "../../firebase";
import { AuthContext } from '../../Contexts/AuthContext';

  
  export default function SignupCard() {
    const {loggedUserName, setLoggedUserName} = useContext(AuthContext);
    console.log(loggedUserName)
    const navigate = useNavigate();
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleLoginBtn = () => {
    navigate("/login")
   };

   const handleRegisterform = async() => {
    console.log(name,email,password);
    await createUserWithEmailAndPassword(auth,email,password)
    .then(async(res) => {
      
      const user = res.user
     await updateProfile(user,{
        displayName: name
      });
      setLoggedUserName(res.user.displayName);
    }
      )
    .catch(err=> console.log(err.message))

    toast({
      title: 'Account created.',
      description: "account created successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate("/login")
   }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" onChange={(e) => setName(e.target.value)}/>
                  </FormControl>
                </Box>
                <Box>
                
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',                   
                  }}
                  onClick={handleRegisterform}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} onClick={handleLoginBtn}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }