import React from "react";
import { Box, Divider, Flex ,Text} from "@chakra-ui/react";
const PaymentLeftBar = () => {
  return <Box bg="white"  pb={3} pl={3}> 
    <Box>
      <Flex w="100%" h="40px" justifyContent={"space-between"} borderRight={"3px solid #e62e77"} p={1}>
        <Text fontWeight={600} color="#e62e77" mt={1}>Saved Addresses</Text>
        <Text color="gray" mt={1}>1</Text>
    </Flex>
    <Divider />
      <Box h="40px" p={1}>
        <Text fontWeight={600} color={"gray"} >New Address</Text>
    </Box>
    </Box>
  </Box>;
};

export default PaymentLeftBar;
