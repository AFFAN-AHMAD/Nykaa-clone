import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Nav from "./Nav";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import Rightbar from "./Rightbar";

const Address = () => {
  return <Box>
        <Nav></Nav>
        <Flex>
            <LeftBar />
            <MiddleBar />
            <Rightbar/>
        </Flex>
  </Box>;
};

export default Address;
