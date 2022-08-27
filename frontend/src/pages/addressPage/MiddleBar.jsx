import React from "react";
import { Box, Center, Flex ,Heading,Text} from "@chakra-ui/react"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
const MiddleBar = () => {
  return <Box bg="white" p={5}>

    <Box  p={2} >
      <Flex w="100%" justifyContent={"space-between"} mt={1} mb={3}>
          <Text fontWeight={600}>Affan Ahmad</Text>
          {/* <Text></Text> */}
          <RiDeleteBin6Line color="gray"  />
      </Flex>
      
      <Box w="70%" mb={3}>
        <Text fontSize={17} mb={2}>  1/2666 loni road ramnagar,
            New Delhi - 110032, Delhi, India</Text>
          <Text fontWeight={600}>+91 8700171723</Text>
      </Box>
      
      <Flex h="50px">
        <Center w="15%" border={"1px solid gray"} >
          <Box>
             <FiEdit2 color="gray" />
          <Text>Edit</Text>
         </Box>
        </Center>
        <Box w="85%" bg="#e62e77" h="50px" color="white">
        <Heading fontSize={"md"} textAlign="center" p={2}>SHIP TO THIS ADDRESS </Heading>
        </Box>
      </Flex>
    </Box>
  </Box>;
};

export default MiddleBar;
