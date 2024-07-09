"use client";
import "../globals.css";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BrandSlider } from "../_components/features/brandSlider";
import BrandWalletSection from "../_components/features/brandWalletSection";
import ConceirgeApp from "../_components/svg/conciergeApp";
import VibeSearchApi from "../_components/svg/vibeSearchApi";
import ValetChat from "../_components/svg/valetChat";
import ChromeExtentionLogo from "../_components/svg/ChromeExtensionLogo";
import FendiCard from "../../../public/Images/Fendi.png";
import HushhButtonIcon from "../_components/svg/hushhButton";
import HushhWalletIcon from "../_components/svg/hushhWalletIcon";
import KeyIcon from "../_components/svg/keyIcon";
import LockIcon from "../_components/svg/LockIcon";
import LouisVuitton from "../../../public/Images/LouisVuitton.png";
import { useState, useEffect } from "react";
import React from "react";
import SephoraCard from "../../../public/Images/Sephora.png";
import { ServiceCard } from "../_components/primitives/serviceCard";
import ShieldIcon from "../_components/svg/ShieldIcon";
import TechnologySection from "../_components/features/technologySection";
import VibeSearchIcon from "../_components/svg/vibeSearch";
import extendedTheme from "../theme";
import theme from "../theme";
import { useRouter } from "next/navigation";
import HushhCoinUiBox from "../_components/features/hushhCoinUiBox";
import ContactForm from "../_components/features/contactForm";
import NotificationPopup from "../_components/features/popupNotification";
import ReviewSlider from "../_components/features/reviewSlider";
import HfsLogo from "../_components/svg/hfsLogo";
import HomeBg from "../_components/svg/homeBG.svg";
import Image from "next/image";
import Head from "next/head";
import HomeBanner from "../_components/svg/homepageBanner.svg";
import PinkShadow from "../_components/svg/pinkShadow1.svg";
import CircleHomeBg from "../_components/svg/circleHomeBg.svg";
import RightCircleEclipse from "../_components/svg/rightCircleEclipse.svg";
import ApiVibeSearch from "../_components/svg/apiVibeSearch";
import { HushhBlogsHome } from "../_components/HushhBlogsHome";

