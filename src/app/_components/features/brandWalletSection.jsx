import { Box, Grid, HStack, Text, VStack, Button } from "@chakra-ui/react";

import BrandWalletMobile from "../../../../public/Images/BrandWalletMobile.png";
import NextImage from "next/image";
import React from "react";
import SendReceiveIcon from "../svg/icons/sendReceive";
import ChartIcon from "../svg/icons/chartIcon";
import RefreshIcon from "../svg/icons/refreshIcon";
import WalletIcon from "../svg/icons/walletIcon";
import { useRouter } from "next/navigation";

import extendedTheme from "../../theme";
const BrandWalletSection = () => {
  const router = useRouter();

  return (
    <VStack mt={{ md: "8rem", base: "5rem" }}>
      <Text
        className="gradient"
        fontSize={{ md: "3.75rem", base: "1.5rem" }}
        mx={"0.5rem"}
        textAlign={"center"}
      >
        Build your own brand wallet
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ md: "1rem" }}
        px={{ md: "30rem", base: "3rem" }}
        color={extendedTheme.colors.secondary}
        lineHeight={{ md: "36px", base: "22px" }}
        mb={"1rem"}
      >
        Take control of your digital identity with our innovative "Build Your
        Own Brand Wallet" gen AI feature.
      </Text>
      <Grid
        templateColumns={{ md: "1fr 2fr 1fr", base: "repeat(1, 1fr)" }}
        gap={{ md: "4rem", base: "1rem" }}
        mt={{ md: "2rem", base: "1rem" }}
        px={{ md: "10rem", base: "1rem" }}
      >
        {/* Left column */}
        <VStack
          w={{ md: "20rem", base: "10rem" }}
          display={{ md: "flex", base: "none" }}
          gap="2rem"
        >
          <HStack
            align={"left"}
            flexDirection={"column"}
            bg="#1C1C1C"
            px={{ md: "2rem", base: "1rem" }}
            py={{ md: "3rem", base: "1rem" }}
            gap={"1rem"}
            borderRadius={"2.5rem"}
          >
            <SendReceiveIcon />
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={extendedTheme.colors._white}
            >
              HUSHH Bot
            </Text>
            <Text color={extendedTheme.colors._white}>
              Your personal AI, learning from you. Get things done, find
              answers, and live smarter
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
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={extendedTheme.colors._white}
            >
              100% SECURE WALLET
            </Text>
            <Text color={extendedTheme.colors._white}>
              Rest assured knowing that your digital assets are in safe hands
              with Hushh Bot, your 100% secure wallet solution.
            </Text>
          </HStack>
        </VStack>

        {/* Responsive column for mobile */}
        <HStack
          spacing="1rem"
          w={"full"}
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
        >
          <VStack
            align={"left"}
            bg="#1C1C1C"
            px="0.5rem"
            py="0.5rem"
            gap={"0.5rem"}
            borderRadius={"1rem"}
          >
            <SendReceiveIcon width={20} height={20} />
            <Text fontSize={"0.875rem"} color={extendedTheme.colors._white}>
              HUSHH BOT
            </Text>
            <Text
              fontSize={"0.75rem"}
              color={extendedTheme.colors._white}
              textAlign="center"
            >
              Your all-in-one digital assistant designed to simplify your life,
              streamline tasks, and enhance productivity..
            </Text>
          </VStack>
          <VStack
            align={"left"}
            bg="#1C1C1C"
            px="0.5rem"
            py="0.5rem"
            gap={"0.5rem"}
            borderRadius={"1rem"}
          >
            <WalletIcon width={20} height={20} /> {/* Adjust icon size */}
            <Text fontSize={"0.875rem"} color={extendedTheme.colors._white}>
              100% SECURE WALLET
            </Text>
            <Text
              fontSize={"0.75rem"}
              color={extendedTheme.colors._white}
              textAlign="center"
            >
              Rest assured knowing that your digital assets are in safe hands
              with Hushh Bot, your 100% secure wallet solution.
            </Text>
          </VStack>
        </HStack>

        {/* Center column */}
        <Box
          borderRadius={"2.5rem"}
          w={"full"}
          gridColumnStart={{ base: 1, md: 2 }} // Ensure it's placed in the second column or full width on mobile
          gridRowStart={{ base: 2, md: 1 }}
          // gridColumn={{ md: "2", base: "2" }}
          className="gradient-bg"
          // display={{base:'none', md:'flex'}}
        >
          <VStack
            align={"left"}
            px={"2rem"}
            pt={"2rem"}
            gap={"1.6rem"}
            position={"relative"}
          >
            <Text fontSize={"20px"} color={extendedTheme.colors._white}>
              iOS & ANDROID APP
            </Text>
            <Text color={extendedTheme.colors._white}>
              Experience the convenience of managing your digital life with
              Hushh, available on both iOS and Android.
            </Text>
            <Box
              display={{ md: "block", base: "none" }}
              align={"center"}
              mt={"1.40rem"}
            >
              <NextImage
                src={BrandWalletMobile}
                alt="brandWalletdesktop"
                style={{ position: "absolute", top: "110.7%" }}
              />
            </Box>
            <Box
              align={"center"}
              display={{ md: "none", base: "block" }}
              mt={"1.40rem"}
            >
              <NextImage src={BrandWalletMobile} alt="brandWalletmobile" />
            </Box>
          </VStack>
        </Box>

        {/* Right column */}
        <VStack
          w={"20rem"}
          display={{ md: "flex", base: "none" }}
          gap="2rem"
          gridColumnStart={{ base: 1, md: 3 }} // Start from the first column on mobile, third on desktop
          gridRowStart={{ base: 3, md: 1 }}
        >
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
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={extendedTheme.colors._white}
            >
              SHARE AND BENEFIT
            </Text>
            <Text color={extendedTheme.colors._white}>
              Share your data, earn points, and unlock rewards like discounts,
              gift cards, and cashback offers from Brands we want to work with
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
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={extendedTheme.colors._white}
            >
              RECEIPT RADAR
            </Text>
            <Text color={extendedTheme.colors._white}>
              With automatic scanning, smart categorization, and customizable
              options, managing expenses becomes a breeze.
            </Text>
          </HStack>
        </VStack>

        <HStack
          spacing="1rem"
          w={"full"}
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
        >
          <VStack
            align={"left"}
            bg="#1C1C1C"
            px="0.5rem"
            py="0.5rem"
            gap={"0.5rem"}
            borderRadius={"1rem"}
          >
            <ChartIcon width={20} height={20} /> {/* Adjust icon size */}
            <Text fontSize={"0.875rem"} color={extendedTheme.colors._white}>
              Seamless Integration
            </Text>{" "}
            <Text
              fontSize={"0.75rem"}
              color={extendedTheme.colors._white}
              textAlign="center"
            >
              We offer robust APIs and developer tools for effortless
              integration with trusted brands.
            </Text>
          </VStack>
          <VStack
            align={"left"}
            bg="#1C1C1C"
            px="0.5rem"
            py="0.5rem"
            gap={"0.5rem"}
            borderRadius={"1rem"}
          >
            <RefreshIcon width={20} height={20} />
            <Text fontSize={"0.875rem"} color={extendedTheme.colors._white}>
              Optimized Data Sharing
            </Text>
            <Text
              fontSize={"0.75rem"}
              color={extendedTheme.colors._white}
              textAlign="center"
            >
              Effortlessly share and manage your data with our solutions to
              control and monitor data access
            </Text>
          </VStack>
        </HStack>
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
        cursor={"pointer"}
        onClick={() =>
          router.push(
            "https://sites.google.com/hush1one.com/drops/products/test-builds",
          )
        }
      >
        DOWNLOAD APP
      </Box>
    </VStack>
  );
};

export default BrandWalletSection;
