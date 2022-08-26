import React from "react";
import {Box,Stack} from "@chakra-ui/react";
import Sort from "./Sort";
import FIlter from "./Filter";
const Sidebar = () => {
    return <Stack  gap={5} maxW="400px" w="230px" >
        <Sort />
        <FIlter/>
        
  </Stack>;
};

export default Sidebar;
