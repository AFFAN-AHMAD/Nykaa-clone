import Slider from "./Slider/Slider";
import { dataSlider1, dataSlider2 } from "./Slider/dataSlider"
import Container from "./Container/Container";
import Container2 from "./Container/Container2";
import CountDownImg from "./CountDownImg";

import TopBrandData from "./Container/TopBrandData"
import { Box, Image } from "@chakra-ui/react";
import onlyAtNykaaData from "./Container/onlyAtNykaaData";
import featureBrandData from "./Container/featureBrandData";
import belowFeatureBrandData from "./Container/belowFeatureBrandData";



export default function MainPage() {

    // console.log(TopBrandData)
    return (
        <Box w="100%"
            bg="#f3f3f3"
        >

            <Slider dataSlider={dataSlider1} />
            <CountDownImg />
            <Box fontSize="24px" textTransform="uppercase" color="#3f414d" fontWeight={500} w="12%" m="auto" mt="40px" mb="40px">Top Brands</Box>
            <Container data={TopBrandData} />
            <Box w="90%" m="auto" mt="40px" mb="10px">
                <Image src={"https://images-static.nykaa.com/uploads/ea8b06f4-c904-462b-b47d-19a932bee718.gif?tr=w-1200,cm-pad_resize"} alt="images" />

            </Box>

            <Box fontSize="24px" textTransform="uppercase" color="#3f414d" fontWeight={500} w="14%" m="auto" mt="40px" mb="40px">ONLY AT NYKAA</Box>

            <Container data={onlyAtNykaaData} />
            <Box w="100%" m="auto" mt="40px" mb="10px">
                <Image src={"https://images-static.nykaa.com/uploads/01e06084-aaff-4a79-b8ad-56a1925bbc48.png?tr=w-1200,cm-pad_resize"} alt="images" />

            </Box>
            <Box fontSize="24px" textTransform="uppercase" color="#3f414d" fontWeight={500} w="18%" m="auto" mt="40px" mb="40px">FEATURED BRANDS
            </Box>

            <Container2 data={featureBrandData} />

            <Box mt="20px" mb="20px">
                <Container data={belowFeatureBrandData} />

            </Box>
            {/* <Slider dataSlider={dataSlider2}/> */}



        </Box>
    )
}

