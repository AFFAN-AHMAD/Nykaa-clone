import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./ProductDetails.module.css";
import { FcCheckmark } from "react-icons/fc";

const Pincode = () => {
  const toast = useToast();
  const [pincode, setPincode] = useState("");
  const [toggle, setToggle] = useState(false);
  const [place, setPlace] = useState("");
  const [state, setState] = useState("");
  const [loader, setLoader] = useState(false);

  // Follow prev file comments
  const handleCheck = async () => {
    setLoader(true);
    if (pincode) {
      const res = await axios(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      if (res.data[0].PostOffice) {
        setPlace(res.data[0].PostOffice[0].Division);
        setState(res.data[0].PostOffice[0].State);
        setLoader(false);
        setToggle(!toggle);
      } else if (res.data[0].PostOffice == null) {
        setLoader(loader => !loader);
        return toast({
          title: `Invalid Pincode`,
          status: "error",
          position: "top",
          isClosable: true,
          color: "white",
        });
      }
    } else {
      setLoader(loader => !loader);
      return toast({
        title: `Please Enter Pincode`,
        status: "warning",
        position: "top",
        isClosable: true,
        color: "white",
      });
    }
  };

  // function to fetch the next 5th day
  let date = new Date();
  date.setDate(date.getDay() + 5);
  let delivery = date.toDateString().slice(0, 11);

  const handleChange = () => {
    setLoader(false);
    setToggle(!toggle);
  };

  return (
    <>
      {!toggle ? (
        <div>
          {!loader ? (
            <div className="question">
              <Flex direction="column" p="0px 40px" gap="10px">
                <Flex align="center" w="60%">
                  <IoLocationOutline fontSize="22" color="gray" />
                  Delivery Options
                </Flex>
                <Box>
                  <InputGroup w="250px" h="38px">
                    <Input
                      type="number"
                      rounded="none"
                      w="180px"
                      outline="none"
                      h="38px"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <InputRightAddon
                      children="Check"
                      rounded="none"
                      color="red"
                      bg="white"
                      cursor="pointer"
                      fontWeight={500}
                      fontSize="15px"
                      h="38px"
                      onClick={handleCheck}
                      _hover={{ bg: "#f6eff6" }}
                    />
                  </InputGroup>
                </Box>
              </Flex>
            </div>
          ) : (
            <Box p="20px">Fetching delivery details...</Box>
          )}
        </div>
      ) : (
        <Flex direction="column" gap="5px" p="15px">
          <Flex>
            <Flex align="center" w="70%" fontWeight={500}>
              <IoLocationOutline color="gray" fontSize="18px" />
              <Box fontSize="15px">
                Delivery Options for{" "}
                <span className={styles.pincode}>{pincode}</span>
              </Box>
            </Flex>
            <Button
              onClick={() => handleChange()}
              size="sm"
              color="#fc2779"
              outline="1px solid #fc2779"
              variant="outline"
            >
              Change
            </Button>
          </Flex>
          <Flex fontSize="15px">
            <Box>Shipping to : </Box>
            <Box fontWeight={500} ml="5px">{` ${place}, ${state}`}</Box>
          </Flex>
          <Flex align="center">
            <Box>
              <FcCheckmark fontSize="15px" />
            </Box>
            <Box fontSize={"15px"} ml="3px">
              Delivered by <span className={styles.free}>{delivery}</span>
            </Box>
          </Flex>
          <Flex align="center">
            <Box>
              <FcCheckmark fontSize="15px" />
            </Box>
            <Box fontSize={"15px"} ml="3px">
              Cash on Delivery available on orders above ₹499
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Pincode;
