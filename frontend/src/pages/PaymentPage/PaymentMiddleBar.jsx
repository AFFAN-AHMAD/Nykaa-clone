import React from "react";
import {
	Box,
	Flex,
	Text,
	Input,
	Button,
	Image,
	Checkbox,
	Divider,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemApi} from "../../store/cart/cart.actions"
import axios from "axios";
const PaymentMiddleBar = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cartData);
	const items = cart.reduce((ac, el) => {
		return ac + +el.quantity;
	}, 0);
	const navigate = useNavigate();
	const maxLengthCheck = (object) => {
		if (object.target.value.length > object.target.maxLength) {
			object.target.value = object.target.value.slice(
				0,
				object.target.maxLength
			);
		}
	};
	const toast = useToast({
		title: "Payment Succesfull",
		position: "top",
		status: "success",
		color: "white",
	});
	const handlePay = () => {
		toast();
		axios.delete("http://localhost:8080/cart").then(() => {
			dispatch(getItemApi())
		})
		navigate("/");
	};
	return (
		<Box
			w="100%"
			bg="white"
			padding="15px"
			boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
		>
			<Box
				h="50px"
				pt="15px"
				pb="15px"
			>
				<Text fontWeight={"700"}>Credit / Debit Card</Text>
			</Box>
			<Divider mb="20px" />
			<Input
				inputMode="numeric"
				type="tel"
				pattern="[0-9\s]{13,19}"
				variant="flushed"
				placeholder="Card Number"
				maxLength="16"
			/>

			<Box
				mt="20px"
				mb="20px"
				w="100%"
			>
				<label style={{ color: "grey" }}>expiry</label>
				<Flex gap={"5px"}>
					<Input
						variant="flushed"
						type="number"
						maxLength="2"
						onInput={maxLengthCheck}
						placeholder="MM"
					></Input>
					<Text
						fontSize="30px"
						fontWeight={"10"}
					>
						/
					</Text>
					<Input
						variant="flushed"
						type="number"
						maxLength="2"
						onInput={maxLengthCheck}
						placeholder="YY"
					></Input>
					<Box ml="5px">
						<Input
							variant="flushed"
							type="number"
							maxLength="3"
							onInput={maxLengthCheck}
							placeholder="CVV"
						></Input>
					</Box>
					<Box w="100%">
						<Image
							w="100%"
							src={process.env.PUBLIC_URL + `/LandingPageImgs/cvv.png`}
							alt="image"
						/>
					</Box>
				</Flex>
				<Checkbox
					size="lg"
					color="grey"
					fontWeight={"500"}
					colorScheme="green"
					defaultChecked
				>
					save this as per rbi guidelines
				</Checkbox>
			</Box>
			<Box
				w="100%"
				m="auto"
			>
				<Button
					_focus={{
						bg: "#fc2779",
					}}
					_hover={{
						bg: "#fc2779",
					}}
					borderRadius={"0"}
					padding="25px"
					w="100%"
					color="white"
					bg="#fc2779"
					onClick={() => handlePay()}
				>
					Pay Now
					<ChevronRightIcon
						w="20px"
						h="20px"
					/>{" "}
				</Button>
			</Box>
		</Box>
	);
};

export default PaymentMiddleBar;
