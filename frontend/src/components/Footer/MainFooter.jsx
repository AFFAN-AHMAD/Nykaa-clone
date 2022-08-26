import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
  } from '@chakra-ui/react';
  
 
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function MainFooter() {
    return (
      <Box
        bg={"#8c8d94"}
        color={"white"}
        fontSize="14px"
        >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              
              <ListHeader>
                <Image src={process.env.PUBLIC_URL + `/LandingPageImgs/nykaaFooter.png`} alt="image"/>
              </ListHeader>
              <Link  target='_blank'  href={'https://www.nykaa.com/who_are_we/?utm_source=Desktop_web_footer'}>Who are we?</Link>
                <Link href={'https://www.nykaa.com/who_are_we#wwrcopen'}>Careers</Link>
               
              <Link href={'#'}>Authenticity</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Testimonials</Link>
              <Link href={'#'}>Nykaa CSR</Link>
              <Link href={'#'}>Responsible Disclosure</Link>
              <Link href={'#'}>Investor Relations</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      
      </Box>
    );
  }