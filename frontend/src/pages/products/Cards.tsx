import React from 'react';

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
  isNew: false,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};


interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }:RatingProps) {
  return (
    <Flex alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Flex>
  );
}

function ProductAddToCart({data}) {
console.log(data)
  
  return (
    <Flex p={3} w="full"  >
      {/* size */}
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
       textAlign={"center"}
        // h="400px"
        w="200px"
        p="2"
      >
        {/* {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )} */}

        <Image
          src={data.images[0]}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          h="240px"
          w="200px"
          //  border={"1px solid teal"}
        />

        <Box p="0">
          {/* <Flex  alignItems="baseline" >
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Flex> */}
          <Flex mt="2"  justifyContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              h="50px"
              overflowY="hidden"
              p={0}
              // m={0}
              justifyContent="center"
            >
              {data.name}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
          </Flex>

          {/* <Flex justifyContent="space-between" alignContent="center" border={"3px solid blue"}>
            <Rating rating={data.rating} numReviews={data.numReviews}/>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex> */}

          <Flex fontSize="sm" color={useColorModeValue('gray.800', 'white')}
           justify="center">
                <Box as="span" color={'gray.600'} fontSize="sm">
                MRP: ₹
                </Box>
                <Box  fontWeight= 'bold'>

                {Number(data.price)}
                </Box>
          </Flex>
          <Flex h="40px">
            <Box border="1px solid #e62e77" w="50%" h="40px">hi</Box>
            <Box border="1px solid #e62e77" bg="#e62e77" color="white" w="50%" h="40px" pt="1">Add to Bag</Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
