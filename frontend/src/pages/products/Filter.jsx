import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
	AccordionIcon,
	Stack,
	Checkbox,
	Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { ComponentStyleConfig } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const FIlter = () => {
	const [noOfBRands, SetNoOfBrands] = useState([]);
	const [noOfCategory, SetnoOfCategory] = useState([]);
	const [brandsFil, setBrandFil] = useState([]);
	const [categFil, setCategFil] = useState([]);
	const pageNo = useSelector((state) => state.page.pageNo);
	// console.log(pageNo,"page")
	const toast = useToast({
		position: "top",
	});
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get("http://localhost:8080/products/brand")
			.then(({ data }) => {
				SetNoOfBrands(data);
			});
		axios
			.get("http://localhost:8080/products/category")
			.then(({ data }) => {
				SetnoOfCategory(data);
			});
	}, []);

	const handleCateg = (e) => {
		const name = e.target.name;
		const isChecked = e.target.checked;
		// console.log(name, isChecked)
		if (isChecked) {
			setCategFil([...categFil, e.target.name]);
		} else {
			const filter = categFil.filter((ele) => {
				return ele != name;
			});
			setCategFil([...filter]);
		}
	};

	const handleBrand = (e) => {
		// console.log(e.target.name);
		const name = e.target.name;
		const isChecked = e.target.checked;
		if (isChecked) {
			setBrandFil([...brandsFil, e.target.name]);
		} else {
			const filter = brandsFil.filter((ele) => {
				return ele != name;
			});
			setBrandFil([...filter]);
		}
	};

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:8080/products/filter",
			responseType: "stream",
			headers: {
				brand: brandsFil,
				product_type: categFil,
			},
			params: {
				pageNo,
			},
		}).then(function (response) {
			dispatch({
				type: "getData",
				payload: response.data,
			});
			setTimeout(() => {
				if (response.data.length < 1) {
					toast({
						title: "No selected product available for this particular brand",
					});
				}
			}, 2000);
		});
	}, [brandsFil, categFil, pageNo]);

	return (
		<Stack bg="white">
			<Accordion
				defaultIndex={[0]}
				allowMultiple
			>
				{/* category */}
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontWeight={"bolder"}
							>
								Category
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={4}
						spacing={4}
					>
						{noOfCategory.map((ele, i) => (
							<Flex
								justifyContent="space-between"
								mb={2}
								key={i}
							>
								{" "}
								<label>{ele}</label>
								<Checkbox
									colorScheme="pink"
									name={ele}
									onChange={(e) => handleCateg(e)}
								/>
							</Flex>
						))}
					</AccordionPanel>
				</AccordionItem>

				{/* brand */}
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontWeight={"bolder"}
							>
								Brand
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{noOfBRands.map((ele, i) => (
							<Flex
								justifyContent="space-between"
								mb={2}
								key={i}
							>
								{" "}
								<label>{ele}</label>
								<Checkbox
									colorScheme={"pink"}
									name={ele}
									onChange={(e) => handleBrand(e)}
								></Checkbox>
							</Flex>
						))}
					</AccordionPanel>
				</AccordionItem>

				{/* price */}
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontWeight={"bolder"}
							>
								Price
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={4}
						gap={2}
					>
						<Flex
							justifyContent="space-between"
							mb={2}
						>
							{" "}
							<label>Rs. 0 - Rs. 499</label>
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
							<label>Rs. 500 - Rs. 999</label>
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
							<label>Rs. 1000 - Rs. 1999</label>
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
							<label>Rs. 2000 - Rs. 3999</label>
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
							<label>{`Rs. 4000 & above`}</label>
							<Checkbox
								colorScheme="pink"
								isDisabled
							/>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
				{/* gender */}
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box
								flex="1"
								textAlign="left"
								fontWeight={"bolder"}
							>
								Gender
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex
							justifyContent="space-between"
							mb={2}
						>
							{" "}
							<label>Female</label>
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
							<label>Unisex</label>
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
							<label>Boy</label>
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
							<label>Male</label>
							<Checkbox
								colorScheme="pink"
								isDisabled
							/>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default FIlter;
