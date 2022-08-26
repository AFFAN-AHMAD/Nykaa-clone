import { Box,Image } from '@chakra-ui/react'

export default function Card() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (

      <Box  borderWidth='1px' borderRadius='lg' mb="15px"  w="49%" h="350px"
      cursor="pointer"
      _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
      >
        <Image src={property.imageUrl} alt={property.imageAlt} h="100%" w="100%" 
         
        objectFit="cover"
        />
  
        <Box p='6' bg="white" m="10px" pos="relative" top="-120px">
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
        </Box>
      </Box>

    )
  }