import React from "react";
import "./Slider.css";

import { ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'



export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >{

      direction === "next" ? <ChevronRightIcon h="30px" w="30px" color="grey"/> : <ChevronLeftIcon h="30px" w="30px" color="grey"/>
    }
    </button>
  );
}
