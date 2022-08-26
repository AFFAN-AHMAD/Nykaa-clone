import React from "react";
import { Flex, Box, Grid, Image,Center,Heading ,Text} from "@chakra-ui/react";
// import image from "../../assets/"
const Nav = () => {
    return <Grid w="100%" templateColumns='repeat(3, 1fr)'  pt={1}  pb={1}>
      <Center textAlign={"center"} h="55px" >
        <Image src={require("../../assets/nykaa-logo.webp")} w="120px" h="30px" />
      </Center>
      <Grid textAlign={"center"}  templateColumns='repeat(3, 1fr)' >

          <Box overflowY="hidden"  h="55px" p={1} borderLeft={"1px solid darkgray "}>
            <Heading fontSize={"xs"} fontWeight="500"> 1 - LOGIN</Heading>
            <Text fontSize={"xs"} color="gray"> affanahmad@gmail.,com</Text>
          </Box>

          <Box overflowY="hidden"  h="55px" p={1} borderLeft={"1px solid darkgray "}>
            <Heading fontSize={"xs"} fontWeight="500"> 2 - ADDRESS</Heading>
            <Text fontSize={"xs"} color="gray"  >1/232525 loni road rabnjskfkuash fghadsfasgggggggggggggggggtetewrterssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdkj</Text>
          </Box>
        <Center overflowY="hidden" h="55px" p={1} borderLeft={"1px solid darkgray "} borderRight={"1px solid darkgray "}>
            <Heading fontSize={"xs"} fontWeight="500"> 3 - PAYMENT</Heading>
            {/* <Text fontSize={"xs"} color="gray"> affanahmad@gmail.,com</Text> */}
          </Center>
      </Grid>
    
        
  </Grid>;
};

export default Nav;
