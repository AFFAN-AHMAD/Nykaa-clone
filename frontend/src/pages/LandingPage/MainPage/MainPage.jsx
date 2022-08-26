import Slider from "./Slider/Slider";
import {dataSlider1,dataSlider2} from "./Slider/dataSlider"
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
import CountDownImg from "./CountDownImg";

import TopBrandData from "./Container/TopBrandData"
import { Box } from "@chakra-ui/react";
   

export default function MainPage(){
   
    // console.log(TopBrandData)
    return(
        <Box w="100%">
        <h1>Main Page</h1>

        <Slider dataSlider={dataSlider1}/>
        <CountDownImg/>
        <Box fontSize="24px" textTransform="uppercase" color="#3f414d" fontWeight={500} w="12%" m="auto" mt="40px" mb="40px">Top Brands</Box>
        <Container data={TopBrandData}/>
        {/* <Slider dataSlider={dataSlider2}/> */}


        <Footer/>

        </Box>
    )
}

