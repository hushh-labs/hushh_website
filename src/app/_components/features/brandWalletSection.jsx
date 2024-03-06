import {
  Box,
  Grid,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

import BrandWalletMobile from "../../../../public/Images/BrandWalletMobile.png";
import NextImage from "next/image";
import React from "react";
import SendReceiveIcon from "../svg/icons/sendReceive";
import ChartIcon from "../svg/icons/chartIcon";
import RefreshIcon from "../svg/icons/refreshIcon";
import WalletIcon from "../svg/icons/walletIcon";
import { useRouter } from "next/navigation";

import extendedTheme from "@/app/theme";

const BrandWalletSection = () => {
  const router = useRouter();


  return (
    <VStack mt={{ md: "8rem", base: "5rem" }}>
      <Heading
        className="gradient"
        fontSize={{ md: "3.75rem", base: "1.5rem" }}
      >
        Build your own brand wallet
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{ md: "1rem" }}
        pl={{ md: "30rem" }}
        pr={{ md: "30rem" }}
        color={extendedTheme.colors.secondary}
        lineHeight={"36px"}
        mb={"1rem"}
      >
        "Experience elegance and durability with our brand wallet - a statement
        of luxury and utility."
      </Text>
      <Grid
        templateColumns={{ md: "1fr 2fr 1fr", base: "1fr" }}
        gap={{ md: "4rem", base: "1rem" }}
        mt={{ md: "2rem", base: "1rem" }}
        px={{ md: "10rem" }}
      >
        {/* Left column */}
        <VStack w={"20rem"} display={{ md: "flex", base: "none" }} gap="2rem">
          <HStack
            align={"left"}
            flexDirection="column"
            bg="#1C1C1C"
            px="2rem"
            py="3rem"
            gap={"1rem"}
            borderRadius={"2.5rem"}
          >
            <SendReceiveIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Send & Receive
            </Heading>
            <Text color={extendedTheme.colors._white}>
            Utilize our platform's robust capabilities for effortless data sharing and secure transactions. 
            </Text>
          </HStack>
          <HStack
            align={"left"}
            flexDirection="column"
            bg="#1C1C1C"
            px="2rem"
            py="3rem"
            gap={"1rem"}
            borderRadius={"2.5rem"}
          >
            <WalletIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              100% Secure Wallet
            </Heading>
            <Text color={extendedTheme.colors._white}>
            Safeguard your valuable data with our 100% secure wallet. We implement advanced encryption and security measures
            </Text>
          </HStack>
        </VStack>

        {/* Center column */}
        <Box
          borderRadius={"2.5rem"}
          w={"full"}
          gridColumn={{ md: "2", base: "1 / span 1" }}
          className="gradient-bg"
        >
          <VStack align={"left"} px={"2rem"} pt={"2rem"} gap={"1.6rem"}>
            <Heading fontSize={"20px"} color={extendedTheme.colors._white}>
              iOS & ANDROID APP
            </Heading>
            <Text color={extendedTheme.colors._white}>
              Download our apps for android as well as for iOS to experience the new gen AI features of our products.
            </Text>
            <Box align={"center"} mt={"1.40rem"}>
              <NextImage src={BrandWalletMobile} />
            </Box>
          </VStack>
        </Box>

        {/* Right column */}
        <VStack w={"20rem"} display={{ md: "flex", base: "none" }} gap="2rem">
          <HStack
            align={"left"}
            flexDirection="column"
            bg="#1C1C1C"
            px="2rem"
            py="3rem"
            gap={"1rem"}
            borderRadius={"2.5rem"}
          >
            <ChartIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Seamless Integration
            </Heading>
            <Text color={extendedTheme.colors._white}>
            We offer robust APIs and developer tools for effortless integration with trusted brands.
            </Text>
          </HStack>
          <HStack
            align={"left"}
            flexDirection="column"
            bg="#1C1C1C"
            px="2rem"
            py="3rem"
            gap={"1rem"}
            borderRadius={"2.5rem"}
          >
            <RefreshIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
            Optimized Data Sharing 
            </Heading>
            <Text color={extendedTheme.colors._white}>
            Effortlessly share and manage your data with our optimized data sharing solutions &  enabling you to control and monitor data access
            </Text>
          </HStack>
        </VStack>
      </Grid>
      <Box
        mt={"4rem"}
        p={"0.75rem"}
        align={"center"}
        border={"1px solid #606060"}
        borderRadius={"5px"}
        w={"16rem"}
        className="color-gradient"
        lineHeight={"28px"}
        letterSpacing={"0.5rem"}
        _hover={{
          background:
            "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
          color: "white",
        }}
        cursor={'pointer'}
        onClick={() =>
          router.push("https://sites.google.com/hush1one.com/drops/products/test-builds")
        }
      >
        DOWNLOAD APP
      </Box>
    </VStack>
  );
};

export default BrandWalletSection;
