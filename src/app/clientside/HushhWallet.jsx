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
} from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../theme";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import LouiWalletBg from "../_components/svg/louiVuittonWallet.svg";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Gucci from "../_components/svg/images/Gucci";
import Lvtetia from "../_components/svg/images/LVTETIA";
import Nordstrom from "../_components/svg/images/Nordstrom";
import Accor from "../_components/svg/images/accor";
import Aws from "../_components/svg/images/aws";
import Brand1 from "../_components/svg/images/brand1";
import Brand2 from "../_components/svg/images/brand2";
import Chalhoub from "../_components/svg/images/chalhoub";
import Citadium from "../_components/svg/images/citadium";
import Costco from "../_components/svg/images/costco";
import Fourseasons from "../_components/svg/images/four-seasons";
import Google from "../_components/svg/images/google";
import Laredoute from "../_components/svg/images/la-redoute";
import Microsoft from "../_components/svg/images/microsoft";
import BoxBgWallet from "../_components/svg/boxBgWallet.svg";
import HushhLogoS from "../_components/svg/hushhLogoS.svg";
import HushhWalletBg from "../_components/svg/hushhwalletBG.svg";
import HushhEmojiColoured from "../_components/svg/hushhEmojiColoured.svg";
import { useRouter } from "next/navigation";
import { ServiceCard } from "../_components/primitives/serviceCard";
import TrustedAIIcon from "../_components/svg/trustedAI";
import TechIntegrationIcon from "../_components/svg/techIntegration";
import ControlOver from "../_components/svg/controlOver";
import RedifiningIcon from "../_components/svg/redifiningIcon";
import AppleIcon from "../_components/svg/icons/appleIcon";
import PlayStoreIcon from "../_components/svg/icons/playStoreIcon";
import BrandWalletMobile from "../../../public/Images/BrandWalletMobile.png";
import WalletFaq from "../_components/features/faq/walletAppFaq";
import ContactForm from "../_components/features/contactForm";
import WhiteShadow from "../_components/svg/whiteShadow.svg";

const BrandContainer = styled.div`
  display: flex;
  gap: 8rem; /* Adjust the gap as needed */
  padding: 10px; /* Adjust the padding as needed */

  @media screen and (max-width: 768px) {
    gap: 4rem;
    padding: 5px;
  }
`;

