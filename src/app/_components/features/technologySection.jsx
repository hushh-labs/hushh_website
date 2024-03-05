import React from "react";
import { Container, Grid, HStack, Text } from "@chakra-ui/react";
import theme from "@/app/theme";
import { Heading } from "@chakra-ui/react";
import { ServiceCard } from "../primitives/serviceCard";
import TrustedAIIcon from "../svg/trustedAI";
import ControlOver from "../svg/controlOver";
import TechIntegrationIcon from "../svg/techIntegration";
import RedifiningIcon from "../svg/redifiningIcon";
import TransparentSecureIcon from "../svg/tranparentSecure";

const TechnologySection = () => {
  return (
    <>
      <HStack
        mt={{md:"8rem", base:"5rem"}}
        w={"100%"}
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
          px={{ md:"20rem" }}
        >
          Our technology services deliver cutting-edge solutions tailored to
          drive efficiency, enhance performance, and fuel growth in today's
          digital landscape.
        </Text>
      </HStack>

      <Container display={'flex'} pt={{md:'2rem'}} px={{md:'10rem'}} justifyContent={"center"} minW={{ md:'100%', base:'100%' }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ md:10 , base:10}}
          flexWrap="wrap"
        >
          <ServiceCard
            icon={<TrustedAIIcon />}
            title="Trusted AI Assistants​"
            textAlign={'left'}
            description="Hushh your data away into your secure private on-device cloud and let it work for you quietly in the background as you go about your day by handing all your preferences.​"
          />
          <ServiceCard
            icon={<TechIntegrationIcon />}
            title="Tech Integration​​​"
            textAlign={'left'}
            description="Provides products, tools, and services for effortless data organization, management, and monetization across all your ecosystems.​​"
          />
          <ServiceCard
            icon={<ControlOver />}
            title="Control Over Your Data.​"
            textAlign={'left'}
            description="Our platform provides products, tools, and services for effortless data organization, management, and monetization."
          />
          <ServiceCard
            icon={<RedifiningIcon />}
            title="Redefining Personal Data Assistance​"
            textAlign={'left'}
            description="Hushh revolutionize data privacy and giving user control and offering an alternative."
          />
          <ServiceCard
            icon={<TransparentSecureIcon />}
            title="Transparent & Secure​"
            textAlign={'left'}
            description="Unlock values from your personal data with Secure platform for sharing data with trusted partners."
          />
        </Grid>
      </Container>
    </>
  );
};

export default TechnologySection;
