
import {Box} from "@chakra-ui/react"
import Card from './Card'

export default function Container() {
  return (
    <Box w="80%" m="auto"  display="flex"  justifyContent="space-between"  flexWrap="wrap">

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        

        </Box>
    
  )
}

