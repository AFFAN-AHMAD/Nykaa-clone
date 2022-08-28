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
	Button
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ProductAddToCart from "./Cards.tsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "@chakra-ui/react";
const Products = () => {
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.products.productsData);
	const PageCount = Math.ceil(22/ 9);
	const pageArr = [];

	const [pageNo, setpageNo] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData([...productData]);
	}, [productData]);
	// pagination code
	
	for (let i = 0; i < PageCount; i++) {
		pageArr.push(i + 1);
	}
		useEffect(() => {
			// console.log(pageNo);
			dispatch({
				type: "getPage",
				payload: pageNo,
			});
		}, [pageNo]);
		const hanldePageDec = () => {
			if (pageNo > 1) {
				setpageNo(pageNo - 1);
			}
		};
		const handlePageInc = () => {
			if (pageNo < PageCount) {
				setpageNo(pageNo + 1);
			}
		};
	return (
		<>
			<Navbar />
			<Box
				w="80%"
				margin={"auto"}
				mt="30px"
				// bg={"whitesmoke"}
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
				<Center
					m={"auto"}
					textAlign="center"
					p={3}
					gap={10}
					mt={5}
					mb={5}
				>
					{productData.length>5&&<>
						<Button
							w="40px"
							h="40px"
							fontSize={"xl"}
							// border={"1px solid black"}
							onClick={() => hanldePageDec()}
							isDisabled={pageNo == 1}
							borderRadius="50%"
						>
							&#8592;
						</Button>
						
						{pageArr.map((ele) => (
							<Button
								w="40px"
								h="40px"
								fontSize={"xl"}
								// border={"1px solid black"}
								onClick={() => setpageNo(ele)}
								color={ele == pageNo ? "white" : "black"}
								background={ele == pageNo ? "#e62e77" : "none"}
								key={ele}
								borderRadius="50%"
							>
								{ele}
							</Button>
						))}
						<Button
							w="40px"
							h="40px"
							fontSize={"xl"}
							// border={"1px solid black"}
							// colorScheme={"white"}
							onClick={() => handlePageInc()}
							isDisabled={pageNo == PageCount}
							borderRadius="50%"
						>
							&#8594;
						</Button>
					</>}
				</Center>
			</Box>

			<Footer />
		</>
	);
};

export default Products;
