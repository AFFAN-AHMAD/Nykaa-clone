import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { FcLikePlaceholder } from "react-icons/fc";
import {
  Box,
  Image,
  Button,
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import data from "./data.json";
import shades from "../../assets/shades.png";
import {
  IoLocationOutline,
  IoArrowUndoCircle,
  IoBagCheckSharp,
} from "react-icons/io5";

const ProductDetails = () => {
  const [item] = useState(data[1]);
  const [images] = useState(item.images);
  const [curImage, setCurImage] = useState(item.images[0]);

  return (
    <Box className={styles.container}>
      <Box className={styles.leftMain}>
        <Flex h="60%">
          <Flex
            padding="15px 15px 15px 0px"
            direction="column"
            justify="space-evenly"
            w="20%"
          >
            {images.map((el) => (
              <Box
                cursor="pointer"
                p="2px"
                border="1px solid lightgray"
                height="65px"
                onMouseOver={() => setCurImage(el)}
                key={el}
              >
                <Image src={el} h="100%" />
              </Box>
            ))}
          </Flex>
          <Box w="80%" p="10px">
            <Image src={curImage} h="100%" />
          </Box>
        </Flex>
        <Flex h="260px" justify="center" align="center">
          <Button
            leftIcon={<FcLikePlaceholder fontSize="25px" />}
            variant="outline"
            colorScheme="white"
            rounded="2px"
            fontSize="19px"
            color="black"
            p="15px 20px"
          >
            Try It On
          </Button>
        </Flex>
      </Box>
      <Box className={styles.rightMain}>
        <Flex className={styles.rightUpper}>
          <Box fontWeight={500} fontSize={20}>
            {item.name}
            <br />
            <span>(30ml)</span>
          </Box>
          <Box className={styles.ratings}>
            {item.rating}
            <span> 4.2/5 | 1595 ratings & 285 reviews | 10 Q&As</span>
          </Box>
          <Box color="gray">
            MRP :{" "}
            <span>
              <s>₹{item.price - 60}</s>
            </span>
            <span className={styles.price}> ₹{item.price}</span>
          </Box>
          <Box letterSpacing={1}>inclusive of all taxes</Box>
          <Box mt="5" px="3" py="2" bg="#eceef0">
            • Free Masaba Lipstick worth 599 on Rs. 1000
          </Box>
          <Image src={shades} />
          <Flex h="150px" align="center">
            <Flex
              h="100%"
              w="40%"
              justify="center"
              align="center"
              borderRight={"1px solid lightgray"}
            >
              <Button colorScheme="pink" rounded="none" p="25px 60px">
                Add to Bag
              </Button>
            </Flex>
            <Flex w="60%" direction="column" p="0px 40px" gap="10px">
              <Flex align="center">
                <IoLocationOutline fontSize="22" color="gray" />
                Delivery Options
              </Flex>
              <Box>
                <InputGroup>
                  <Input type="number" rounded="none" w="180px" />
                  <InputRightAddon
                    children="Check"
                    rounded="none"
                    color="red"
                    bg="white"
                    cursor="pointer"
                    fontWeight={500}
                    fontSize="15px"
                  />
                </InputGroup>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          h="50px"
          justify="space-evenly"
          border="1px solid lightgray"
          w="100%"
          align="center"
          bg="#f3f4f6"
          borderRight="none"
          borderLeft="none"
        >
          <Flex align="center" gap="3px">
            <IoBagCheckSharp fontSize="30" color="gray" />
            100% Genuine Products
          </Flex>
          <Flex align="center" gap="3px">
            <IoArrowUndoCircle fontSize="30" color="gray" />
            Easy Return Policy
          </Flex>
          <Box>Sold By : NYKAA Retails</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetails;
