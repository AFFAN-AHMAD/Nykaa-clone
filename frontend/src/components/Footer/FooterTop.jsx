import {
    Box,
    Button,
    Container,
    Link,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Input,
    IconButton,
    Flex,
  } from '@chakra-ui/react';
  import { EmailIcon,PhoneIcon } from '@chakra-ui/icons';
  import { FcIphone } from "react-icons/fc";
 
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function FooterTop() {
    return (
      <Box
        bg="#3f414d"
        color="white">
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 250px  2fr' }}
            spacing={8}>
                  <Stack align={'flex-start'}>
              <ListHeader><IconButton
  variant='outline'
  colorScheme='white'
  aria-label='Send email'
  icon={<EmailIcon h="25px" w="25px" />}
  mr="5px"
  border="none"
  p="0"
/>Get special discount on your inbox</ListHeader>
              <Stack color="white" direction={'row'}>
                <Input
                  placeholder={'Your email'}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <Button  
                _focus={{
                    bg: '#3f414d',
                  }} 
                  _hover={{
                    bg: '#3f414d',

                  }}
                  w="100px" fontWeight={"500"} border="1px solid white" bg="#3f414d">SEND</Button>
              </Stack>
            </Stack>
            <Stack  spacing={0}>
              
              <Flex >
                <Box>
                  <FcIphone/>
                </Box>
              <Text textAlign={"center"} fontSize={'sm'}>
              EXPERIENCE THE NYKAA MOBILE APP
              </Text>
              </Flex>
            
              <Stack direction={'column'} spacing={3} align="center">
                <Link>
                <Image h="60px" w="150px" src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"}></Image>

                </Link>
                <Link>
                <Image h="40px" w="120px" src={"https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png"}></Image>

                </Link>
              
               
              </Stack>
            </Stack>
            <Stack  align={'flex-start'}>
               <Flex  >
                <Box  mr="20px">
                  <PhoneIcon mt="5px" h="25px" w="25px" />
                </Box>
                <Box>
                <Text fontSize="14px">
                FOR ANY HELP YOU MAY CALL US AT

                  
                  </Text>
                  <Text >
                  1800-267-4444

                  </Text>

                </Box>
             
                  </Flex>
                  <Box >
                  <Text ml="40px" fontSize={"14px"}> (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text>

                  </Box>
            </Stack>
          
          </SimpleGrid>
        </Container>
      </Box>
    );
  }