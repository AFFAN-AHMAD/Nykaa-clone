import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.css"
import {
	Box,
	Flex,
	Text,
	Heading,
	Grid,
	GridItem,
	Center,
	Button,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ProductAddToCart from "./Cards.tsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "@chakra-ui/react";
import { BallTriangle } from "react-loader-spinner";
import { ChevronRightIcon } from "@chakra-ui/icons";
const Products = () => {
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.products.productsData);
	const PageCount = Math.ceil(22/ 9);
	const pageArr = [];
	const [loader, setLoader] = useState(true);
	const [pageNo, setpageNo] = useState(1);
	const [data, setData] = useState([]);
	const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
	const [isLargerThan600] = useMediaQuery("(min-width: 700px)");
	const [isSmallerThan300] = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
		setTimeout(() => {
			setLoader((loader) => !loader);
		}, 1500);
	}, []);
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
			{/* <Navbar /> */}
			<Box
				w="80%"
				m={"auto"}
				pt="10px"
			>
				<Breadcrumb
					fontSize="15px"
					color="darkgray"
					fontWeight={500}
					spacing="0px"
					separator={
						<ChevronRightIcon
							color="gray.500"
							fontSize="20px"
						/>
					}
				>
					<BreadcrumbItem>
						<BreadcrumbLink
							href="/"
							_hover={{ textDecoration: "none", color: "#fc2779" }}
						>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink
							href="/products"
							_hover={{ textDecoration: "none", color: "#fc2779" }}
						>
							Makeup
						</BreadcrumbLink>
					</BreadcrumbItem>

					{/* <BreadcrumbItem >
						<BreadcrumbLink
							href="#"
							_hover={{ textDecoration: "none", color: "#fc2779" }}
						>
							Lips
						</BreadcrumbLink>
					</BreadcrumbItem> */}
				</Breadcrumb>
			</Box>

			{!loader ? (
				<Box
					w="80%"
					margin={"auto"}
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
						
					>
						<Sidebar />
						<Grid
							templateColumns={isLargerThan900?"repeat(3,1fr)":"repeat(2,1fr)"&&isLargerThan600?"repeat(2,1fr)":"repeat(1,1fr)"}
							margin={"auto"}
							className={styles.grid}
						>
							{data.map((ele, i) => (
								<ProductAddToCart
									data={ele}
									key={i}
								/>
							))}
						</Grid>
					</Flex>

					{/* pagination */}
					<Center
						m={"auto"}
						textAlign="center"
						p={3}
						gap={10}
						mt={5}
						mb={5}
					>
						{productData.length > 5 && (
							<>
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
							</>
						)}
					</Center>
				</Box>
			) : (
					// spinner
				<Flex
					h="70vh"
					w="100vh"
					align="center"
					justify="center"
					m="auto"
				>
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

export default Products;
