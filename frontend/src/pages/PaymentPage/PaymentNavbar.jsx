import React from "react";
import { Box, Grid, Image, Center, Heading, Text } from "@chakra-ui/react";
const Nav = () => {
    return <Grid w="100%" templateColumns='1fr 1.5fr 1fr' pt={1} shadow="lg" bg="white">
        <Center textAlign={"center"} h="70px" >
            <Image src={require("../../assets/nykaa-logo.webp")} w="120px" h="30px" />
        </Center>
        <Grid textAlign={"center"} templateColumns='1.15fr 1.15fr 1fr' >

            <Box overflowY="hidden" textAlign={"left"} h="70px" p={4} pt={3} borderLeft={"1px solid darkgray "} >
                    <Heading fontSize={"md"} fontWeight="600" >1 - LOGIN</Heading>

                <Box overflowY="hidden" h="25px">
                    <Text fontSize={"md"} color="gray" >aman.iit96@gmail.com</Text>
                </Box>
            </Box>

            <Box overflowY="hidden" textAlign={"left"} h="70px" p={4} pt={3} borderLeft={"1px solid darkgray "} >
                <Heading fontSize={"md"} fontWeight="600"  >2-ADDRESS</Heading>
                <Box overflowY="hidden" h="25px">
                    <Text fontSize={"md"} color="gray" >1/232525 loni road rabnjskfkuash fghadsfassdkj</Text>
                </Box>
            </Box>
            <Center borderBottom={"4px solid #fc2779"} h="70px" p={1} borderLeft={"1px solid darkgray "} borderRight={"1px solid darkgray "}>
                <Heading fontSize={"md"} fontWeight="600" color="#e62e77"> 3 - PAYMENT</Heading>
            </Center>

        </Grid>

    </Grid>;
};

export default Nav;
