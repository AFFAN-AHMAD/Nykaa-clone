import React from "react";
import { Box, Flex ,Grid,Image } from "@chakra-ui/react";
import Nav from "./Nav";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import Rightbar from "./Rightbar";

//  always fetch relative path from constants , Once changes can be easily done from there
const Address = () => {
  return (
		<Box bg="whitesmoke">
			<Nav></Nav>
			<Grid
				templateColumns={"1fr 2fr 1.5fr"}
				w="85%"
				m={"auto"}
				mt={10}
				gap={10}
			>
				<LeftBar />
				<MiddleBar />
				<Rightbar />
			</Grid>
			<Box
				w="80%"
				m="auto"
				mt="60px"
			>
				<Image
					src={
						process.env.PUBLIC_URL + `/LandingPageImgs/PaymentPageFooter.png`
					}
					alt="image"
				/>
			</Box>
		</Box>
	);
};

export default Address;
