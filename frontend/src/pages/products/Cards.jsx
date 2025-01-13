import React from "react";

import {
	Flex,
	Circle,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	chakra,
	Tooltip,
	Text,
} from "@chakra-ui/react";
import {Link,useNavigate} from "react-router-dom"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useMediaQuery } from "@chakra-ui/react";
import n01 from "../../assets/n01.jpeg"
const data = {
	isNew: false,
	imageURL:
		"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
	name: "Wayfarer Classic",
	price: 4.5,
	rating: 4.2,
	numReviews: 34,
};



function Rating({ rating, numReviews }) {
	return (
		<Flex alignItems="center">
			{Array(5)
				.fill("")
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2;
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i}
								style={{ marginLeft: "1" }}
								color={i < rating ? "teal.500" : "gray.300"}
							/>
						);
					}
					if (roundedRating - i === 0.5) {
						return (
							<BsStarHalf
								key={i}
								style={{ marginLeft: "1" }}
							/>
						);
					}
					return (
						<BsStar
							key={i}
							style={{ marginLeft: "1" }}
						/>
					);
				})}
			<Box
				as="span"
				ml="2"
				color="gray.600"
				fontSize="sm"
			>
				{numReviews} review{numReviews > 1 && "s"}
			</Box>
		</Flex>
	);
}

function ProductAddToCart({ data }) {
	// console.log(data)
	const navigate = useNavigate()
		const [isSmallerThan300] = useMediaQuery("(max-width: 500px)");

	return (
		<Flex
			p={2}
			w="full"
		>
			{/* size */}
			<Box
				bg={useColorModeValue("white", "gray.800")}
				maxW="xs"
				borderWidth="1px"
				rounded="md"
				shadow="lg"
				position="relative"
				textAlign={"center"}
				w={isSmallerThan300?"180px":"225px"}
				cursor={"pointer"}
				// border="1px solid red"
			>
				<Image
					src={n01}
					alt={`Picture of ${data.name}`}
					roundedTop="lg"
					h="240px"
					w="225px"
					// p="2"
					// border={"1px solid blue"}
					textAlign="center"
					margin={"auto"}
				/>

				<Box p="2">
					<Flex
						mt="2"
						justifyContent="center"
					>
						<Box
							fontSize="sm"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							h="40px"
							overflowY="hidden"
							p={0}
							// m={0}
							justifyContent="center"
						>
							{data.name}
						</Box>
					</Flex>

					<Flex
						fontSize="sm"
						color={useColorModeValue("gray.800", "white")}
						justify="center"
					>
						<Box
							as="span"
							color={"gray.600"}
							fontSize="sm"
						>
							MRP: ₹
						</Box>
						<Box fontWeight="bold">{Number(data.price)}</Box>
					</Flex>
				</Box>
				<Flex h="40px">
					<Box
						border="1px solid #e62e77"
						w="50%"
						h="40px"
						color="#e62e77"
						pt="2.5"
						fontSize={"xs"}
						fontWeight="bold"
						onClick={() => navigate(`/products/${data.id}`)}
					>
						View Details
					</Box>

					<Box
						border="1px solid #e62e77"
						bg="#e62e77"
						color="white"
						w="50%"
						h="40px"
						pt="2.5"
						fontSize={"xs"}
						fontWeight="bold"
					>
						Wishlist
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
}

export default ProductAddToCart;
