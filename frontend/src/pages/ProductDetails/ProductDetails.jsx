import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { FcLikePlaceholder } from "react-icons/fc";
import {
  Box,
  Image,
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import data from "./data.json";
import shades from "../../assets/shades.png";
import { IoArrowUndoCircle, IoBagCheckSharp } from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addCartApi } from "../../store/cart/cart.actions";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Pincode from "./Pincode";
import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

const ProductDetails = () => {
  const toast = useToast();
  const { cartData } = useSelector((state) => state.cart);
  const productId = useParams().id;
  const [item] = useState(data[productId - 1]);
  const [images] = useState(item.images);
  const [curImage, setCurImage] = useState(item.images[0]);
  const dispatch = useDispatch();
  const store = cartData.map((el) => {
    return el.id;
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader((loader) => !loader);
    }, 1500);
  }, []);

  const handleAddtoCart = () => {
    if (store.includes(item.id)) {
      return toast({
        title: `Already added to the cart`,
        status: "warning",
        position: "top",
        isClosable: true,
        color: "white",
      });
    }
    dispatch(addCartApi(item));

    return toast({
      title: `Successfully added`,
      status: "success",
      position: "top",
      isClosable: true,
      color: "white",
    });
  };

  return (
    <>
      <Navbar />
      {!loader ? (
        <Box mb="50px">
          <Box className={styles.mainContainer}>
            <Breadcrumb
              fontSize="15px"
              color="darkgray"
              fontWeight={500}
              spacing="0px"
              separator={<ChevronRightIcon color="gray.500" fontSize="20px" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  _hover={{ textDecoration: "none", color: "#fc2779" }}
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/products"
                  _hover={{ textDecoration: "none", color: "#fc2779" }}
                >
                  Makeup
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  href="#"
                  _hover={{ textDecoration: "none", color: "#fc2779" }}
                >
                  Lipstick
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

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
                  rounded="3px"
                  fontSize="18px"
                  color="#373737"
                  p="16px 20px"
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
                  <span>({item.gram})</span>
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
                    <Button
                      bg="#fc2779"
                      rounded="none"
                      p="25px 60px"
                      color="white"
                      fontSize="18px"
                      _hover="none"
                      onClick={() => handleAddtoCart()}
                    >
                      Add to Bag
                    </Button>
                  </Flex>
                  <Box w="60%">
                    <Pincode />
                  </Box>
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
        </Box>
      ) : (
        <Flex h="70vh" w="100vh" align="center" justify="center" m="auto">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#fc2779"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Flex>
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;
