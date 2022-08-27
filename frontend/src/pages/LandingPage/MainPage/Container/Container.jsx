
import {Box} from "@chakra-ui/react"
import Card from './Card'

export default function Container({data}) {
  return (
    
    <Box w="80%" m="auto"  display="flex"  justifyContent="space-between"  flexWrap="wrap">

        {
          data.map((el,index)=>{


            return(

        <Card key={index} property={el}/>

            )
          })
        }
       
        </Box>
    
  )
}

