import { Box,Image } from '@chakra-ui/react'

export default function Card({property}) {

    return (

      <Box  borderWidth='1px' borderRadius='lg' mb="10px"   w="49%" h="300px"
      cursor="pointer"
      _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      >
        <Image src={property.imageUrl} alt={property.imageAlt}
         borderRadius="3px"
        objectFit="contain"
        maxW="100%"
        maxH="100%"
        />
  
  {
    property.title===undefined ? "":(
      <Box p='6' bg="white" w="95%" m="auto" pos="relative" top="-100px" textAlign="center"
borderRadius="3px" 

>

  <Box
    mt='1'
    fontWeight='semibold'
    as='h4'
    lineHeight='tight'
    noOfLines={1}
    color="#ff91bb"
  >
    {property.title}
  </Box>
{
  property.formattedPrice===undefined? (<Box color="white">{"a"}</Box>):(
 <Box>
    {property.formattedPrice}
  
  </Box>
  )
}
 

</Box>

    )



  }
       
      </Box>

    )
  }