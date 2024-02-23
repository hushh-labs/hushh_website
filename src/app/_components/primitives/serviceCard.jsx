import React from "react";
import { GridItem, VStack, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <GridItem width={{ base: "48%", md: "100%" }} >
      <VStack display={'flex'} alignItems={'flex-start'} gap={'1rem'}>
        {icon}
        <Heading fontSize='1.5rem' fontWeight={700} color={'white'}>{title}</Heading>
        <Text color={'#ABABAB'}>{description}</Text>
      </VStack>
    </GridItem>
  );
};

export { ServiceCard };
