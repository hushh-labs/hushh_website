import React from "react";
import { GridItem, VStack, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ icon, title, description, alignItems, additionalProps  }) => {
  return (
    <GridItem width={{ base: "100%", md: "100%" }} px={{base:'1rem'}} >
      <VStack display={'flex'} alignItems={{ md: alignItems || 'flex-start', base:'center'}} gap={'1rem'} {...additionalProps}>
        {icon}
        <Heading textAlign={{base:'center'}} fontSize={{ md:'1.5rem', base:'1rem'}} fontWeight={700} color={'white'}>{title}</Heading>
        <Text textAlign={{base:'center'}} fontWeight={500} lineHeight={{ md:'25px', base:'15px'}} color={'#ABABAB'} fontSize={{ md:'1rem', base:'0.75rem'}}>{description}</Text>
      </VStack>
    </GridItem>
  );
};

export { ServiceCard };
