import React, { useEffect, useState } from "react";
// import { Box } from "@chakra-ui/react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
	AccordionIcon,
	Checkbox,
	Flex,
	Radio,
	RadioGroup,
	VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Sort = () => {
	const productData = useSelector((state) => state.products.productsData);
	const newArr = [...productData];
	// console.log(productData);

	const [id, setId] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const arr = productData.map((ele) => ele.id);
		// console.log(arr);
		setId([...arr]);
	}, [productData]);

	const handleL2h = (e) => {
		const checked = e.target.checked;
		console.log(true);
		if (checked) {
			axios({
				method: "get",
				url: "https://nykaclonebymyteam.herokuapp.com/products/sort",
				responseType: "stream",
				headers: {
					id,
				},
			}).then(({ data }) => {
				dispatch({
					type: "getData",
					payload: data,
				});
			});
		}
	};
	const handleH2l = (e) => {
		const checked = e.target.checked;
		console.log(true);
		if (checked) {
			axios({
				method: "get",
				url: "https://nykaclonebymyteam.herokuapp.com/products/sorting",
				responseType: "stream",
				headers: {
					id,
				},
			}).then(({ data }) => {
				dispatch({
					type: "getData",
					payload: data,
				});
			});
		}
	};

	const handleA2z = (e) => {
		const checked = e.target.checked;
		console.log(true);
		if (checked) {
			axios({
				method: "get",
				url: "https://nykaclonebymyteam.herokuapp.com/products/sortAlpha",
				responseType: "stream",
				headers: {
					id,
				},
			}).then(({ data }) => {
				dispatch({
					type: "getData",
					payload: data,
				});
			});
		}
	};
	const handleZ2a = (e) => {
		const checked = e.target.checked;
		console.log(true);
		if (checked) {
			axios({
				method: "get",
				url: "https://nykaclonebymyteam.herokuapp.com/products/sortRevAlpha",
				responseType: "stream",
				headers: {
					id,
				},
			}).then(({ data }) => {
				dispatch({
					type: "getData",
					payload: data,
				});
			});
		}
	};
	return (
		<Box bg="white">
			<Accordion
				defaultIndex={[0]}
				allowMultiple
			>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontWeight={"bold"}
							>
								Sort By:
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<RadioGroup defaultValue="0">
							<Flex
								w="100%"
								justifyContent="space-between"
								mb={2}
							>
								<label>Price Low to High</label>
								<Radio
									value="1"
									colorScheme="pink"
									onChange={(e) => handleL2h(e)}
								></Radio>
							</Flex>
							<Flex
								w="100%"
								justifyContent="space-between"
								mb={2}
							>
								<label>Price High to Low</label>
								<Radio
									value="2"
									colorScheme="pink"
									onChange={(e) => handleH2l(e)}
								></Radio>
							</Flex>
						</RadioGroup>

						<RadioGroup defaultValue="0">
							<Flex
								w="100%"
								justifyContent="space-between"
								mb={2}
							>
								<label>A-Z</label>
								<Radio
									value="1"
									colorScheme="pink"
									onChange={(e) => handleA2z(e)}
								></Radio>
							</Flex>
							<Flex
								w="100%"
								justifyContent="space-between"
								mb={2}
							>
								<label>Z-A</label>
								<Radio
									value="2"
									colorScheme="pink"
									onChange={(e) => handleZ2a(e)}
								></Radio>
							</Flex>
						</RadioGroup>
						<Flex
							justifyContent="space-between"
							mb={2}
						>
							{" "}
							<label>Popularity</label>
							<Checkbox
								colorScheme="pink"
								isDisabled
							/>
						</Flex>
						<Flex
							justifyContent="space-between"
							mb={2}
						>
							{" "}
							<label>New Arrival</label>
							<Checkbox
								colorScheme="pink"
								isDisabled
							/>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export default Sort;
