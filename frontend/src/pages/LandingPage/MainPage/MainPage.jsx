import Slider from "./Slider/Slider";
import dataSlider from "./Slider/dataSlider"
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
   

export default function MainPage(){

    return(
        <>
        <h1>Main Page</h1>
        <Slider dataSlider={dataSlider}/>
        <h1>Top Brands</h1>
        <Container/>
        <Slider dataSlider={dataSlider}/>
        <Container/>


        <Footer/>

        </>
    )
}

