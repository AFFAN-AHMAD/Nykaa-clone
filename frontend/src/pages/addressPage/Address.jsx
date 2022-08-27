import React from "react";
import { Box, Flex ,Grid } from "@chakra-ui/react";
import Nav from "./Nav";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import Rightbar from "./Rightbar";

const Address = () => {
  return <Box bg="whitesmoke">
        <Nav></Nav>
        <Grid templateColumns={'1fr 2fr 1.5fr'} w="85%" m={"auto"} mt={10} gap={10}>
            <LeftBar />
            <MiddleBar />
            <Rightbar/>
        </Grid>
  </Box>;
};

export default Address;
