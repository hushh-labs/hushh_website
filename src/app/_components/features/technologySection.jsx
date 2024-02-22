import React from "react";
import { Container, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import theme from "@/app/theme";
import { Heading } from "@chakra-ui/react";
import TrustedAIIcon from "../svg/trustedAI";
import ControlOver from "../svg/controlOver";
import TechIntegrationIcon from "../svg/techIntegration";
import RedifiningIcon from "../svg/redifiningIcon";
import TransparentSecureIcon from "../svg/tranparentSecure";

const TechnologySection = () => {
  return (
    <>
      <HStack
        mt={"15rem"}
        w={"full"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
      >
        <Heading
          as={"h1"}
          className="gradient"
          fontSize={"3.75rem"}
          display={"flex"}
        >
          Our Technology Services
        </Heading>
        <Text
          color={theme.colors.secondary}
          fontWeight={"500"}
          fontSize={"1rem"}
          lineHeight={"2.25rem"}
          px={"20rem"}
        >
          Our technology services deliver cutting-edge solutions tailored to
          drive efficiency, enhance performance, and fuel growth in today's
          digital landscape.
        </Text>
      </HStack>
      <Container display={'flex'} justifyContent={"center"}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={40}
          flexWrap="wrap"
        >
          <GridItem width={{ base: "100%", md: "48%" }}>
            <VStack display={'flex'} alignItems={'flex-start'}>
              <TrustedAIIcon />
              <Heading fontSize='1.5rem' fontWeight={700} color={theme.colors.white}>Trusted AI Assistants​</Heading>
              <Text color={'#ABABAB'}>Hushh your data away into your secure private on-device cloud and let it work for you quietly in the background as you go about your day by handing all your preferences.​</Text>
            </VStack>
          </GridItem>
          <GridItem width={{ base: "100%", md: "48%" }}>
            <VStack display={'flex'} alignItems={'flex-start'}>
              <TechIntegrationIcon />
              <Heading fontSize='1.5rem' color={theme.colors.white}>Tech Integration​​​</Heading>
              <Text color={'#ABABAB'}>Provides products, tools, and services for effortless data organization, management, and monetization across all your ecosystems.​​</Text>
            </VStack>
          </GridItem>
          <GridItem width={{ base: "100%", md: "48%" }}>
            <VStack display={'flex'} alignItems={'flex-start'}>
              <ControlOver />
              <Heading fontSize='1.5rem'   color={theme.colors.white}>Control Over Your Data.​</Heading>
              <Text color={'#ABABAB'}>Our platform provides products, tools, and services for effortless data organization, management, and monetization.</Text>
            </VStack>
          </GridItem>
          <GridItem width={{ base: "100%", md: "48%" }}>
            <VStack display={'flex'} alignItems={'flex-start'}>
              <RedifiningIcon />
              <Heading fontSize='1.5rem' color={theme.colors.white}>Redefining Personal Data Assistance​</Heading>
              <Text color={'#ABABAB'}>Hushh revolutionize data privacy and giving user control and offering an alternative.</Text>
            </VStack>
          </GridItem>
          <GridItem width={{ base: "100%", md: "48%" }}>
            <VStack display={'flex'} alignItems={'flex-start'}>
              <TransparentSecureIcon />
              <Heading fontSize='1.5rem' color={theme.colors.white}>Transparent & Secure​</Heading>
              <Text color={'#ABABAB'}>Unlock values from your personal data with Secure platform for sharing data with trusted partners.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default TechnologySection;
