"use client";
import HP_TopData from "../../public/Animations/HP_TopData.json";
import "../app/globals.css";
// import { HP_Scrolling } from "./_components/features/HP_Scrolling";
// import DataConsent_Data from "../../public/Animations/DataConsent_Data.json";
// import DataSecurity_Data from "../../public/Animations/DataSecurity_Data.json";
// import ZeroParty_Data from "../../public/Animations/ZeroParty_Data.json";
// import { images } from "../../public/Images/images";
import NextImage from "next/image";
import { BrandSlider } from "./_components/features/brandSlider";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import theme from "./theme";
import TechnologySection from "./_components/features/technologySection";
import React from "react";
import { ServiceCard } from "./_components/primitives/serviceCard";
import TransparentSecureIcon from "./_components/svg/tranparentSecure";
import HushhWalletIcon from "./_components/svg/hushhWalletIcon";
import HushhButtonIcon from "./_components/svg/hushhButton";
import VibeSearchIcon from "./_components/svg/vibeSearch";
import ChromeExtentionLogo from "./_components/svg/ChromeExtensionLogo";
import SearchBar from "./_components/features/searchBar";
import SephoraCard from "../../public/Images/Sephora.png";
import LouisVuitton from "../../public/Images/LouisVuitton.png";
import FendiCard from "../../public/Images/Fendi.png";
import extendedTheme from "./theme";
import ShieldIcon from "./_components/svg/ShieldIcon";
import KeyIcon from "./_components/svg/keyIcon";
import LockIcon from "./_components/svg/LockIcon";

