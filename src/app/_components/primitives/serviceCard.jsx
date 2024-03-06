import React from "react";
import { GridItem, VStack, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ icon, title, description, alignItems, additionalProps , textAlign , onClick}) => {
  return (
    <GridItem cursor={'pointer'} onClick={onClick} width={{ base: "100%", md: "100%" }} px={{base:'1rem'}} >
      <VStack display={'flex'} alignItems={{ md: alignItems || 'flex-start', base:'center'}} gap={'1rem'} {...additionalProps}>
        {icon}
        <Heading textAlign={{base:'center', md:'left'}} fontSize={{ md:'1.5rem', base:'1rem'}} fontWeight={700} color={'white'}>{title}</Heading>
        <Text textAlign={textAlign || { md: 'left', base: 'center' }} fontWeight={500} lineHeight={{ md: '25px', base: '15px' }} color={'#ABABAB'} fontSize={{ md: '1rem', base: '0.75rem' }}>{description}</Text>
      </VStack>
    </GridItem>
  );
};

export { ServiceCard };
