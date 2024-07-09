"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  border,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import OutBoundServiceImg from "../_components/svg/outBoundService/outboundServiceImg.svg";
import { ServiceCard } from "../_components/primitives/serviceCard";
import PaperPlane from "../_components/svg/conciergeApp/paperPlanImage.svg";
import { FiFlag } from "react-icons/fi";
import ChartIcon from "../_components/svg/outBoundService/chartLogoIcon.svg";
import ConsultationIcon from "../_components/svg/outBoundService/consultationIcon.svg";
import DualDirection from "../_components/svg/outBoundService/dualDirection.svg";
import FeedbackIcon from "../_components/svg/outBoundService/feedbackoundIcon.svg";
import ContactForm from "../_components/features/contactForm";
import One from "../_components/svg/outBoundService/one.svg";
import Two from "../_components/svg/outBoundService/two.svg";
import Three from "../_components/svg/outBoundService/three.svg";
import Four from "../_components/svg/outBoundService/four.svg";
import TrustedAIIcon from "../_components/svg/trustedAI";
import ControlOver from "../_components/svg/controlOver";
import TechIntegrationIcon from "../_components/svg/techIntegration";
import RedifiningIcon from "../_components/svg/redifiningIcon";
import TransparentSecureIcon from "../_components/svg/tranparentSecure";
import Manish from "../../../public/Images/manish.png";
import Justin from "../../../public/Images/justin.png";
import TwitterIcon from "../_components/svg/icons/twitterIcon.svg";
import SkypeIcon from "../_components/svg/icons/skypeIcon.svg";
import LinkedInIcon from "../_components/svg/icons/linkedinIcon.svg";
import { useRouter } from "next/navigation";
import Shadow from "../_components/svg/outBoundService/shadowOutBound.svg";
import { useMediaQuery } from 'react-responsive'

