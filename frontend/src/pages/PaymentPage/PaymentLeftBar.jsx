import React from "react";
import { Box, Divider,  Text } from "@chakra-ui/react";
const PaymentLeftBar = () => {
  return <Box bg="white" w="280px" pb={3} pl={4}>
    <Box>
      <Box h="50px" pt="15px" pb="15px" borderRight={"3px solid #e62e77"}>
        <Text fontWeight={600} color="#e62e77" >Credit / Debit Card</Text>

      </Box>
      <Divider />
      <Box h="50px" pt="15px" pb="15px" >
        <Text fontWeight={600} color={"gray"} >UPI</Text>
      </Box>
      <Divider />

      <Box h="50px" pt="15px" pb="15px">
        <Text fontWeight={600} color={"gray"} >GooglePay</Text>
      </Box>
      <Divider />
      <Box h="50px" pt="15px" pb="15px">
        <Text fontWeight={600} color={"gray"} >Net Banking</Text>
      </Box>
      <Divider />
      <Box h="50px" pt="15px" pb="15px">
        <Text fontWeight={600} color={"gray"} >Mobile Wallets</Text>
      </Box>
      <Divider />
      <Box h="50px" pt="15px" pb="15px">
        <Text fontWeight={600} color={"gray"} >Cash on Delivery</Text>
      </Box>
      <Divider />
      <Box h="50px" pt="15px" pb="15px">
        <Text fontWeight={600} color={"gray"} >Gift Card</Text>
      </Box>

    </Box>
  </Box>;
};

export default PaymentLeftBar;
