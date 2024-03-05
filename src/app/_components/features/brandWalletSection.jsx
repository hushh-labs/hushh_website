import { Box, Grid, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import BrandWalletMobile from "../../../../public/Images/BrandWalletMobile.png";
import NextImage from "next/image";
import React from "react";
import SendReceiveIcon from "../svg/sendReceive";
import extendedTheme from "@/app/theme";

const BrandWalletSection = () => {
  return (
    <VStack mt={{ md: "8rem", base: "5rem" }}>
      <Heading className="gradient" fontSize={{ md: "3.75rem", base: "1.5rem" }}>
        Build your own brand wallet
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{ md: "1rem" }}
        pl={{ md: "30rem" }}
        pr={{ md: "30rem" }}
        color={extendedTheme.colors.secondary}
      >
        "Experience elegance and durability with our brand wallet - a statement
        of luxury and utility."
      </Text>
      <Grid
        templateColumns={{ md: "1fr 2fr 1fr", base: "1fr" }}
        gap={{ md: "2rem", base: "1rem" }}
        mt={{ md: "2rem", base: "1rem" }}
      >
        {/* Left column */}
        <VStack display={{ md: "flex", base: "none" }} gap="2rem">
          <HStack flexDirection="column" bg="#1C1C1C" p="1rem">
            <SendReceiveIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Send & Receive
            </Heading>
          </HStack>
          <HStack flexDirection="column" bg="#1C1C1C" p="1rem">
            <SendReceiveIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Send & Receive
            </Heading>
          </HStack>
        </VStack>

        {/* Center column */}
        <Box gridColumn={{ md: "2 / span 1", base: "1 / span 1" }}>
          <NextImage src={BrandWalletMobile} />
        </Box>

        {/* Right column */}
        <VStack display={{ md: "flex", base: "none" }} gap="2rem">
          <HStack flexDirection="column" bg="#1C1C1C" p="1rem">
            <SendReceiveIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Send & Receive
            </Heading>
          </HStack>
          <HStack flexDirection="column" bg="#1C1C1C" p="1rem">
            <SendReceiveIcon />
            <Heading fontSize="1.25rem" color={extendedTheme.colors._white}>
              Send & Receive
            </Heading>
          </HStack>
        </VStack>
      </Grid>
    </VStack>
  );
};

export default BrandWalletSection;
