import React from "react";
import { Container, Grid, HStack, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { ServiceCard } from "../primitives/serviceCard";
import TrustedAIIcon from "../svg/trustedAI";
import ControlOver from "../svg/controlOver";
import TechIntegrationIcon from "../svg/techIntegration";
import RedifiningIcon from "../svg/redifiningIcon";
import TransparentSecureIcon from "../svg/tranparentSecure";
import extendedTheme from "../../theme";

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
          className="gradient"
          fontSize={{ md:"3.75rem", base:'1.5rem'}}
          display={"flex"}
        >
          Our Technology Services
        </Heading>
        <Text
          color={extendedTheme.colors.secondary}
          fontWeight={"500"}
          fontSize={"1rem"}
          lineHeight={{ md:"2.25rem", base:'1.5rem'}}
          px={{ md:"20rem", base:'1rem' }}
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
            title="Redefining Personal Data Assistance​"
            textAlign={'left'}
            description="Leverage AI assistants that understand your data and provide personalized support – for information retrieval, streamline work, and more​"
          />
          <ServiceCard
            icon={<TechIntegrationIcon />}
            title="Seamless Tech Integrationn​​​"
            textAlign={'left'}
            description="Our platform seamlessly integrates with your existing tools to streamline your operations​​"
          />
          <ServiceCard
            icon={<ControlOver />}
            title="Control & Security​"
            textAlign={'left'}
            description="Built with trust in mind, our platform is SOC 2 and GDPR compliant, ensuring the security and privacy of your data"
          />
          {/* <ServiceCard
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
          /> */}
        </Grid>
      </Container>
    </>
  );
};

export default TechnologySection;
