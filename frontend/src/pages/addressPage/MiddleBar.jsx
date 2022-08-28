import React from "react";
import { Box, Center, Flex ,Heading,Text} from "@chakra-ui/react"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
const MiddleBar = () => {
  const navigate = useNavigate()
  return (
		<Box
			bg="white"
			p={5}
		>
			<Box p={2}>
				<Flex
					w="100%"
					justifyContent={"space-between"}
					mt={1}
					mb={3}
				>
					<Text fontWeight={600}>Affan Ahmad</Text>
					{/* <Text></Text> */}
					<RiDeleteBin6Line />
				</Flex>

				<Box
					w="70%"
					mb={3}
				>
					<Text
						fontSize={17}
						mb={2}
					>
						{" "}
						1/2666 loni road ramnagar, New Delhi - 110032, Delhi, India
					</Text>
					<Text fontWeight={600}>+91 8700171723</Text>
				</Box>

				<Flex
					h="50px"
					cursor={"pointer"}
				>
					<Center
						w="15%"
						border={"1px solid gray"}
					>
						<Box>
							<FiEdit2 color="gray" />
							<Text>Edit</Text>
						</Box>
					</Center>
					<Center
						w="85%"
						bg="#e62e77"
						h="50px"
						color="white"
						cursor={"pointer"}
					>
						<Heading
							fontSize={"md"}
							p={2}
							onClick={() => navigate("/payment")}
						>
							SHIP TO THIS ADDRESS{" "}
						</Heading>
					</Center>
				</Flex>
			</Box>
		</Box>
	);
};

export default MiddleBar;