const ClientHome = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <title>Hushh - Home</title>
        <meta name="title" content="HUSHH - Home" />
        <meta
          name="description"
          content="Intelligence as a service powered by your Data"
        />
        <meta
          name="keywords"
          content="Data API Business, Data Autonomy, Data Equity, Consent-Driven Excellence, Technology For Everyone, Hushh Wallet App, Hushh Button, Vibe Search, Browser Companion, Concierge App, Valet Chat, Vibe Search API, Hushh For Students, Brand Wallet, Receipt Radar, Future of Digital Identity & Personalised Experiences, Gen AI, GenAI "
        />
      </Head>

      <div className="relative">
        <Image
          src={PinkShadow}
          alt="PinkShadow"
          // objectFit="cover"
          // className="z-0 w-full"
          placeholder="blur"
          //  priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANII="
        />
        <main className="bg-myBG  font-Figtree">
          <div className="absolute top-0 w-full">
            {showPopup && (
              <NotificationPopup message="Welcome! How can I help you today?" />
            )}
            <Box
              display={"flex"}
              flexDirection={"row"}
              px={{ base: "0.5rem", md: "32px" }}
            >
              <VStack
                align={"flex-start"}
                w={"full"}
                flex={1}
                pt={20}
                // mr={{ md: "60%", base: "10%" }}
                display={"flex"}
                gap={"1.5rem"}
                mt={{ md: "5rem", base: "1rem" }}
                ml={{ base: "1rem", md: "5.5rem" }}
              >
                <HStack>
                  <Heading
                    fontSize={{ md: "5rem", base: "2rem" }}
                    lineHeight={{ md: "5.5rem", base: "2.5rem" }}
                    fontWeight={"400"}
                    display={"flex"}
                    flexDirection={"column"}
                    className="text-headText"
                  >
                    Intelligence as a service powered by your{" "}
                    <div className="wrapper">
                      <div className="words">
                        <div className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                          Data
                        </div>
                        <div className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                          Social Media
                        </div>
                        <div className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                          Phone Data
                        </div>
                        <div className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                          Shopping History
                        </div>
                      </div>
                    </div>
                  </Heading>
                </HStack>

                <Text color={"#656565"} fontSize={"18px"}>
                  We're the Data API Business, helping you collect, manage, and
                  monetize data
                </Text>
                <Box
                  mt={{ md: "2rem", base: "1rem" }}
                  display={"flex"}
                  gap={{ md: "2rem", base: "1rem" }}
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Button
                    border={"3px solid #606060"}
                    borderRadius={"2px"}
                    color={theme.colors._white}
                    lineHeight={"28px"}
                    background={"transparent"}
                    px={"21px"}
                    py={"15px"}
                    fontSize={{ md: "1rem", base: "0.75rem" }}
                    fontWeight={"400"}
                    letterSpacing={{ md: "0.29rem", base: "0.1rem" }}
                    _hover={{
                      background:
                        "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                      border: "none",
                    }}
                    onClick={() =>
                      window.open(
                        "https://bit.ly/hushh-app-ios",
                        "_blank"
                      )
                    }
                    w={{ md: "16rem", base: "12rem" }}
                  >
                    DOWNLOAD THE APP
                  </Button>
                  <Button
                    border={"3px solid #606060"}
                    borderRadius={"2px"}
                    color={theme.colors._white}
                    lineHeight={"28px"}
                    fontSize={{ md: "1rem", base: "0.75rem" }}
                    px={"21px"}
                    py={"15px"}
                    background={"transparent"}
                    fontWeight={"400"}
                    letterSpacing={{ md: "0.29rem", base: "0.1rem" }}
                    _hover={{
                      background:
                        "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                      border: "none",
                    }}
                    onClick={() => router.push("/demoBookingPage")}
                    w={{ md: "16rem", base: "12rem" }}
                  >
                    SCHEDULE CALL
                  </Button>
                </Box>
              </VStack>
              <VStack
                display={{ md: "block", base: "none" }}
                position={"relative"}
                flex={1}
              >
                <Image
                  style={{ top: "-65px", position: "absolute" }}
                  src={HomeBanner}
                  alt="HomeBanner"
                />
                <Image
                  src={CircleHomeBg}
                  alt="CircleHomeBg"
                  style={{ bottom: "0px", position: "absolute" }}
                />
              </VStack>
              <VStack
                display={{ md: "none", base: "block" }}
                position={"relative"}
                flex={1}
              >
                {/* <Image style={{bottom:'0px', position:'absolute',zIndex:'1'}} src={HomeBanner} alt="HomeBanner" /> */}
                <Image
                  src={CircleHomeBg}
                  alt="CircleHomeBg"
                  style={{
                    bottom: "0px",
                    height: "2rem",
                    width: "2rem",
                    // zIndex: "0.9",
                  }}
                />
              </VStack>
            </Box>

            <HStack
              pt={{ md: "8rem", base: "6rem" }}
              justify={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text
                className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
                mb={{ md: "1.25rem" }}
                as={"h1"}
              >
                BRANDS WE WORK WITH
              </Text>
              <Text
                align={"center"}
                lineHeight={{ md: "63.3px", base: "2rem" }}
                pl={{ md: "12rem", base: "2rem" }}
                pr={{ md: "12rem", base: "2rem" }}
                color={theme.colors.secondary}
                fontWeight={"300"}
                fontSize={{ md: "3.75rem", base: "1rem" }}
              >
                Discover the brands that {"  "}
                <span
                  style={{ lineHeight: "63.3px" }}
                  className="trust-text bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text"
                >
                  trust us
                </span>{" "}
                to unlock the potential of their customer data
              </Text>
            </HStack>

            <BrandSlider />
            {/* From below box there is an issue arising of full width on the mobile screens */}
            <Box
              display="flex"
              h={"full"}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-start" }}
              pt={{ md: "10rem", base: "6rem" }}
              justifyContent="space-between"
              gap="8rem"
              px={{ md: "3rem" }}
            >
              {/* Left side box */}
              <Box
                position={"relative"}
                flex="1"
                bg={extendedTheme.colors._black}
                display={{ base: "none", md: "block" }}
              >
                <Image
                  src={LouisVuitton}
                  alt="Louis Vuitton"
                  width={350.62}
                  height={363.19}
                  style={{
                    // zIndex: "1",
                    position: "relative",
                    top: "25px",
                    left: "100px",
                  }}
                />
                <Image
                  style={{
                    position: "relative",
                    top: "-90.67px",
                    left: "319px",
                    // zIndex: "2",
                  }}
                  src={SephoraCard}
                  alt="Sephora Card"
                  width={420.62}
                  height={363.19}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "200.67px",
                    left: "100px",
                    // zIndex: "1",
                    rotate: "10.02",
                  }}
                  src={FendiCard}
                  alt="Fendi Card"
                  width={570.62}
                  height={363.19}
                />
              </Box>
              {/* Right side box */}
              <VStack
                alignItems={{ md: "left", base: "" }}
                mr={{ md: "2rem", base: "0" }}
                textAlign={{ md: "left", base: "center" }}
                flex="1"
              >
                <Text
                  className="color-gradient"
                  fontWeight={600}
                  letterSpacing={"0.25rem"}
                  fontSize={"1rem"}
                >
                  OUR ADVANTAGES
                </Text>

                <Text
                  className="gradient"
                  lineHeight={"63px"}
                  fontWeight={"400"}
                  alignItems={{ md: "left", base: "center" }}
                  textAlign={{ md: "left", base: "center" }}
                  fontSize={{ md: "3.75rem", base: "2.5rem" }}
                >
                  Why Us?
                </Text>
                <Text
                  px={{ base: "1rem", md: "0" }}
                  alignItems={{ base: "center" }}
                  pt={{ md: "1rem" }}
                  fontWeight={"500"}
                  color={extendedTheme.colors.secondary}
                >
                  Empower individuals with data control. Today, we're a
                  cutting-edge platform fostering trust, transparency, and
                  personalized experiences.
                </Text>

                <Box
                  mx={{ base: "0", md: "0" }} //from here that full width issue was arising
                  pt={{ md: "40px", base: "20px" }}
                  width={"100%"}
                  pr={{ base: "1.25rem" }}
                  justifyContent={{ base: "space-between" }}
                  display={"flex"}
                  gap={{ md: "4rem" }}
                >
                  <VStack
                    maxW={{ md: "290px" }}
                    textAlign={"left"}
                    alignItems={"left"}
                  >
                    <HStack gap={{ md: "2rem" }}>
                      <ShieldIcon />
                      <Text
                        fontWeight={"500"}
                        fontSize={"1rem"}
                        ml={{ base: "0.5rem" }}
                        // lineHeight={{base:'18px'}}
                        color={extendedTheme.colors.secondary}
                      >
                        Data <br></br> Autonomy
                      </Text>
                    </HStack>
                    <Divider
                      mt={"1rem"}
                      className="divider"
                      width={{ md: "12rem", base: "8rem" }}
                    />
                    <Text
                      fontWeight={"500"}
                      fontSize={{ base: "0.75rem" }}
                      lineHeight={{ md: "30px", base: "18px" }}
                      mt={{ md: "1.25rem", base: "0.75rem" }}
                      color={extendedTheme.colors.secondary}
                    >
                      Empower your customers with full control over their
                      personal data
                    </Text>
                  </VStack>

                  <VStack
                    maxW={{ md: "290px" }}
                    mt={"-0.68rem"}
                    textAlign={"left"}
                    alignItems={"left"}
                  >
                    <HStack gap={{ md: "2rem" }}>
                      <KeyIcon />
                      <Text
                        fontWeight={"500"}
                        fontSize={"1rem"}
                        ml={{ base: "0.5rem" }}
                        color={extendedTheme.colors.secondary}
                      >
                        Data <br></br> Equity
                      </Text>
                    </HStack>
                    <Divider
                      mt={"1rem"}
                      className="divider"
                      width={{ md: "12rem", base: "8rem" }}
                    />
                    <Text
                      fontWeight={"500"}
                      lineHeight={{ md: "30px", base: "18px" }}
                      fontSize={{ base: "0.75rem" }}
                      mt={{ md: "1.25rem", base: "0.75rem" }}
                      color={extendedTheme.colors.secondary}
                    >
                      Creating a fair and equitable environment for data
                      sharing.
                    </Text>
                  </VStack>
                </Box>
                <VStack
                  mx={{ base: "1rem" }}
                  pr={"1.25rem"}
                  alignContent={"left"}
                  mt={"1.5rem"}
                  textAlign={"left"}
                  alignItems={"left"}
                >
                  <HStack gap={"1rem"}>
                    <LockIcon />
                    <Text
                      fontWeight={"500"}
                      fontSize={"1rem"}
                      color={extendedTheme.colors.secondary}
                    >
                      Consent-Driven <br></br> Excellence
                    </Text>
                  </HStack>
                  <Divider
                    mt={"1rem"}
                    className="divider"
                    width={{ md: "22rem", base: "14rem" }}
                  />
                  <Text
                    fontWeight={"500"}
                    lineHeight={{ md: "30px", base: "18px" }}
                    mt={{ md: "1.25rem", base: "0.75rem" }}
                    fontSize={{ base: "0.75rem" }}
                    color={extendedTheme.colors.secondary}
                  >
                    Creating a fair and equitable environment for data sharing.
                  </Text>
                </VStack>
                <Box
                  // leftIcon={<A />}
                  mt={{ md: "4rem", base: "3rem" }}
                  p={{ md: "0.5rem", base: "0.25rem" }}
                  align={"center"}
                  border={"1px solid #606060"}
                  borderRadius={"5px"}
                  w={{ md: "18rem", base: "12rem" }}
                  fontWeight={"400"}
                  fontSize={{ md: "1.15rem", base: "0.75rem" }}
                  className="color-gradient"
                  lineHeight={{ md: "32.4px", base: "20px" }}
                  letterSpacing={{ md: "0.5rem", base: "0.25rem" }}
                  _hover={{
                    background:
                      "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                    color: "white",
                  }}
                  cursor={"pointer"}
                  onClick={()=> router.push('/UserGuide')}
                >
                  View User Guide
                </Box>
              </VStack>
            </Box>

            {/* <ReviewSlider /> */}

            {/* Product Showcase section below */}
            <HStack
              pt={{ md: "8rem", base: "5rem" }}
              justify={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
                lineHeight={"1rem"}
              >
                PRODUCT SHOWCASE
              </Text>
              <Box
                align={"center"}
                lineHeight={{ md: "63.3px" }}
                pl={{ md: "16rem" }}
                pr={{ md: "16rem" }}
                className="gradient"
                fontWeight={"300"}
                display={"flex"}
                flexDirection={"row"}
                fontSize={{ md: "3.75rem", base: "1.5rem" }}
              >
                Technology For{" "}
                <Text
                  fontWeight="700"
                  display="flex"
                  marginLeft={{ md: "1rem" }}
                >
                  {" "}
                  Everyone!
                </Text>
              </Box>
              <Text
                className="description"
                textAlign={"center"}
                w={"full"}
                px={{ md: "24rem", base: "2rem" }}
                color={theme.colors.secondary}
                fontSize={{ base: "0.75rem", md: "1rem" }}
              >
                We have seamless data capturing capabilities, robust security
                with trust measures in place and in-depth insights and
                transparency around the value of your data.
              </Text>
              <Container
                display={"flex"}
                mb={{ md: "4rem", base: "1.75rem" }}
                pt={{ md: "2rem", base: "1rem" }}
                px={{ md: "10rem", base: "0.5rem" }}
                justifyContent={"center"}
                textAlign={"center"}
                minW={{ md: "100%", base: "100%" }}
              >
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  }}
                  gap={{ md: 20, base: 5 }}
                  justifyContent="center"
                >
                  <ServiceCard
                    icon={<HushhWalletIcon />}
                    title="Hushh Wallet App​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="Secure data exchange with brands and agents (you control what you share)​"
                    onClick={() => router.push("/products/hushhWalletApp")}
                  />
                  <ServiceCard
                    icon={<HushhButtonIcon />}
                    title="Hushh Button​​​"
                    textAlign={"center"}
                    alignItems={"center"}
                    description="Easy data exchange with brands on the go (plug-in for brand apps)​"
                    onClick={() => router.push("/products/hushhButton")}
                  />
                  <ServiceCard
                    icon={<VibeSearchIcon />}
                    title="Vibe Search​"
                    textAlign={"center"}
                    alignItems={"center"}
                    description="Personalized and powerful search engine across various brands (find what you want)"
                    onClick={() => router.push("/products/vibeSearch")}
                  />
                  <ServiceCard
                    icon={<ChromeExtentionLogo />}
                    title="Browser Companion​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="Track web activity and capture interests (across brands)"
                    onClick={() => router.push("/products/browserCompanion")}
                  />
                  {/* 2nd row */}
                  <ServiceCard
                    icon={<ConceirgeApp />}
                    title="Concierge App​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="Discreetly request services & connect with providers (anonymously)"
                    onClick={() => router.push("/products/conciergeApp")}
                  />
                  <ServiceCard
                    icon={<ValetChat />}
                    title="Valet Chat​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="AI finance assistant & insights (ditch receipts, manage finances)"
                    onClick={() => router.push("/products/hushhValetChat")}
                  />
                   <ServiceCard
                    icon={<VibeSearchApi />}
                    title="Developer API's​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description=" Secure, trusted, and incentivized way of relaying valuable personal information"
                    onClick={() => router.push("/developerApi")}
                  />
                  <ServiceCard
                    icon={<ApiVibeSearch />}
                    title="VIBE Search APIs​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="Sell the best products for your clients based on their vibe (for agents and businesses)"
                    onClick={() => router.push("/products/vibeSearch")}
                  />
                  <ServiceCard
                    icon={<HfsLogo />}
                    title="Hushh For Students​"
                    alignItems={"center"}
                    textAlign={"center"}
                    description="Rewards & empowers students with data control (safe & secure)"
                    onClick={() => router.push("/products/hushhForStudents")}
                  />
                </Grid>
              </Container>
              <Button
                border={"3px solid #606060"}
                borderRadius={"2px"}
                w={{ md: "16rem", base: "10rem" }}
                color={theme.colors._white}
                lineHeight={"28px"}
                background={"transparent"}
                letterSpacing={{ md: "0.5rem", base: "0.1rem" }}
                _hover={{
                  background:
                    "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                  border: "none",
                }}
                onClick={() => router.push("/pricingPlans")}
              >
                View Our Plans
              </Button>
            </HStack>

            <TechnologySection />

            <BrandWalletSection />

            <HushhCoinUiBox />

            <HushhBlogsHome/>

            <ContactForm />
          </div>
        </main>
        <Image
          src={RightCircleEclipse}
          alt="RightCircleEclipse"
          style={{
            top: "0%",
            right: "0px",
            position: "absolute",
            // zIndex: "0.9",
          }}
        />
      </div>
    </>
  );
};

export default ClientHome;
