import React from "react";
import { GridItem, VStack, Heading, Text } from "@chakra-ui/react";

const ServiceCard = ({ icon, title, description, alignItems, additionalProps  }) => {
  return (
    <GridItem width={{ base: "48%", md: "100%" }} >
      <VStack display={'flex'} alignItems={alignItems || 'flex-start'} gap={'1rem'} {...additionalProps}>
        {icon}
        <Heading fontSize='1.5rem' fontWeight={700} color={'white'}>{title}</Heading>
        <Text fontWeight={500} lineHeight={'25px'} color={'#ABABAB'} fontSize={'1rem'}>{description}</Text>
      </VStack>
    </GridItem>
  );
};

export { ServiceCard };
