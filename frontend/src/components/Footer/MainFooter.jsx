import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Image,
    Link,
  } from '@chakra-ui/react';
  
 
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

  const Links=({children,href})=>{
    return(
      <Link target="_blank"   href={href} _hover={{color:"#fc2779"}}>{children}</Link>
    )
  }
  
  export default function MainFooter() {
    return (
      <Box
        bg={"rgb(140,141,148)"}
        color={"white"}
        fontSize="14px"
        >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              
              <ListHeader>
                <Image src={process.env.PUBLIC_URL + `/LandingPageImgs/nykaaFooter.png`} alt="image"/>
              </ListHeader>
              <Links  href={'https://www.nykaa.com/who_are_we/?utm_source=Desktop_web_footer'}>Who are we?</Links>
                <Links href={'https://www.nykaa.com/who_are_we#wwrcopen'}>Careers</Links>
               
              <Links  href={'https://www.nykaa.com/authenticity-nykaa-guarantee?utm_source=Desktop_web_footer'}>Authenticity</Links>
              <Links  href={'https://www.nykaa.com/who_are_we#wwrpress'}>Press</Links>
              <Links  href={'https://www.nykaa.com/who_are_we#wwrtestimonial'}>Testimonials</Links>
              <Links  href={'https://www.nykaa.com/nykaa-csr'}>Nykaa CSR</Links>
              <Links  href={'https://www.nykaa.com/responsible-disclosure'}>Responsible Disclosure</Links>
              <Links  href={'https://www.nykaa.com/investor-relations'}>Investor Relations</Links>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader fontWeight={"bold"} >Help</ListHeader>
              <Links  href={'https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA'}>Contact Us</Links>
              <Links  href={'https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA'}>Frequently asked questions</Links>
              <Links  href={'https://www.nykaa.com/nykaa-stores-and-events/?utm_source=Desktop_web_footer'}>Store Locator</Links>
              <Links  href={'https://www.nykaa.com/cancellation-policy/?utm_source=Desktop_web_footer'}>Cancellation & Return</Links>
              <Links  href={'https://www.nykaa.com/shipping-policy/?utm_source=Desktop_web_footer'}>Shipping & Delivery</Links>
              <Links  href={'https://www.nykaa.com/sellonnykaa'}>Sell on Nykaa</Links>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader fontWeight={"bold"} >Inspire Me</ListHeader>
              <Links  href={'https://www.nykaa.com/beauty-blog/?utm_source=Desktop_web_footer'}>Beauty Book</Links>
              <Links  href={'https://nykaatv-web.nykaa.com/?utm_source=Desktop_web_footer'}>Nykaa TV</Links>
              <Links  href={'https://www.nykaa.com/nykaa-network'}>Nykaa Network</Links>
              <Links  href={'https://www.nykaa.com/buying-guides/?utm_source=Desktop_web_footer'}>Buying Guides</Links>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader fontWeight={"bold"} >Quick Links</ListHeader>
              <Links  href={'https://www.nykaa.com/offers.html?utm_source=Desktop_web_footer'}>Offer Zone</Links>
              <Links  href={'https://www.nykaa.com/new-at-nykaa?utm_source=Desktop_web_footer'}>New Launches</Links>
              <Links  href={'https://www.nykaaman.com/?utm_source=Desktop_web_footer'}>Nykaa Man</Links>
              <Links  href={'https://www.nykaafashion.com/?utm_source=Desktop_web_footer'}>Nykaa Fashion</Links>
              <Links  href={'https://www.nykaa.com/nykaa-pro?utm_source=Desktop_web_footer'}>Nykaa Pro</Links>
              <Links  href={'https://www.nykaa.com/nfba-nominees-sale-online-2019/?utm_source=Desktop_web_footer'}>Nykaa femina beauty awards winners 2019</Links>
              <Links  href={'https://www.nykaa.com/sitemap?root=nav_footer'}>Sitemap</Links>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader fontWeight={"bold"} >Top Categories</ListHeader>
              <Links  href={'https://www.nykaa.com/makeup.html?root=nav_footer&utm_source=Desktop_web_footer'}>Makeup</Links>
              <Links  href={'https://www.nykaa.com/skin-care.html?root=nav_footer&utm_source=Desktop_web_footer'}>Skin</Links>
              <Links  href={'https://www.nykaa.com/hair-care.html?root=nav_footer&utm_source=Desktop_web_footer'}>Hair</Links>
              <Links  href={'https://www.nykaa.com/personal-care.html?root=nav_footer&utm_source=Desktop_web_footer'}>Personal Care</Links>
              <Links  href={'https://www.nykaa.com/best-personal-care-appliances-online?utm_source=Desktop_web_footer'}>Appliances</Links>
              <Links  href={'https://www.nykaa.com/mom-and-baby.html?root=nav_footer&utm_source=Desktop_web_footer'}>Mom and Baby</Links>
              <Links  href={'https://www.nykaa.com/wellness.html?root=nav_footer&utm_source=Desktop_web_footer'}>Wellness</Links>
              <Links  href={'https://www.nykaa.com/fragrance.html?root=nav_footer&utm_source=Desktop_web_footer'}>Fragrance</Links>
              <Links  href={'https://www.nykaa.com/natural/c/9564?root=nav_1'}>Natural</Links>
              <Links  href={'https://www.nykaa.com/luxe-focus?root=nav_footer&utm_source=Desktop_web_footer'}>Luxe</Links>
            </Stack>
          </SimpleGrid>
        </Container>
      
      </Box>
    );
  }