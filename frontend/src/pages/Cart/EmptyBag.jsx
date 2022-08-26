import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import emptybag from "../../assets/emptybag.png";

const EmptyBag = ({onClose}) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="30px"
      p="20px"
    >
      <Box>
        <Image src={emptybag} />
      </Box>
      <Button
        bg="#e80071"
        fontSize="25px"
        p="25px 50px"
        color="white"
        _hover={{}}
        onClick={() => onClose()}
      >
        Start Shopping
      </Button>
    </Flex>
  );
};

export default EmptyBag;
