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
import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import theme from "./theme";

import TechnologySection from "./_components/features/technologySection";

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
    <main className="bg-myBG  font-Figtree">
      <div className="pb-32">
        <div className="pt-20 flex gap-20 lg:px-32">
          <VStack
            align={"flex-start"}
            w={"full"}
            mr={{ md: "50%" }}
            display={"flex"}
            gap={"1.5rem"}
            mt={{ md:'5rem' }}
          >
            <HStack>
              <Heading
                fontSize={{ md: "5rem" }}
                className="text-headText"
                lineHeight={{ md: "5.5rem" }}
                fontWeight={"400"}
              >
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
              background={"transparent"}
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
            lineHeight={{ md: "4rem" }}
            pl={{ md: "16rem" }}
            pr={{ md: "16rem" }}
            color={theme.colors.secondary}
            fontWeight={"300"}
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
          >
            Discover the brands that {"  "}
            <span className="trust-text bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text">
              trust us
            </span>{" "}
            to unlock the potential of their data.
          </Text>
        </HStack>

        <BrandSlider />

        <TechnologySection />
      </div>
    </main>
  );
}
