import { Box, Flex, Image, Select } from "@chakra-ui/react";
import React, { useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeCartApi, updateCartApi } from "../../store/cart/cart.actions";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const quantity = useRef(item.quantity);

  return (
    <Box p="5px" rounded="8px" border="1px solid lightgray">
      <Flex h="90px" borderBottom="0.5px solid lightgray" p="0px 0px 5px 0px">
        <Box w="23%">
          <Image src={item.image} h="100%" />
        </Box>
        <Flex w="67%" direction="column" p="5px">
          <Box fontSize="14px">{item.name}</Box>
          <Box fontSize="13px">({item.gram})</Box>
        </Flex>
        <Flex
          p="5px"
          justify="center"
          w="10%"
          cursor="pointer"
          onClick={() => dispatch(removeCartApi(item.id))}
        >
          <RiDeleteBin6Line color="gray" fontSize="18px" />
        </Flex>
      </Flex>
      <Flex justify="space-between" h="40px" align="baseline" p="5px">
        <Flex align="center" justify="space-between">
          <Box>Quantity :</Box>
          <Box border="none" outline="none">
            <Select
              size="sm"
              border="none"
              onFocus="none"
              outline="none"
              onChange={(e) => {
                quantity.current = e.target.value;
                dispatch(updateCartApi(item.id,quantity.current))
              }}
            >
              <option hidden>{item.quantity}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Select>
          </Box>
        </Flex>
        <Box fontWeight="bold">₹{item.price * quantity.current}</Box>
      </Flex>
    </Box>
  );
};
export default CartCard;