const OutBoundService = () => {
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const scrollToStart = () => {
    window.scrollTo({
      top: document.getElementById("howItworks").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box
        maxW={"100"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box
          alignItems={"center"}
          w={"100%"}
          gap={{ md: "2rem", base: "1rem" }}
          display={"flex"}
          flexDirection={"column"}
          mt={{ base: "3rem" }}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "90.28px", base: "48px" }}
            textAlign={"center"}
            fontSize={{ md: "4.625rem", base: "2rem" }}
            pt={{ md: "10rem", base: "3rem" }}
            className="gradient"
            px={{ base: "0.5rem", md: "6rem" }}
            mb={{ base: "0.5rem" }}
            as={"h1"}
          >
            Maximize Your Reach With Our Outbound Services
          </Heading>
          <Text
            // px={{ md: "17.8rem" }}
            // mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            fontWeight={"400"}
            color={"#FFFFFF"}
            letterSpacing={"-0.4px"}
            lineHeight={{ md: "30px", base: "18px" }}
            fontSize={{ md: "1.25rem", base: "0.75rem" }}
          >
            Professional and Efficient Solutions for Your Business Needs
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "16rem", base: "10rem" }}
            color={"white"}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            letterSpacing={{ md: "0.29rem", base: "0.145rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              border: "none",
            }}
            onClick={scrollToStart}
          >
            GET STARTED
          </Button>
        </Box>

        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          gap={{ md: "3rem", base: "0.5rem" }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={1}
            gap={{ md: "2rem", base: "1rem" }}
          >
            <Image src={OutBoundServiceImg} alt="OutBoundServiceImg" layout="responsive" />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={{ md: "1rem", base: "1rem" }}
            flex={1}
          >
            <Text
              className="new-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={{ md: "1rem", base: "0.75rem" }}
              fontWeight={"600"}
              fontSize={"1rem"}
              mt={{ base: "1rem" }}
            >
              WHAT ARE
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"500"}
              lineHeight={{ md: "63.3px", base: "31.2px" }}
            >
              Outbound Services?
            </Text>
            <Box
              fontSize={{ md: "1rem", base: "0.75rem" }}
              display={"flex"}
              flexDirection={"column"}
              fontWeight={"500"}
              lineHeight={{ md: "36px", base: "24px" }}
              color={"#ABABAB"}
              gap={"1rem"}
            >
              <Text fontSize={{ md: "1rem", base: "0.75rem" }}>
                Outbound services involve proactively reaching out to potential
                and existing customers through various channels to promote
                products, gather feedback, and generate leads. Our team
                specializes in providing tailored outbound solutions that align
                with your business goals.
              </Text>
            </Box>
          </Box>
        </HStack>

        <HStack
          mt={{ md: "6rem", base: "3rem" }}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          gap={{ md: "2rem", base: "1rem" }}
        >
          <Text
            className="gradient"
            fontSize={{ md: "4.6rem", base: "2rem" }}
            display={{ md: "flex", base: "none" }}
            fontWeight={"700"}
            lineHeight={{ md: "90px", base: "45px" }}
          >
            Expand Your Business with Our Comprehensive Outbound Solutions
          </Text>
          <Text
            className="gradient"
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
            display={{ md: "none", base: "flex" }}
            fontWeight={400}
          >
            Here's how Hushh elevates your experience
          </Text>
        </HStack>

        <Box
          display={"flex"}
          pt={{ md: "2rem" }}
          justifyContent={"center"}
          flexDir={{ base: "column", md: "row" }} // Stack the elements vertically on base, and horizontally on md
          minW={{ md: "100%", base: "100%" }}
          position={"relative"}
          mt={{ md: "2rem", basse: "0.5rem" }}
        >
          <Grid
            position={"relative"}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 5 }}
            flexWrap="wrap"
            px={{ md: "5rem", base: "0rem" }}
          >
            <ServiceCard
              icon={<TrustedAIIcon />}
              alignItems={""}
              onClick={"#"}
              title="Telemarketing​"
              textAlign={"left"}
              description="Share your curated data cards with businesses you choose, enabling them to offer personalized experiences and recommendations tailored to your unique preferences.​"
            />
            <ServiceCard
              icon={<TechIntegrationIcon />}
              alignItems={""}
              onClick={"#"}
              title="Cold Calling​​​"
              textAlign={"left"}
              description="Earn rewards for the valuable information you contribute, be it discounts, exclusive offers, or early access to products.​​"
            />
            <ServiceCard
              icon={<ControlOver />}
              alignItems={""}
              onClick={"#"}
              title="Email Outreach​"
              textAlign={"left"}
              description="You can sell your data directly to brands and agencies, receiving fair compensation for its value."
            />
            <ServiceCard
              icon={<RedifiningIcon />}
              title="SMS Campaigns​​​"
              onClick={"#"}
              alignItems={""}
              textAlign={"left"}
              description="Hushh prioritizes your privacy and control. You have full transparency over who has access to your data and what they can see. You can easily revoke access or modify your data cards at any time.​​"
            />

            <Box
              className="gradient-bg serviceBox"
              minW={"20rem"}
              display={{ md: "flex", base: "none" }}
              borderLeftRadius={"10px"}
              flexDirection={"row"}
              // position={"absolute"}

              bottom={0}
              // top={"60%"}
              h={"100%"}
              alignSelf={"flex-start"}
              flex={1.5}
              right={0}
              gap={{ md: "5rem" }}
            >
              <Box
                p={{ md: "2rem", base: "0.75rem" }}
                display={"flex"}
                flex={1.5}
                flexDirection={"column"}
                gap={{ md: "2rem" }}
              >
                <Text
                  mb={{ md: "1rem", base: "0.5rem" }}
                  color={"#FFFFFF"}
                  fontSize={{ md: "2rem", base: "1rem" }}
                  lineHeight={{ md: "46.5px", base: "25px" }}
                  fontWeight={"600"}
                >
                  We growing up your business with personal AI manager.
                </Text>
                <Button
                  w={{ md: "14rem", base: "10rem" }}
                  bg={"transparent"}
                  borderRadius={"65px"}
                  fontWeight={"400"}
                  zIndex={"2"}
                  color={"white"}
                  letterSpacing={"0.364rem"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={{ md: "28.8px", base: "20px" }}
                  border={"1px solid"}
                  _hover={{
                    border: "none",
                    color: "black",
                    bg: "#FFFFFF",
                  }}
                >
                  Get Started
                </Button>
              </Box>
              <Box display={"flex"} flex={0.75}>
                <Image
                  src={PaperPlane}
                  alt="PaperPlane"
                  title="Out Bound Service"
                  layout="responsive"
                />
              </Box>
            </Box>
          </Grid>
        </Box>

        <VStack
          px={{ md: "5rem", base: "1.25rem" }}
          py={{ md: "8rem", base: "3rem" }}
          className="howItworks"
          id="howItworks"
        >
          <Text
            className="hushh-gradient"
            fontWeight={"600"}
            fontSize={{ md: "1rem", base: "0.5rem" }}
            lineHeight={{md:"16px"}}
            letterSpacing={"0.255rem"}
          >
            CORE VALUE COMPANY
          </Text>
          <Text
            className="gradient"
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={{ md: "3.75rem", base: "1.75rem" }}
            lineHeight={{ md: "90px", base: "28.3px" }}
          >
            How It Works
          </Text>
          <Text
            color={"#E5E5E5"}
            fontWeight={"400"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            lineHeight={{ md: "28px", base: "20px" }}
          >
            Building a world where data works for you, not against you.
          </Text>
          <Container
            mt={{ md: "3rem", base: "1.25rem" }}
            minW={"100%"}
            display={"grid"}
            gridColumn={{ md: "1", base: "2" }}
            gridRow={{ md: "4", base: "2" }}
          >
            <Grid
              position={"relative"}
              minW={"100%"}
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ md: 10, base: 5 }}
              flexWrap="wrap"
              // px={{ md: "2rem", base: "0rem" }}
            >
              {/* <Box> */}

              {/* <Image src={One} alt="one" title="step one" style={{position:'absolute',top:'0',zIndex:'3', width:'5rem', height:'full'}} />   */}
              <Box
                bg={"#1C1C1C"}
                p={{ md: "1rem", base: "0.5rem" }}
                borderRadius={"31.02px"}
                display={"flex"}
                flexDirection={"column"}
                gap={{ md: "1rem", base: "0.5rem" }}
              >
                <Image
                  src={ConsultationIcon}
                  alt="ConsultationIcon"
                  title="ConsultationIcon"
                  // layout="responsive"
                />
                <Text
                  fontWeight={"700"}
                  color={"#FFFFFF"}
                  fontSize={{ md: "1.15rem", base: "0.8rem" }}
                  lineHeight={{ md: "24.2px", base: "16px" }}
                >
                  CONSULTATION AND STRATEGY DEVELOPEMENT
                </Text>
                <Text
                  fontWeight={"500"}
                  color={"#ABABAB"}
                  fontSize={{ md: "1rem", base: "0.6rem" }}
                  lineHeight={{ md: "36px", base: "20px" }}
                >
                  We understand your business goals and develop a tailored
                  outbound strategy.
                </Text>
              </Box>
              {/* </Box> */}

              <Box
                bg={"#1C1C1C"}
                p={{ md: "1rem", base: "0.5rem" }}
                borderRadius={"31.02px"}
                display={"flex"}
                flexDirection={"column"}
                gap={{ md: "1rem", base: "0.5rem" }}
              >
                <Image
                  src={DualDirection}
                  alt="DualDirection"
                  title="DualDirection"
                  // layout="responsive"
                />
                <Text
                  fontWeight={"700"}
                  color={"#FFFFFF"}
                  fontSize={{ md: "1.15rem", base: "0.8rem" }}
                  lineHeight={{ md: "24.2px", base: "16px" }}
                >
                  IMPLEMENTATION OF OUTBOUND CAMPIAGNS
                </Text>
                <Text
                  fontWeight={"500"}
                  color={"#ABABAB"}
                  fontSize={{ md: "1rem", base: "0.6rem" }}
                  lineHeight={{ md: "36px", base: "20px" }}
                >
                  We execute campaigns across various channels, ensuring
                  consistent messaging and effective outreach.
                </Text>
              </Box>
              <Box
                bg={"#1C1C1C"}
                p={{ md: "1rem", base: "0.5rem" }}
                borderRadius={"31.02px"}
                display={"flex"}
                flexDirection={"column"}
                gap={{ md: "1rem", base: "0.5rem" }}
              >
                <Image src={ChartIcon} alt="ChartIcon" title="ChartIcon" />
                <Text
                  fontWeight={"700"}
                  color={"#FFFFFF"}
                  fontSize={{ md: "1.15rem", base: "0.8rem" }}
                  lineHeight={{ md: "24.2px", base: "16px" }}
                >
                  MONITORING AND OPTIMIZATION
                </Text>
                <Text
                  fontWeight={"500"}
                  color={"#ABABAB"}
                  fontSize={{ md: "1rem", base: "0.6rem" }}
                  lineHeight={{ md: "36px", base: "20px" }}
                >
                  We continuously monitor performance and make adjustments to
                  optimize results.
                </Text>
              </Box>
              <Box
                bg={"#1C1C1C"}
                p={{ md: "1rem", base: "0.5rem" }}
                borderRadius={"31.02px"}
                display={"flex"}
                flexDirection={"column"}
                gap={{ md: "1rem", base: "0.5rem" }}
              >
                <Image
                  src={FeedbackIcon}
                  alt="FeedbackIcon"
                  title="FeedbackIcon"
                />
                <Text
                  fontWeight={"700"}
                  color={"#FFFFFF"}
                  fontSize={{ md: "1.15rem", base: "0.8rem" }}
                  lineHeight={{ md: "24.2px", base: "16px" }}
                >
                  REPORTING AND FEEDBACK
                </Text>
                <Text
                  fontWeight={"500"}
                  color={"#ABABAB"}
                  fontSize={{ md: "1rem", base: "0.6rem" }}
                  lineHeight={{ md: "36px", base: "20px" }}
                >
                  We provide detailed reports and gather feedback to measure
                  success and identify areas for improvement.
                </Text>
              </Box>
            </Grid>
          </Container>
        </VStack>

        <Box position={"relative"} minW={'100%'}>
        <Image
            style={{ position: "absolute", zIndex:"-1", left: "-600px",top:'100px', width:'100%' }}
            src={Shadow}
            alt="shadow"
          />
          <VStack
            px={{ md: "3.5rem", base: "1.15rem" }}
            py={{ md: "6rem", base: "2rem" }}
          >
            <Text
              className="hushh-gradient"
              fontWeight={"600"}
              fontSize={{ md: "1rem", base: "0.5rem" }}
              lineHeight={"16px"}
              letterSpacing={"0.255rem"}
            >
              MEET THE FOUNDERS
            </Text>
            <Text
              className="gradient"
              textAlign={"center"}
              fontWeight={"400"}
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              lineHeight={{ base: "40px", md: "63.3px" }}
            >
              Ready to Boost Your Business?
            </Text>
            <Text
              color={"#E5E5E5"}
              fontWeight={"400"}
              fontSize={{ md: "1rem", base: "0.75rem" }}
              lineHeight={{ md: "28px", base: "20px" }}
            >
              Building a world where data works for you, not against you.
            </Text>
          </VStack>
          
          <Stack
            gap={{ md: "3rem" }}
            px={{ md: "5rem", base: "1.15rem" }}
            display={"flex"}
            w={"100%"}
            flexDirection={{ md: "row", base: "column" }}
          >
            <Box w={'100%'} h={'100%'} display={{md:'block',base:'none'}} >
               <Image alt="manish" src={Manish} title="manish sainani"  width={'355'} height={'489'}/>
            </Box>
            <Box w={'100%'} h={'100%'} display={{md:'none',base:'flex'}}>
               <Image alt="manish" src={Manish} title="manish sainani"  width={'200'} height={'220'}/>
            </Box>
            <VStack
              gap={{ md: "1rem", base: "1rem" }}
              textAlign={"left"}
              alignItems={"flex-start"}
            >
              <Text
                fontWeight={"700"}
                lineHeight={{ md: "32.13px", base: "20px" }}
                fontSize={{ md: "1.67rem", base: "1.15rem" }}
                color={"white"}
                mt={{base:'1rem'}}
              >
                Manish Sainani
              </Text>
              <Text
                fontWeight={"400"}
                lineHeight={{ md: "21.42px", base: "14px" }}
                fontSize={{ md: "1.1rem", base: "0.75rem" }}
                color={"white"}
              >
                Executive Director
              </Text>
              <Text
                fontWeight={"500"}
                fontSize={{ md: "1rem", base: "0.75rem" }}
                lineHeight={{ md: "45px", base: "20px" }}
                color={"#ABABAB"}
              >
                I’m passionate about building products and teams with delightful
                experiences bringing human, AI & design to life. My focus lately
                has been democratizing userdata & scaling developer experience &
                productivity with AI such as Recommendation systems, LLMs across
                our developer, human and userid ecosystems.Nov 2021 Onwards:
                Product Dir in Google - Developer, x-Google Engineering,
                Languages, Tooling and SDKs and Hybrid GoogleOS w/ GCP)
              </Text>
              <Text
                fontWeight={"500"}
                fontSize={{ md: "1rem", base: "0.75rem" }}
                lineHeight={{ md: "45px", base: "20px" }}
                color={"#ABABAB"}
              >
                Portfolio with customers xGoogle, with a team of ~30 PMs & 5k+
                engineering team supporting Google Cloud, Ads, Search, Cloud,
                Geo, Bets, DeepMind and Core as primary GTM customers for Core
                and TI/Cloud. Reported to SVP/Google Fellow, Core & xGE (Luiz
                André Barasso) and later to VP, Core Developer (Asim Husain).
              </Text>
              <HStack display={"flex"} gap={{ md: "2rem", base: "0.5rem" }}>
                <Button
                  backgroundColor={"#0565FF"}
                  color={"white"}
                  borderRadius={"4px"}
                  cursor={'pointer'}
                  padding={{md:"5px 20px 5px 20px",base:"5px 10px 5px 10px"}}
                  fontSize={{md:'1rem',base:'0.75rem'}}
                  _hover={{
                    color: "white",
                    bg: "linear-gradient(265.3deg, #e54d60 8.81%, #a342ff 94.26%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://calendly.com/hushh/advisory-meet-with-our-leadership-team",
                      "_blank"
                    )
                  }
                >
                  Book a call with Manish
                </Button>
                <Image
                  src={SkypeIcon}
                  alt="SkypeIcon"
                  title="manish Skype"
                  style={{cursor:'pointer'}}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/manishsainani/",
                      "_blank"
                    )
                  }
                />
                <Image
                  src={TwitterIcon}
                  alt="TwitterIcon"
                  title="manish twitter"
                  style={{cursor:'pointer'}}
                  onClick={() =>
                    window.open("https://x.com/manishsainani", "_blank")
                  }
                />
                <Image
                  src={LinkedInIcon}
                  alt="LinkedInIcon"
                  title="Manish LinkedIn"
                  style={{cursor:'pointer'}}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/manishsainani/",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
          </Stack>
        <Box w={'100%'} py={{base:'2rem'}} alignItems={'center'} display={{base:'flex',md:'none'}} px={{base:'1.75rem'}}>
           <Divider w={'100%'} />
        </Box>  
        
          <Stack
            w={"100%"}
            py={{ md: "5rem", base: "2rem" }}
            gap={{ md: "3rem" }}
            px={{ md: "5rem", base: "1.15rem" }}
            display={"flex"}
            flexDirection={{ md: "row", base: "column-reverse" }}
            position={'relative'}
          >
            
            <VStack
              gap={{ md: "1rem", base: "0.5rem" }}
              textAlign={{md:"right",base:'left'}}
              alignItems={{md:"flex-end",base:'flex-start'}}
            >
              <Text
                fontWeight={"700"}
                lineHeight={{ md: "32.13px", base: "20px" }}
                fontSize={{ md: "1.67rem", base: "1rem" }}
                color={"white"}
                mt={{base:'1rem'}}
              >
                Justin Donaldson
              </Text>
              <Text
                fontWeight={"400"}
                lineHeight={{ md: "21.42px", base: "14px" }}
                fontSize={{ md: "1.1rem", base: "0.75rem" }}
                color={"white"}
              >
                Co-founder and Chief Data Scientist
              </Text>
              <Text
                fontWeight={"500"}
                fontSize={{ md: "1rem", base: "0.75rem" }}
                lineHeight={{ md: "45px", base: "20px" }}
                color={"#ABABAB"}
              >
                I’m passionate about building products and teams with delightful
                experiences bringing human, AI & design to life. My focus lately
                has been democratizing userdata & scaling developer experience &
                productivity with AI such as Recommendation systems, LLMs across
                our developer, human and userid ecosystems.Nov 2021 Onwards:
                Product Dir in Google - Developer, x-Google Engineering,
                Languages, Tooling and SDKs and Hybrid GoogleOS w/ GCP)
              </Text>
              <Text
                fontWeight={"500"}
                fontSize={{ md: "1rem", base: "0.75rem" }}
                lineHeight={{ md: "45px", base: "20px" }}
                color={"#ABABAB"}
              >
                Portfolio with customers xGoogle, with a team of ~30 PMs & 5k+
                engineering team supporting Google Cloud, Ads, Search, Cloud,
                Geo, Bets, DeepMind and Core as primary GTM customers for Core
                and TI/Cloud. Reported to SVP/Google Fellow, Core & xGE (Luiz
                André Barasso) and later to VP, Core Developer (Asim Husain).
              </Text>
              <HStack display={"flex"} gap={{ md: "2rem", base: "0.5rem" }}>
                <Button
                  zIndex={"44444"}
                  backgroundColor={"#0565FF"}
                  color={"white"}
                  cursor={'pointer'}
                  borderRadius={"4px"}
                  fontSize={{md:'1rem',base:'0.75rem'}}
                  padding={{md:"5px 20px 5px 20px",base:"5px 10px 5px 10px"}}
                  _hover={{
                    color: "white",
                    bg: "linear-gradient(265.3deg, #e54d60 8.81%, #a342ff 94.26%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://cal.com/jdonaldson/30min",
                      "_blank"
                    )
                  }
                >
                  Book a call with Justin
                </Button>
                <Image
                  src={SkypeIcon}
                  alt="SkypeIcon"
                  title="manish Skype"
                  style={{cursor:'pointer'}}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/jjustindonaldson/",
                      "_blank"
                    )
                  }
                />
                <Image
                  src={TwitterIcon}
                  alt="TwitterIcon"
                  style={{cursor:'pointer'}}
                  title="manish twitter"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/jjustindonaldson/",
                      "_blank"
                    )
                  }
                />
                <Image
                  src={LinkedInIcon}
                  alt="LinkedInIcon"
                  style={{cursor:'pointer'}}
                  title="Manish LinkedIn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/jjustindonaldson/",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
            <Box w={'100%'} h={'100%'} display={{md:'block',base:'none'}} >
               <Image alt="Justin" src={Justin} title="Justin Donaldson"  width={'355'} height={'489'}/>
            </Box>
            <Box w={'100%'} h={'100%'} display={{md:'none',base:'flex'}}>
               <Image alt="Justin" src={Justin} title="Justin Donaldson"  width={'200'} height={'220'}/>
            </Box>
          </Stack>
          <Image
            style={{ position: "absolute", zIndex:"-1", right: "0px",overflow:'hidden',top:'900px', width:'100%' }}
            src={Shadow}
            alt="shadow"
          />
        </Box>
      </Box>
      <ContactForm />
    </>
  );
};

export default OutBoundService;
