import React from "react";
import {
	Flex,
	Box,
	Grid,
	Image,
	Center,
	Heading,
	Text,
	Divider,
} from "@chakra-ui/react";
// import image from "../../assets/"
const Nav = () => {
	return (
		<Grid
			w="100%"
			templateColumns="1fr 1.5fr 1fr"
			pt={1}
			shadow="lg"
			bg="white"
		>
			<Center
				textAlign={"center"}
				h="70px"
			>
				<Image
					src={require("../../assets/nykaa-logo.webp")}
					w="120px"
					h="30px"
				/>
			</Center>
			<Grid
				textAlign={"center"}
				templateColumns="1.15fr 1.15fr 1fr"
			>
				<Box
					overflowY="hidden"
					textAlign={"left"}
					h="70px"
					p={2}
					pt={3}
					borderLeft={"1px solid darkgray "}
				>
					<Heading
						fontSize={"lg"}
						fontWeight="500"
					>
						1 - LOGIN
					</Heading>
					<Box
						overflowY="hidden"
						h="25px"
					>
						<Text
							fontSize={"md"}
							color="gray"
						>
							affanahmad2797@gmail.com
						</Text>
					</Box>
				</Box>

				<Box
					overflowY="hidden"
					textAlign={"left"}
					h="70px"
					pt={3}
					pl={2}
					pr={2}
					borderLeft={"1px solid darkgray "}
					borderBottom={"3px solid #e62e77"}
				>
					<Heading
						fontSize={"lg"}
						fontWeight="500"
						color="#e62e77"
					>
						2-ADDRESS
					</Heading>
					<Box
						overflowY="hidden"
						h="25px"
					>
						<Text
							fontSize={"md"}
							color="gray"
						>
							1/2666 loni road
						</Text>
					</Box>
				</Box>
				<Box
					textAlign={"left"}
					alignContent={"center"}
					alignItems={"center"}
					h="70px"
					pt={3}
					pl={2}
					borderLeft={"1px solid darkgray "}
					borderRight={"1px solid darkgray "}
				>
					<Heading
						fontSize={"lg"}
						fontWeight="500"
					>
						{" "}
						3 - PAYMENT
					</Heading>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Nav;