export default function Home() {
  // const defaultOptionsHP_Top = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: HP_TopData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const defaultOptionsDataSecurity = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: DataSecurity_Data,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const defaultOptionsDataConsent = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: DataConsent_Data,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const defaultOptionsZeroParty = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: ZeroParty_Data,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <main className="bg-myBG  font-Figtree">
      <div className="pb-32">
        <Box pt={20} display={"flex"} px={{ base: "0.5rem", md: "32px" }}>
          <VStack
            align={"flex-start"}
            w={"full"}
            mr={{ md: "60%", base: "10%" }}
            display={"flex"}
            gap={"1.5rem"}
            mt={{ md: "5rem", base: "1rem" }}
            ml={{ base: "1rem", md: "5.5rem" }}
          >
            <HStack>
              <Heading
                as={"h1"}
                fontSize={{ md: "5rem", base: "2rem" }}
                className="text-headText"
                lineHeight={{ md: "5.5rem", base: "2.5rem" }}
                fontWeight={"400"}
                display={'flex'}
                flexDirection={'column'}
              >
                Intelligence as a service powered by your{" "}
                <span className="wrapper">
                  <div className="words">
                    <span className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                      Data
                    </span>
                    <span className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                      Social Media
                    </span>
                    <span className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                      Phone Data
                    </span>
                    <span className="slideText bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                      Shopping History
                    </span>
                  </div>
                </span>
              </Heading>
            </HStack>

            <Text color={"#656565"} fontSize={"18px"}>
              Unlock the value of{" "}
              <span className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text">
                "Your"
              </span>{" "}
              data with rich insights!
            </Text>
            
            <Button
              border={"3px solid #606060"}
              borderRadius={"2px"}
              w={"16rem"}
              color={theme.colors._white}
              lineHeight={"28px"}
              background={"transparent"}
              letterSpacing={"0.5rem"}
              _hover={{
                background:
                  "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              }}
            >
              LEARN MORE
            </Button>
            <SearchBar />
          </VStack>
        </Box>

        <HStack
          pt={"8rem"}
          justify={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading
            as={"h2"}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
          >
            BRANDS WE WORK WITH
          </Heading>
          <Text
            align={"center"}
            lineHeight={{ md: "4rem" }}
            pl={{ md: "16rem" }}
            pr={{ md: "16rem" }}
            color={theme.colors.secondary}
            fontWeight={"300"}
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
          >
            Discover the brands that {"  "}
            <span className="trust-text bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
              trust us
            </span>{" "}
            to unlock the potential of their data.
          </Text>
        </HStack>

        <BrandSlider />

        <Box
          display="flex"
          h={"full"}
          pt={"10rem"}
          justifyContent="space-between"
          gap="5rem"
        >
          {/* Left side box */}
          <Box flex="1" bg={extendedTheme.colors._black}>
            <NextImage
              src={LouisVuitton}
              alt="Louis Vuitton"
              width={350.62}
              height={363.19}
              style={{
                zIndex: "1",
                position: "relative",
                top: "25px",
                left: "100px",
              }}
            />
            <NextImage
              style={{
                position: "relative",
                top: "-90.67px",
                left: "319px",
                zIndex: "2",
              }}
              src={SephoraCard}
              alt="Sephora Card"
              width={420.62}
              height={363.19}
            />
            <NextImage
              style={{
                position: "absolute",
                top: "1490.75px",
                left: "40px",
                zIndex: "1",
                rotate: "10.02",
              }}
              src={FendiCard}
              alt="Fendi Card"
              width={570.62}
              height={363.19}
            />
          </Box>
          {/* Right side box */}
          <VStack alignItems={"left"} textAlign="left" flex="1">
            <Text
              className="color-gradient"
              fontWeight={600}
              letterSpacing={"0.25rem"}
              fontSize={"1rem"}
            >
              OUR ADVANTAGES
            </Text>

            <Heading>
              <Text
                className="gradient"
                lineHeight={"63px"}
                fontWeight={"400"}
                fontSize={"3.75rem"}
              >
                Why Us?
              </Text>
            </Heading>
            <Text pt={"2rem"} fontWeight={'500'} color={extendedTheme.colors.secondary}>
              Empower individuals with data control. Today, we're a cutting-edge
              platform fostering trust, transparency, and personalized
              experiences.
            </Text>

            <Box pt={'40px'} display={"flex"} gap={"4rem"}>
              <VStack maxW={'290px'} textAlign={'left'} alignItems={'left'}>
                <HStack gap={"2rem"}>
                  <ShieldIcon />
                  <Text
                    fontWeight={"500"}
                    fontSize={"1rem"}
                    color={extendedTheme.colors.secondary}
                  >
                    Data <br></br> Autonomy
                  </Text>
                </HStack>
                <Divider mt={'1rem'} className="divider" width={'12rem'}/>
                <Text fontWeight={'500'} lineHeight={'36px'} mt={'20px'} color={extendedTheme.colors.secondary}>
                Empower your customers with full control over their personal data
                </Text>
              </VStack>

              <VStack maxW={'290px'} mt={'-0.5rem'} textAlign={'left'} alignItems={'left'}>
              <HStack gap={"2rem"}>
                <KeyIcon />
                <Text
                  fontWeight={"500"}
                  fontSize={"1rem"}
                  color={extendedTheme.colors.secondary}
                >
                  Promoting <br></br> Data Equity
                </Text>
              </HStack>
              <Divider mt={'1rem'} className="divider" width={'12rem'}/>
              <Text fontWeight={'500'} lineHeight={'36px'} mt={'20px'} color={extendedTheme.colors.secondary}>
              Creating a fair and equitable environment for data sharing.​
              </Text>
              </VStack>
            </Box>
            <VStack mt={'1.5rem'} textAlign={'left'} alignItems={'left'}>
              <HStack gap={"2rem"}>
                <LockIcon />
                <Text
                  fontWeight={"500"}
                  fontSize={"1rem"}
                  color={extendedTheme.colors.secondary}
                >
                  Consent-Driven <br></br> Excellence
                </Text>
              </HStack>
              <Divider mt={'1rem'} className="divider" width={'22rem'}/>
              <Text fontWeight={'500'} lineHeight={'36px'} mt={'20px'} color={extendedTheme.colors.secondary}>
              Creating a fair and equitable environment for data sharing.​
              </Text>
              </VStack>
          </VStack>
        </Box>

        <HStack
          pt={"8rem"}
          justify={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading
            as={"h2"}
            className="color-gradient"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
          >
            PRODUCT SHOWCASE
          </Heading>
          <Text
            align={"center"}
            lineHeight={{ md: "6rem" }}
            pl={{ md: "16rem" }}
            pr={{ md: "16rem" }}
            className="gradient"
            fontWeight={"300"}
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
          >
            Technology For Everyone!
          </Text>
          <Text
            className="description"
            textAlign={"center"}
            px={{ md: "24rem" }}
            color={theme.colors.secondary}
          >
            We have seamless data capturing capabilities, robust security with
            trust measures in place and in-depth insights and transparency
            around the value of your data.
          </Text>
          <Container
            display={"flex"}
            pt={{ md: "2rem" }}
            px={{ md: "10rem" }}
            justifyContent={"center"}
            textAlign={"center"}
            minW={{ md: "100%", base: "100%" }}
          >
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ md: 20, base: 5 }}
              flexWrap="wrap"
            >
              <ServiceCard
                icon={<HushhWalletIcon />}
                title="Hushh Wallet App​"
                alignItems={"center"}
                textAlign={'center'}
                description="Customer User Flow + Client Advisor User Flow​"
              />
              <ServiceCard
                icon={<HushhButtonIcon />}
                title="Hushh Button​​​"
                textAlign={'center'}
                alignItems={"center"}
                description="Seamless Data Sharing for Personalized Experiences and recommendations​​"
              />
              <ServiceCard
                icon={<VibeSearchIcon />}
                title="Vibe Search​"
                textAlign={'center'}
                alignItems={"center"}
                description="Find perfect items to express your individuality in just one click"
              />
              <ServiceCard
                icon={<ChromeExtentionLogo />}
                title="Chrome Extension​"
                alignItems={"center"}
                textAlign={'center'}
                description="Improved product recommendations & effective marketing campaigns"
              />
            </Grid>
          </Container>
        </HStack>

        <TechnologySection />

       

        

        {/* <div className="pt-5">
          <HP_Scrolling />
        </div>
        <hr className=" h-0.5 bg-gradient-to-r from-myBG via-myBorder to-myBG" />

        <div className="flex flex-col justify-center w-full pb-32">
          <div className=" space-y-5">
            <h1 className="text-center font-bold text-5xl text-headText pt-20">
              Consent In Data-Sharing Is Crucial
            </h1>
            <p className="text-2xl font-normal text-center text-normText">
              and
            </p>
            <p className="text-myBorder text-center font-bold text-5xl">
              Hushh Does It Right.
            </p>
          </div>
          <div className="flex gap-16 pt-20">
            <div className="flex-1 bg-white shadow-lg rounded-xl px-4 py-6">
              <div className="flex items-center gap-6 border-b border-myBorder border-opacity-30 pb-3">
                <div className="w-1/3 h-28">
                  <Lottie options={defaultOptionsZeroParty} />
                </div>
                <h1 className="text-3xl font-semibold">
                  Zero-Party <br /> Data
                </h1>
              </div>
              <div className="pt-4">
                <p className="text-center text-lg text-normText">
                  With relevant information about your clients based on their
                  activity across various brands, understand your client like
                  never before.
                </p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-xl px-4 py-6">
              <div className="flex items-center gap-4 border-b border-myBorder border-opacity-30 pb-3">
                <div className="w-1/3 h-28">
                  <Lottie options={defaultOptionsDataSecurity} />
                </div>
                <h1 className="text-3xl font-semibold">
                  Ethical Data <br /> Practices
                </h1>
              </div>
              <div className="pt-4">
                <p className="text-center text-lg text-normText">
                  Our platform prioritizes data security and powers users with
                  easy data sharing and control over its usage creating ethical
                  data handling culture and trust.
                </p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-xl px-4 py-6">
              <div className="flex items-center gap-4 border-b border-myBorder border-opacity-30 pb-3">
                <div className="w-1/3 h-28">
                  <Lottie options={defaultOptionsDataConsent} />
                </div>
                <h1 className="text-3xl font-semibold">
                  Powered By <br /> Consent
                </h1>
              </div>
              <div className="pt-4">
                <p className="text-center text-lg text-normText">
                  We empower users with data control enabling businesses to
                  provide exceptional experiences through user consent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className=" h-0.5 bg-gradient-to-r from-myBG via-myBorder to-myBG" /> */}
      </div>
    </main>
  );
}
