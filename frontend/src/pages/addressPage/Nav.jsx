import React from "react";
import { Flex, Box, Grid, Image,Center,Heading ,Text, Divider } from "@chakra-ui/react";
// import image from "../../assets/"
const Nav = () => {
    return <Grid w="100%" templateColumns='1fr 1.5fr 1fr'  pt={1}   shadow="lg">
      <Center textAlign={"center"} h="55px" >
        <Image src={require("../../assets/nykaa-logo.webp")} w="120px" h="30px" />
      </Center>
      <Grid textAlign={"center"}  templateColumns='1.15fr 1.15fr 1fr' >

          <Box overflowY="hidden"  h="55px" p={1} borderLeft={"1px solid darkgray "}>
            <Heading fontSize={"xs"} fontWeight="500"> 1 - LOGIN</Heading>
           <Box overflowY="hidden" h="17px">
            <Text fontSize={"xs"} color="gray" >1/232525 loni road rabnjskfkuash fghadsfassdkj</Text>
          </Box>
           </Box>
          <Box overflowY="hidden"  h="55px" p={1} borderLeft={"1px solid darkgray "} mb={1} >
          <Heading fontSize={"xs"} fontWeight="500" color="#e62e77"> 2 - ADDRESS</Heading>
          <Box overflowY="hidden" h="17px">
            <Text fontSize={"xs"} color="gray" >1/232525 loni road rabnjskfkuash fghadsfassdkj</Text>
          </Box>
          <Box borderBottom={"2px solid #e62e77"} mt={4} ></Box >
          </Box>
        <Center  h="55px" p={1} borderLeft={"1px solid darkgray "} borderRight={"1px solid darkgray "}>
            <Heading fontSize={"xs"} fontWeight="500"> 3 - PAYMENT</Heading>
          </Center>
      </Grid> 
        
  </Grid>;
};

export default Nav;
