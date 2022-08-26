import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function CountDownImg() {
  return (
    <Box w="100%" m="auto"  mt="20px">


    <Box w="90%" m="auto"  mt="20px">
        <Image src={"https://images-static.nykaa.com/uploads/20924df5-d7ac-4dfe-b22c-5d92d675f02d.gif?tr=w-1200,cm-pad_resize"} alt={"image"}
         borderRadius="3px"
        objectFit="contain"
        maxW="100%"
        maxH="100%"
        />
    </Box>
    <Box w="80%" m="auto"  mt="20px">



        <Image src={"https://images-static.nykaa.com/uploads/87e5564b-63b5-4b41-b991-0eaa4f123654.jpg?tr=w-1200,cm-pad_resize"} alt={"image"}
         borderRadius="3px"
        objectFit="contain"
        maxW="100%"
        maxH="100%"
        />
    </Box>
    </Box>

    
  )
}
