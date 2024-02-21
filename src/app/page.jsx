"use client";
import Image from "next/image";
import HP_TopData from "../../public/Animations/HP_TopData.json";
// import Lottie from 'lottie-react';
import "../app/globals.css";
import Lottie from "react-lottie";
import { HP_Scrolling } from "./_components/HP_Scrolling";
import DataConsent_Data from "../../public/Animations/DataConsent_Data.json";
import DataSecurity_Data from "../../public/Animations/DataSecurity_Data.json";
import ZeroParty_Data from "../../public/Animations/ZeroParty_Data.json";
import { images } from "../../public/Images/images";
import { BrandSlider } from "./_components/features/brandSlider";
import {
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import theme from "./theme";
import TrustedAIIcon from "./_components/svg/trustedAI";
import ControlOver from "./_components/svg/controlOver";
import TechIntegrationIcon from "./_components/svg/techIntegration";
import RedifiningIcon from "./_components/svg/redifiningIcon";
import TransparentSecureIcon from "./_components/svg/tranparentSecure";

export default function Home() {
  const defaultOptionsHP_Top = {
    loop: true,
    autoplay: true,
    animationData: HP_TopData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsDataSecurity = {
    loop: true,
    autoplay: true,
    animationData: DataSecurity_Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsDataConsent = {
    loop: true,
    autoplay: true,
    animationData: DataConsent_Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsZeroParty = {
    loop: true,
    autoplay: true,
    animationData: ZeroParty_Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="bg-myBG px-32 font-sans">
      <div className="pb-32">
        <div className="pt-20 flex gap-20">
          <VStack
            align={"flex-start"}
            w={"full"}
            mr={"50%"}
            display={"flex"}
            gap={"1.5rem"}
          >
            <HStack>
              <Heading className="font-500 text-7xl text-headText">
                Intelligence as a service powered by your{" "}
                <span
                  // className="gradient-text"
                  className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                  // color={'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'}
                >
                  Data
                </span>{" "}
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
              letterSpacing={"0.5rem"}
              _hover={{
                background:
                  "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              }}
            >
              LEARN MORE
            </Button>
          </VStack>
        </div>

        <HStack
          pt={"8rem"}
          justify={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading
            as={"h2"}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
          >
            BRANDS WE WORK WITH
          </Heading>
          <Text
            align={"center"}
            lineHeight={"4rem"}
            pl={"8rem"}
            pr={"8rem"}
            color={theme.colors.secondary}
            fontWeight={"300"}
            fontSize={"3.75rem"}
          >
            Discover the brands that {"  "}
            <span className="trust-text bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text">
              trust us
            </span>{" "}
            to unlock the potential of their data.
          </Text>
        </HStack>
        <BrandSlider />

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
        <Container>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={40}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <GridItem width={{ base: "100%", md: "48%" }}>
              <VStack>
                <TrustedAIIcon />
              </VStack>
            </GridItem>
            <GridItem width={{ base: "100%", md: "48%" }}>
              <VStack>
                <TechIntegrationIcon />
              </VStack>
            </GridItem>
            <GridItem width={{ base: "100%", md: "48%" }}>
              <VStack>
                <ControlOver />
              </VStack>
            </GridItem>
            <GridItem width={{ base: "100%", md: "48%" }}>
              <VStack>
                <RedifiningIcon />
              </VStack>
            </GridItem>
            <GridItem width={{ base: "100%", md: "48%" }}>
              <VStack>
                <TransparentSecureIcon />
              </VStack>
            </GridItem>
          </Grid>
        </Container>

        <div className="">
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
        <hr className=" h-0.5 bg-gradient-to-r from-myBG via-myBorder to-myBG" />

        <div className="mt-20 pt-20 flex flex-col items-center gap-12 pb-5 shadow-2xl shadow-gray-500 bg-myBorder rounded-xl">
          <div className="">
            <h1 className="text-5xl font-semibold text-myBG">
              Make <span className="text-myBG">HUSHH</span> your new Data
              Channel
            </h1>
          </div>
          <div className="flex gap-10 w-full">
            <div className="flex w-full gap-4 px-96 h-16">
              <div className="w-1/2 h-full">
                <button className="w-full h-full bg-myBG hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg text-myBorder font-bold">
                  Try FREE for 7 Days
                </button>
              </div>
              <div className="w-1/2 h-full">
                <button className="w-full h-full border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-myBG rounded-lg text-myBG font-bold">
                  Talk With Us
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-full flex justify-center">
              <Image src={images.CTA} alt="cta1" className="w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
