
import {Box} from "@chakra-ui/react"
import Card2 from './Card2'
// import TopBrandData from "./TopBrandData";

export default function Container({data}) {
  return (
    
    <Box w="80%" m="auto"  gap="10px" display="flex"  justifyContent={"center"}   flexWrap="wrap">

        {
          data.map((el,index)=>{


            return(

        <Card2 key={index} property={el}/>

            )
          })
        }
       
        </Box>
    
  )
}