const ClientHushhWallet = () => {
    const scrollTo = () => {
        scroll.scrollTo(850);
      };
    
      const scrollInMobile = () => {
        scroll.scrollTo(450);
      };
    
      const learnMoreScroll = () => {
        scroll.scrollTo(1500);
      };
    
      const router = useRouter();
    
    
  return (
    <>
      <Box
        maxW={"100%"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          alignItems={"center"}
          w={"100%"}
          id={'1'}
          display={"flex"}
          flexDirection={"column"}
          mt={{ base: "3rem" }}
          gap={{ base: "1rem", md: "2rem" }}
          px={{ md: "15rem", base: "1.5rem" }}
          position={{ md: "relative" }}
        >
          <Heading
            fontWeight={"400"}
            lineHeight={{ md: "87.46px", base: "43px" }}
            textAlign={"center"}
            fontSize={{ md: "5.4rem", base: "2rem" }}
            pt={{ md: "8rem", base: "3rem" }}
            color={"#FFFFFF"}
            mb={{ base: "0.5rem" }}
            as={'h1'}
          >
            World's first AI Powered Data Wallet
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "1rem" }}
            textAlign={"center"}
            lineHeight={"24.6px"}
            fontWeight={"400"}
            fontSize={{ md: "1.25erm", base: "1rem" }}
            color={"white"}
            as={'h2'}
          >
            Higher perk adoption, instant expense management, simple benefits
            access and much more
          </Text>
          <Button
            borderRadius={"3.3rem"}
            w={"fit-content"}
            p={"1rem 2rem"}
            _hover={{
              border:'none',
              color: "white",
              bg: "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            onClick={scrollTo}
            zIndex={"6"}
          >
            Explore
          </Button>
          <Box
            zIndex={"3"}
            position={"absolute"}
            mt={{ md: "5rem", base: "17rem" }}
          >
            <Image src={BoxBgWallet} alt="BoxBgWallet" />
          </Box>
          <Box
            zIndex={"5"}
            position={"absolute"}
            display={{ md: "block", base: "none" }}
            mt={{ md: "5rem", base: "17rem" }}
          >
            <Image src={LouiWalletBg} alt="LouiWalletBg" />
          </Box>
        </Box>

        <Box zIndex={"5"} display={{ md: "none", base: "block" }} mb={"-12rem"}>
          <Image src={LouiWalletBg} alt="LouiWalletBg" />
        </Box>
      </Box>
      <VStack mt={{ md: "34rem", base: "10rem" }}>
        <Text
          className="color-gradient"
          fontWeight={"600"}
          fontSize={{ md: "1rem", base: "0.75rem" }}
          lineHeight={"1rem"}
          letterSpacing={"0.255rem"}
          mb={{ md: "2rem", base: "1rem" }}
        >
          OUR PARTNERS
        </Text>
        <Divider
          border={"2px solid"}
          className="walletDivider"
          h={"1px"}
          w={"90%"}
        />
        <Marquee
          pauseOnHover
          style={{ position: "relative", overflow: "hidden" }}
        >
          <BrandContainer>
            <Accor key={1} />
            <Aws key={2} />
            <Brand1 key={3} />
            <Brand2 key={4} />
            <Chalhoub key={5} />
            <Citadium key={6} />
            <Costco key={7} />
            <Fourseasons key={8} />
            <Google key={9} />
            <Gucci key={10} />
            <Laredoute key={11} />
            <Lvtetia key={12} />
            <Microsoft key={13} />
            <Nordstrom key={14} />
          </BrandContainer>
        </Marquee>
        <Divider
          border={"2px solid"}
          className="walletDivider"
          w={"90%"}
          h={"1px"}
        />
      </VStack>
      <Box
        mt={{ md: "6rem", base: "3rem" }}
        display={{ base: "none", md: "block" }}
        flexDirection={"column"}
        position={"relative"}
      >
        <Image
          src={BoxBgWallet}
          alt="BoxBgWallet"
          style={{ position: "absolute" }}
        />
        <HStack
          position={"relative"}
          justifyContent={"center"}
          flexDirection={{ md: "row", base: "column" }}
          alignContent={"center"}
          fontWeight={"400"}
          lineHeight={{ md: "91.78px", base: "50px" }}
          fontSize={{ md: "5.4rem", base: "2.7rem" }}
        >
          <Heading
            fontWeight={"400"}
            fontSize={"5.43rem"}
            fontFamily={"Bebas Neue"}
            zIndex={10}
            className="gradient"
            textAlign={{ base: "center" }}
          >
            YOUR PERSONAL DATA,
          </Heading>
          <Image src={HushhLogoS} alt="HushhLogoS" style={{ zIndex: "3" }} />
          <Image
            src={WhiteShadow}
            alt="whiteShadow"
            style={{ position: "absolute", zIndex: "-100" }}
          />
          <Heading
            fontWeight={"400"}
            fontSize={"5.43rem"}
            fontFamily={"Bebas Neue"}
            zIndex={10}
            className="gradient"
            textAlign={{ base: "center" }}
          >
            YOUR OWN BUSINESS
          </Heading>
        </HStack>
        <Text
          px={{ md: "10rem", base: "1rem" }}
          color={"#ABABAB"}
          textAlign={{ md: "center", base: "center" }}
          fontWeight={"500"}
          fontSize={"1rem"}
          lineHeight={{ md: "2rem", base: "1.15rem" }}
        >
          Imagine a world where your data works for you, not against you. A
          world where your online and offline interactions paint a detailed
          picture of your unique self, accessible only by you and those you
          choose to trust. This is the reality unlocked by Hushh Wallet, the app
          that puts you in control of your digital identity and empowers you to
          reap the rewards it holds.
        </Text>
      </Box>

      <Box
        mt={{ md: "6rem", base: "3rem" }}
        display={{ md: "none", base: "flex" }}
        flexDirection={"column"}
        position={"relative"}
      >
        <Image
          src={BoxBgWallet}
          alt="BoxBgWallet"
          style={{ position: "absolute" }}
        />
        <HStack
          justifyContent={"center"}
          flexDirection={{ md: "row", base: "column" }}
          alignContent={"center"}
          fontWeight={"400"}
          lineHeight={{ md: "91.78px", base: "50px" }}
          fontSize={{ md: "5.4rem", base: "2.7rem" }}
        >
          <Heading
            fontWeight={"400"}
            fontSize={"2.75rem"}
            fontFamily={"Bebas Neue"}
            className="gradient"
            textAlign={{ base: "center" }}
          >
            YOUR PERSONAL DATA,
          </Heading>
          <Image src={HushhLogoS} style={{ height: "9rem" }} alt="HushhLogoS" />
          <Image
            src={WhiteShadow}
            alt="whiteShadow"
            style={{ position: "absolute", zIndex: "-100", height: "25rem" }}
          />
          <Heading
            fontWeight={"400"}
            fontSize={"2.75rem"}
            fontFamily={"Bebas Neue"}
            className="gradient"
            textAlign={{ base: "center" }}
            px={"1rem"}
          >
            YOUR OWN BUSINESS
          </Heading>
        </HStack>
        <Text
          px={{ md: "10rem", base: "1rem" }}
          color={"#ABABAB"}
          textAlign={{ md: "center", base: "center" }}
          fontWeight={"500"}
          fontSize={"1rem"}
          lineHeight={{ md: "2rem", base: "1.15rem" }}
        >
          Imagine a world where your data works for you, not against you. A
          world where your online and offline interactions paint a detailed
          picture of your unique self, accessible only by you and those you
          choose to trust. This is the reality unlocked by Hushh Wallet, the app
          that puts you in control of your digital identity and empowers you to
          reap the rewards it holds.
        </Text>
      </Box>

      <HStack
        bg={"#151515"}
        w={"100%"}
        mt={{ md: "12rem", base: "2.5rem" }}
        gap={{ md: "1rem", base: "0.75rem" }}
        pl={{ md: "10rem", base: "1.25rem" }}
        pr={{ md: "3rem", base: "1.25rem" }}
      >
        <VStack
          my={{ md: "5rem", base: "2.5rem" }}
          flex={3}
          gap={"2rem"}
          textAlign={"left"}
          alignItems={"flex-start"}
        >
          <Heading
            className="color-gradient"
            fontWeight={"600"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            lineHeight={"23.8px"}
            letterSpacing={"0.255rem"}
          >
            GLOBAL SCALE
          </Heading>
          <Text
            color={"white"}
            fontWeight={"700"}
            fontSize={{ md: "2.5rem", base: "1.25rem" }}
            lineHeight={{ md: "56px", base: "30px" }}
          >
            Scattered Data, Unified Identity
          </Text>
          <Text color={"#ABABAB"} fontSize={{ md: "1.125rem", base: "0.7rem" }}>
            Every brand you interact with, every click you make, every purchase
            you complete leaves a digital footprint. Your personality,
            preferences, buying power, and interests are scattered across
            phones, platforms, and brands, often inaccessible and invisible to
            you. Hushh Wallet bridges this gap. It aggregates your data from
            various sources, including
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 4 }}
            flexWrap="wrap"
            textAlign={"left"}
          >
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"transparent"}
              border={"1px solid #FFFFFF"}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                lineHeight={{ md: "33.6px" }}
                color={"white"}
                marginBottom={{ base: "0.75rem", md: "1rem" }}
              >
                Phone Data
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md: "25.21px" }}
                color={"white"}
              >
                Text messages, location, images, emails, call records,
                documents, videos, notes, etc.
              </Text>
            </Box>
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"transparent"}
              border={"1px solid #FFFFFF"}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                lineHeight={{ md: "33.6px" }}
                color={"white"}
                marginBottom={{ base: "0.75rem", md: "1rem" }}
              >
                Data Companies
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md: "25.21px" }}
                color={"white"}
              >
                Google, Apple, Amazon, Facebook, Instagram, YouTube, LinkedIn,
                etc.
              </Text>
            </Box>
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"transparent"}
              border={"1px solid #FFFFFF"}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                lineHeight={{ md: "33.6px" }}
                color={"white"}
                marginBottom={{ base: "0.75rem", md: "1rem" }}
              >
                Shopping Brands
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md: "25.21px" }}
                color={"white"}
                // marginBottom={{base:'1.25rem', md:'3rem'}}
              >
                Online e-commerce sites, apps, and offline receipts.
              </Text>
            </Box>
          </Grid>
          <Text
            color={"#ABABAB"}
            fontWeight={"400"}
            lineHeight={{ md: "32.4px", base: "24px" }}
            fontSize={{ md: "1.125rem", base: "0.8rem" }}
          >
            With Hushh, you become the curator of your own identity. You choose
            what information to include, building a comprehensive profile that
            reflects your true self.
          </Text>
        </VStack>
        <Box
          flex={1}
          display={{ base: "none", md: "flex" }}
          alignSelf={"flex-start"}
          justifyItems={"flex-start"}
          justifySelf={"flex-start"}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Image
            src={HushhEmojiColoured}
            alt="HushhEmojiColoured"
            style={{ filter: "grayscale(100%)" }}
          />
        </Box>
      </HStack>

      <Stack
        py={{ base: "2rem", md: "5rem" }}
        display={"flex"}
        gap={{ md: "1rem", base: "0.5rem" }}
        textAlign={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          fontWeight={"400"}
          color={"#FFFFFF"}
          lineHeight={{ md: "25.83px", base: "16px" }}
          fontSize={{ md: "1.25rem", base: "1rem" }}
        >
          Our Uniqueness
        </Text>
        <Text
          alignItems={"center"}
          justifyContent={"center"}
          lineHeight={{ md: "88.14px", base: "44px" }}
          color={"white"}
          fontWeight={"700"}
          fontSize={{ md: "5.6rem", base: "2.5rem" }}
        >
          More Than Just{" "}
        </Text>
        <Text
          alignItems={"center"}
          justifyContent={"center"}
          lineHeight={{ md: "88.14px", base: "44px" }}
          color={"white"}
          fontWeight={"700"}
          fontSize={{ md: "5.6rem", base: "2.5rem" }}
        >
          {" "}
          An App
        </Text>
        <Text
          display={"flex"}
          color={"#ABABAB"}
          lineHeight={"25px"}
          fontSize={{ md: "0.8rem", base: "0.8rem" }}
        >
          Hushh Wallet is more than just an app it's a paradigm shift. It
          empowers you too
        </Text>
        <Box>
          <Image src={HushhWalletBg} alt="HushhWalletBg" />
        </Box>
      </Stack>

      <VStack
        mb={{ md: "15rem", base: "5rem" }}
        gap={{ md: "1.25rem", base: "0.75rem" }}
        mt={{ md: "-18rem", base: "1.5ren" }}
        textAlign={{ md: "left", base: "center" }}
      >
        <Heading
          px={{ md: "5rem", base: "1rem" }}
          mr={{ md: "40%", base: 0 }}
          fontWeight={"400"}
          className="gradient"
          fontSize={{ md: "3.75rem", base: "1.75rem" }}
          lineHeight={{ md: "63.3px", base: "43px" }}
        >
          Personalized Experiences, Rewarded Interactions
        </Heading>
        <Text
          px={{ md: "5rem", base: "1.25rem" }}
          mr={{ md: "40%", base: 0 }}
          color={"#ABABAB"}
          fontWeight={"500"}
          lineHeight={{ md: "36px", base: "24px" }}
          fontSize={{ md: "1rem", base: "0.75rem" }}
        >
          Gone are the days of irrelevant ads and generic recommendations. Hushh
          allows you to create data cards containing specific information you're
          comfortable sharing. Now, you can
        </Text>
        <Box
          display={"flex"}
          pt={{ md: "2rem" }}
          justifyContent={"center"}
          flexDir={{ base: "column", md: "row" }} // Stack the elements vertically on base, and horizontally on md
          minW={{ md: "100%", base: "100%" }}
          position={"relative"}
        >
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 5 }}
            flexWrap="wrap"
            px={{ md: "5rem", base: "0rem" }}
          >
            <ServiceCard
              icon={<TrustedAIIcon />}
              alignItems={""}
              onClick={"#"}
              title="Connect with brands and sales agents you trust​"
              textAlign={"left"}
              description="Share your curated data cards with businesses you choose, enabling them to offer personalized experiences and recommendations tailored to your unique preferences.​"
            />
            <ServiceCard
              icon={<TechIntegrationIcon />}
              alignItems={""}
              onClick={"#"}
              title="Get rewarded for sharing data​​​"
              textAlign={"left"}
              description="Earn rewards for the valuable information you contribute, be it discounts, exclusive offers, or early access to products.​​"
            />
            <ServiceCard
              icon={<ControlOver />}
              alignItems={""}
              onClick={"#"}
              title="Sell your data​"
              textAlign={"left"}
              description="You can sell your data directly to brands and agencies, receiving fair compensation for its value."
            />
            <ServiceCard
              icon={<RedifiningIcon />}
              title="Transparency and Control​​​"
              onClick={"#"}
              alignItems={""}
              textAlign={"left"}
              description="Hushh prioritizes your privacy and control. You have full transparency over who has access to your data and what they can see. You can easily revoke access or modify your data cards at any time.​​"
            />
          </Grid>
          <Box
            className="gradient-bg"
            width={"65%"}
            display={{ md: "block", base: "none" }}
            borderLeftRadius={"50px"}
            position={"absolute"}
            p={{ md: "2rem", base: "0.75rem" }}
            bottom={0}
            top={"60%"}
            h={"70%"}
            right={0}
          >
            <Heading
              mb={{ md: "1rem", base: "0.5rem" }}
              color={"#0D0D25"}
              fontSize={{ md: "3.75rem", base: "1.25rem" }}
              lineHeight={{ md: "70px", base: "35px" }}
              fontWeight={"400"}
              mr={"40%"}
            >
              Enter a world made for you
            </Heading>
            <Text
              mb={{ md: "2rem", base: "1rem" }}
              color={"#0D0D25"}
              fontSize={{ md: "1.25rem", base: "0.75rem" }}
              lineHeight={"24.6px"}
              mr={"50%"}
            >
              Download Hushh Wallet today and unlock the power of your personal
              data.
            </Text>
            <HStack gap={{ md: "2rem", base: "1rem" }}>
              <Button
                px={{ md: "32px", base: "20px" }}
                py={{ md: "27px", base: "16px" }}
                w={{ md: "12rem" }}
                bg={"#000000"}
                color={"white"}
                leftIcon={<AppleIcon />}
                border={"1px solid #FFFFFF"}
                borderRadius={"80px"}
                _hover={{
                    border:'none',
                    background: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'
                }}
              >
                APP STORE
              </Button>
              <Button
                px={{ md: "32px", base: "20px" }}
                py={{ md: "27px", base: "16px" }}
                w={{ md: "12rem" }}
                bg={"#000000"}
                color={"white"}
                leftIcon={<PlayStoreIcon />}
                border={"1px solid #FFFFFF"}
                borderRadius={"80px"}
                _hover={{
                    border:'none',
                    background: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'
                }}
              >
                PLAY STORE
              </Button>
            </HStack>
            <Box pos={"absolute"} right={"7%"} bottom={0} >
              <Image src={BrandWalletMobile} alt="BrandWalletMobile" />
            </Box>
          </Box>
        </Box>
      </VStack>

      <Stack
        mt={"4rem"}
        className="gradient-bg"
        display={{ md: "none", base: "flex" }}
        flexDirection={"column"}
        position={"relative"}
        px={"0.75rem"}
        pt={'0.75rem'}
      >
        <Heading
          mb={{ base: "0.5rem" }}
          color={"#0D0D25"}
          fontSize={{ base: "1.25rem" }}
          lineHeight={{ base: "35px" }}
          fontWeight={"500"}
        >
          Enter a world made for you
        </Heading>
        <Text
          mb={{ md: "2rem", base: "1rem" }}
          color={"#0D0D25"}
          fontSize={{ md: "1.25rem", base: "0.75rem" }}
          lineHeight={"24.6px"}
        >
          Download Hushh Wallet today and unlock the power of your personal
          data.
        </Text>
        <HStack gap={{ md: "2rem", base: "1rem" }}>
          <Button
            ml={"0.5rem"}
            fontSize={"0.75rem"}
            w={"12rem"}
            bg={"#000000"}
            color={"white"}
            leftIcon={<AppleIcon />}
            border={"1px solid #FFFFFF"}
            borderRadius={"80px"}
            _hover={{
                background: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)',
                border:'none',
            }}
          >
            APP STORE
          </Button>
          <Button
            ml={"0.5rem"}
            fontSize={"0.75rem"}
            w={"12rem"}
            bg={"#000000"}
            color={"white"}
            leftIcon={<PlayStoreIcon />}
            border={"1px solid #FFFFFF"}
            borderRadius={"80px"}
            _hover={{
                background: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)',
                border:'none',
            }}
          >
            PLAY STORE
          </Button>
        </HStack>
        <Box
          display={"flex"}
          alignContent={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src={BrandWalletMobile}
            style={{ position: "relative", height: "30%",bottom:'0', width: "40%" }}
            alt="BrandWalletMobile"
          />
        </Box>
      </Stack>

      <WalletFaq />
      <ContactForm />
    </>
  )
}

export default ClientHushhWallet