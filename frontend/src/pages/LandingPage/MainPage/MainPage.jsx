import Slider from "./Slider/Slider";
import dataSlider from "./Slider/dataSlider"
   

export default function MainPage(){

    return(
        <>
        <h1>Main Page</h1>
        <Slider dataSlider={dataSlider}/>
        <Slider dataSlider={dataSlider}/>
        </>
    )
}

