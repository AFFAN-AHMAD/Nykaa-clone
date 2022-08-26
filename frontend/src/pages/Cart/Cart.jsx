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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemApi } from "../../store/cart/cart.actions";
import CartCard from "./CartCard";
import { IoAlertCircleOutline, IoArrowForward } from "react-icons/io5";
import { FcOk, FcInfo } from "react-icons/fc";
import styles from "./Cart.module.css";
import EmptyBag from "./EmptyBag";

function DrawerExample({ isOpen, onClose, btnRef }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartData);
  const cartQuantity = cart.length;
  const cartTotal = cart.reduce((ac, el) => {
    return ac + +el.price * +el.quantity;
  }, 0);
  const items = cart.reduce((ac,el) => {
    return ac + +el.quantity;
  },0);
  const discount = (cartTotal * 0.08).toFixed(0);
  const grandTotal = cartTotal - discount;

  useEffect(() => {
    dispatch(getItemApi());
  }, []);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
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
                <Flex justify="space-between" fontSize="13px">
                  <Box>Bag MRP ({items} items)</Box>
                  <Box>₹{cartTotal}</Box>
                </Flex>
                <Flex justify="space-between" fontSize="13px">
                  <Flex gap="5px" align="center">
                    <Box>Discount</Box>
                    <IoAlertCircleOutline />
                  </Flex>
                  <Box>₹{discount}</Box>
                </Flex>
                <Flex justify="space-between" fontSize="13px">
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
                  <span className={styles.free}>₹{discount}</span> on this order
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
  );
}

export default DrawerExample;
