import React from "react";
import {Box} from "@chakra-ui/react";
import Sort from "./Sort";
import FIlter from "./Filter";
const Sidebar = () => {
    return <Box w="330px">
        <Sort />
        <FIlter/>
        
  </Box>;
};

export default Sidebar;
