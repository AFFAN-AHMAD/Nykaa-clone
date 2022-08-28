import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
  Flex,
  Center
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemApi } from "../../store/cart/cart.actions";
import CartCard from "./CartCard";
import { IoAlertCircleOutline, IoArrowForward } from "react-icons/io5";
import { FcOk, FcInfo } from "react-icons/fc";
import { BsBag } from "react-icons/bs";
import styles from "./Cart.module.css";
import EmptyBag from "./EmptyBag";

import { Navigate, useNavigate } from "react-router-dom";

function DrawerExample({ isOpen, onClose, hooks, onOpen }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartData);
  const cartQuantity = cart.length;
  const cartTotal = cart.reduce((ac, el) => {
    return ac + +el.price * +el.quantity;
  }, 0);
  const items = cart.reduce((ac, el) => {
    return ac + +el.quantity;
  }, 0);
  const discount = (cartTotal * 0.08).toFixed(0);
  const grandTotal = cartTotal - discount;
  const refBtn = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getItemApi());
  }, [dispatch]);

  const handleProceed = () => {
    navigate("/address");
  }

  return (
    <>
      <img
        src="data:image/png;base64,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"
        style={{
          height: "30px",
          width: "30px",
          backgroundColor: "white",
          marginTop: "0.4vh",
          marginLeft: hooks ? "0px" : "1vw",
        }}
        alt=""
        onClick={onOpen}
        ref={refBtn}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={refBtn}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader border="0.5px solid lightgray" height="55px">
            <Flex gap="15px" align="baseline">
              <Box fontWeight="bold">Bag</Box>
              <Box fontWeight={400} fontSize="15px">
                ( {items} items )
              </Box>
            </Flex>
          </DrawerHeader>

          {cartQuantity ? (
            <DrawerBody>
              <Flex direction="column" gap="15px">
                {cart && cart.map((el) => <CartCard key={el.id} item={el} />)}
                <Flex
                  direction="column"
                  gap="9px"
                  border="1px solid lightgray"
                  rounded="10px"
                  p="10px"
                >
                  <Box fontWeight="bold" fontSize="17px">
                    Price Details
                  </Box>
                  <Flex justify="space-between" fontSize="14px">
                    <Box>Bag MRP ({items} items)</Box>
                    <Box>₹{cartTotal}</Box>
                  </Flex>
                  <Flex justify="space-between" fontSize="14px">
                    <Flex gap="5px" align="center">
                      <Box>Discount</Box>
                      <IoAlertCircleOutline />
                    </Flex>
                    <Box>₹{discount}</Box>
                  </Flex>
                  <Flex justify="space-between" fontSize="14px">
                    <Flex gap="5px" align="center">
                      <Box>Shipping</Box>
                      <IoAlertCircleOutline />
                    </Flex>
                    <Box>
                      <s>₹70</s> <span className={styles.free}>Free</span>
                    </Box>
                  </Flex>
                  <Flex justify="space-between" fontWeight="bold">
                    <Box>YOU PAY</Box>
                    <Box>₹{grandTotal}</Box>
                  </Flex>
                  <Flex
                    justify="center"
                    align="center"
                    gap="10px"
                    fontSize="14px"
                    bg="#ebf6f0"
                    rounded="8px"
                    p="5px 10px"
                    border="1px solid lightblue"
                  >
                    <FcOk fontSize="20px" /> Yay! You will earn {grandTotal}{" "}
                    Reward points
                  </Flex>
                </Flex>
              </Flex>
            </DrawerBody>
          ) : (
            <EmptyBag onClose={onClose} />
          )}
          {cartQuantity ? (
            <DrawerFooter>
              <Box h="75px" w="100%">
                <Flex
                  justify="center"
                  gap="10px"
                  m="auto"
                  align="center"
                  fontWeight="400"
                  bg="#ebf6f0"
                  p="3px"
                >
                  <FcInfo fontSize="20px" />
                  <Box fontSize="15px">
                    You are saving{" "}
                    <span className={styles.free}>₹{discount}</span> on this
                    order
                  </Box>
                </Flex>
                <Flex justify="space-between" align="center" p="5px">
                  <Box>
                    <Box fontWeight="bold" fontSize="22">
                      ₹{grandTotal}
                    </Box>
                    <Flex align="center" gap="5px" fontSize="13px">
                      Grand Total <IoAlertCircleOutline />
                    </Flex>
                  </Box>
                  <Flex
                    bg="#e80071"
                    justify="space-between"
                    p="7px 10px"
                    align="center"
                    w="170px"
                    rounded="10px"
                    cursor="pointer"
                    onClick={() => handleProceed()}
                  >
                    <Box color="white" fontWeight="bold" fontSize="17px">
                      Proceed
                    </Box>
                    <IoArrowForward color="white" fontSize="25px" />
                  </Flex>
                </Flex>
              </Box>
            </DrawerFooter>
          ) : (
            ""
          )}
        </DrawerContent>
      </Drawer>
    </>
  );

}

export default DrawerExample;
