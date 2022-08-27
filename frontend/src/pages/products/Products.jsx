import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Box,
	Flex,
	Text,
	Heading,
	Grid,
	GridItem,
	Center,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ProductAddToCart from "./Cards.tsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "@chakra-ui/react";
const Products = () => {
	const productData = useSelector((state) => state.products.productsData);
	const toast = useToast({
		position: "top",
	});

	// console.log(productData)
	const [data, setData] = useState([]);

	const getToast = () => {
		if (productData.length < 1) {
			toast({
				title: "No selected product available for this particular brand",
			});
		}
	};

	useEffect(() => {
		setData([...productData]);
		// getToast()
	}, [productData]);

	return (
		<>
			<Navbar />
			<Box
				w="80%"
				margin={"auto"}
				mt="30px"
			>
				<Heading
					textAlign="center"
					fontSize={"xl"}
				>
					{" "}
					All Products
				</Heading>
				<Flex
					mt="10px"
					maxW=""
				>
					<Sidebar />
					<Grid
						templateColumns="repeat(3, 1fr)"
						margin={"auto"}
					>
						{data.map((ele, i) => (
							<ProductAddToCart
								data={ele}
								key={i}
							/>
						))}
					</Grid>
				</Flex>
			</Box>
			;
			<Footer />
		</>
	);
};

export default Products;
