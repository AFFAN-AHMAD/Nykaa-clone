import MainPage from "./MainPage/MainPage";
import ScrollToTop from "react-scroll-to-top";

import { ArrowUpIcon } from "@chakra-ui/icons";
import Footer from "../../components/Footer/Footer";
import React,{useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { BallTriangle } from "react-loader-spinner";
import { Flex } from "@chakra-ui/react";
// Remove conditional from main component
export default function LandingPage() {
	const [loader, setLoader] = useState(true);
	 useEffect(() => {
			setTimeout(() => {
				setLoader((loader) => !loader);
			}, 1500);
		}, []);
	return (
		<div>
			<Navbar />
			{!loader ? (
				<>
					<MainPage />

					<ScrollToTop
						style={{
							borderRadius: "50%",
							height: "45px",
							width: "45px",
							padding: "0px",
							margin: "0px",
						}}
						smooth
						component={<ArrowUpIcon fontSize={"xl"} />}
					/>
				</>
			) : (
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
		</div>
	);
}
