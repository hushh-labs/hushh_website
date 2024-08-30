"use client";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlueTick from "../_components/svg/icons/blueTick.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import HushhButtonDemo from "../_components/svg/hushhButtonDemo.svg";
import ContactForm from "../_components/features/contactForm";
import AboutFaq from "../_components/features/faq/aboutFaq";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useToast } from "@chakra-ui/react";
import ChromeDemo from "../_components/svg/demoImages/chromeExtensionDemo.svg";
import ConciergeDemo from "../_components/svg/demoImages/conciergeAppDemo.svg";
import WalletDemo from "../_components/svg/demoImages/hushhWalletDemo.svg";
import ValetDemo from "../_components/svg/demoImages/valetChatDemo.svg";
import VibeSearchDemo from "../_components/svg/demoImages/vibeSearchDemo.svg";
import VibeSearchApiDemo from "../_components/svg/demoImages/vibeSearchApiDemo.svg";
import VibeSearchMarketDemo from "../_components/svg/demoImages/vibeSearchMarketplaceDemo.svg";
import { useMediaQuery } from "react-responsive";

const ClientDemoBooking = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [showCalendly, setShowCalendly] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [value, setValue] = useState();
  const toast = useToast();
  const [scheduled, setScheduled] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    product: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    product: "",
  });

  const products = [
    "Hushh Button",
    "Hushh Wallet App",
    "Browser Comapnion",
    "Vibe Search",
    "All",
  ];

  const onEventScheduled = () => {
    setShowCalendly(false); // Hide Calendly widget
    setShowThankYou(true); // Show thank you message
    console.log("SHow calendly", showCalendly);
    console.log("Thank You msg", showThankYou);
  };

  useCalendlyEventListener("scheduled", onEventScheduled);
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      console.log("On Event Scheduled", e.data.payload);
      setScheduled(false);
      setShowCalendly(false);
      setShowThankYou(true);
    },
  });

  useEffect(() => {
    console.log("showCalendly:", showCalendly);
    console.log("showThankYou:", showThankYou);
  }, [showCalendly, showThankYou]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\+?\d{8,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      valid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.product) {
      newErrors.product = "Product selection is required";
      valid = false;
    } else {
      newErrors.product = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: phoneNumber,
    }));
    if (validateForm()) {
      setShowCalendly(true);
      setScheduled(true);
      // window.location.href = `https://calendly.com/damrianeelesh/30min?name=${formData.name}&email=${formData.email}&message=${formData.message}`;
      setShowThankYou(false);
    }
  };

  return (
    <>
      <Box p={{ base: 4, md: 8 }}>
        <Stack
          mt={{ md: "8rem", base: "4rem" }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            gap={{ md: "1.5rem", base: "1rem" }}
            display={"flex"}
            flex={1}
            px={{ base: 2, md: 14 }}
            flexDirection={"column"}
          >
            <Heading
              className="gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.625rem", base: "2.31rem" }}
              lineHeight={{ md: "90.28px", base: "42px" }}
              as={"h1"}
              display={{ md: "block", base: "none" }}
            >
              Explore Hushh in <div className="new-gradient"> Action</div>
            </Heading>
            <Text
              className="gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.625rem", base: "2.31rem" }}
              lineHeight={{ md: "90.28px", base: "42px" }}
              display={{ md: "none", base: "block" }}
            >
              Explore Hushh in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
                {" "}
                Action
              </span>
            </Text>
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={"#FFFFFF"}
              fontWeight={"400"}
              lineHeight={"30px"}
              letterSpacing={"-0.4px"}
              as={"h2"}
            >
              Join us for a live demonstration of Hushh and unlock the secrets
              to building apps faster.
            </Text>
            <List spacing={3} color={"#FFFFFF"}>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Receive a personalized introduction to the Hushh platform
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Engage in a one-on-one session with a platform expert
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Discover the rapid automation capabilities for both simple and
                complex processes
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Witness the perfect blend of no-code and low-code
                functionalities
              </ListItem>
            </List>
            <Text fontSize={{ md: "1.25rem", base: "1rem" }} color={"#FFFFFF"}>
              Take advantage of a complimentary overview of hushh to determine
              if it aligns with your needs.
            </Text>
          </Box>
          <Box
            borderRadius={"1rem"}
            bg={"#151515"}
            display={"flex"}
            flex={1}
            flexDirection={"column"}
            overflow={"hidden"}
          >
            {showCalendly && !showThankYou && !isTabletOrMobile && (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  marginLeft: "-3rem",
                  marginBottom: "-2rem",
                  p: "0",
                  m: "0",
                }}
              >
                <InlineWidget
                  styles={{
                    height: "750px",
                    borderRadius: "1rem",
                    maxHeight: "630px",
                    width: "760px",
                    marginTop: "-4rem",
                  }}
                  url={`https://calendly.com/hushh/30min?name=${formData.name}&email=${formData.email}&phoneNumber=${phoneNumber}&product=${formData.product}`}
                  onSubmit={() => {
                    setScheduled(false);
                    setShowCalendly(false);
                    setShowThankYou(true);
                  }}
                  onEventScheduled={() => {
                    setScheduled(false);
                    setShowCalendly(false);
                    setShowThankYou(true);
                  }}
                />
              </div>
            )}
            {showCalendly && !showThankYou && isTabletOrMobile && (
              <div style={{ p: "0", borderRadius: "1rem", overflow: "hidden" }}>
                <InlineWidget
                  styles={{
                    height: "750px",
                    minWidth: "320px",
                    marginTop: "0rem",
                    overflow: "hidden",
                  }}
                  url={`https://calendly.com/damrianeelesh/30min?name=${formData.name}&email=${formData.email}&phoneNumber=${phoneNumber}&product=${formData.product}`}
                  onSubmit={() => {
                    setScheduled(false);
                    setShowCalendly(false);
                    setShowThankYou(true);
                  }}
                  onEventScheduled={() => {
                    setScheduled(false);
                    setShowCalendly(false);
                    setShowThankYou(true);
                  }}
                />
              </div>
            )}
            {!showCalendly && !showThankYou && (
              <form
                style={{ padding: "2rem", width: "100%" }}
                onSubmit={handleSubmit}
              >
                <Text
                  color={"#FFFFFF"}
                  fontWeight={"700"}
                  lineHeight={"30px"}
                  letterSpacing={"-0.2px"}
                  fontSize={{ md: "1.25rem", base: "1.25rem" }}
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  gap={{ md: "0.5rem", base: "0.1rem" }}
                  mb={{ md: "1.75rem", base: "0.8rem" }}
                >
                  Schedule your free{" "}
                  <div className="personalized-demo">Personalized Demo</div>
                </Text>
                <FormControl isInvalid={errors.name}>
                  <FormLabel
                    fontWeight={"400"}
                    fontSize={{ md: "14px", base: "12px" }}
                    lineHeight={"26px"}
                    letterSpacing={"-0.4px"}
                    color={"#FFFFFF"}
                  >
                    Name *
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    focusBorderColor="#FFFFFF"
                    className="formInput"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    border={"1px solid #242424"}
                    color={"#FFFFFF"}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email} mt={4}>
                  <FormLabel
                    fontWeight={"400"}
                    fontSize={{ md: "14px", base: "12px" }}
                    lineHeight={"26px"}
                    letterSpacing={"-0.4px"}
                    color={"#FFFFFF"}
                  >
                    Business Email *
                  </FormLabel>
                  <Input
                    className="formInput"
                    type="email"
                    focusBorderColor="#FFFFFF"
                    _active={{ borderColor: "#FFFFFF" }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    border={"1px solid #242424"}
                    color={"#FFFFFF"}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.product} mt={4}>
                  <FormLabel
                    fontWeight={"400"}
                    fontSize={{ md: "14px", base: "12px" }}
                    lineHeight={"26px"}
                    letterSpacing={"-0.4px"}
                    color={"#FFFFFF"}
                  >
                    Product *
                  </FormLabel>
                  <Select
                    name="product"
                    className="formInput"
                    focusBorderColor="#FFFFFF"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Please Select Product"
                    color={"#FFFFFF"}
                    border={"1px solid #242424"}
                    bg={"#151515"}
                  >
                    {products.map((product, index) => (
                      <option
                        style={{ background: "#151515" }}
                        key={index}
                        value={product}
                      >
                        {product}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.product}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phoneNumber} mt={4}>
                  <FormLabel
                    color={"#FFFFFF"}
                    fontWeight={"400"}
                    fontSize={{ md: "14px", base: "12px" }}
                    lineHeight={"26px"}
                    letterSpacing={"-0.4px"}
                  >
                    Phone Number *
                  </FormLabel>
                  <Box borderRadius={"5px"}>
                    <PhoneInput
                      defaultCountry="US"
                      color={"#FFFFFF"}
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </Box>
                  <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                </FormControl>

                <Button
                  fontWeight={"400"}
                  fontSize={"1rem"}
                  type="submit"
                  mt={{ md: 6, base: 3 }}
                  w={"full"}
                  bg={"#0565FF"}
                  color={"#FFFFFF"}
                  _hover={{
                    background:
                      "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                    color: "#FFFFFF",
                  }}
                >
                  Get Demo
                </Button>
              </form>
            )}
            {!showCalendly && showThankYou && (
              <Box p={{ md: 10, base: 5 }} textAlign="left">
                <Text
                  color="#FFFFFF"
                  fontSize={{ md: "4.1rem", base: "2rem" }}
                  fontWeight={"700"}
                  lineHeight={{ md: "80px", base: "45px" }}
                  mb={{ md: "1.5rem", base: "1rem" }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(269.19deg, #E54D60 47%, #A342FF 98.76%)",
                      color: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Thank you
                  </span>{" "}
                  for your Submission.
                </Text>
                <Text
                  fontWeight={"700"}
                  lineHeight={"30px"}
                  fontSize={{ md: "1.25rem", base: "0.75rem" }}
                  letterSpacing={"-0.2px"}
                  color={"#FFFFFF"}
                  mb={{ md: "2.75rem", base: "1.75rem" }}
                >
                  You’re one step closer to rocking the social media strategy
                  you’ve been dreaming about. One of our experts will be
                  reaching out soon.
                </Text>
                <Text
                  letterSpacing={"-0.2px"}
                  fontWeight={"700"}
                  lineHeight={"30px"}
                  fontSize={{ md: "1.25rem", base: "0.75rem" }}
                  color={"#FFFFFF"}
                >
                  While you’re here...
                </Text>
                <Box
                  mt={{ md: "4rem", base: "2rem" }}
                  p={{ md: "0.5rem", base: "0.25rem" }}
                  align={"center"}
                  border={"1px solid #606060"}
                  borderRadius={"5px"}
                  w={{ md: "22rem", base: "12rem" }}
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
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@hushhai/videos",
                      "_blank",
                    )
                  }
                >
                  EXPLORE OUR DEMOS
                </Box>
              </Box>
            )}
          </Box>
        </Stack>

        <VStack
          gap={{ md: "0.1rem", base: "0.75rem" }}
          justify={"center"}
          mt={{ md: "8rem", base: "3rem" }}
        >
          <Text
            className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
            fontWeight={500}
            letterSpacing={"0.04rem"}
            fontSize={{ base: "1rem", md: "1.25rem" }}
            lineHeight={"32px"}
          >
            HUSHH
          </Text>
          <Text
            className="gradient"
            fontWeight={"700"}
            fontSize={{ md: "4.625rem", base: "2.31rem" }}
            lineHeight={{ md: "90px", base: "55px" }}
          >
            Interactive demo videos
          </Text>
          <Grid
            mt={{ md: "2rem", base: "1rem" }}
            templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(2,1fr)" }}
            gap={10}
          >
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={HushhButtonDemo} alt="HushhButtonDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Hushh Button
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                cursor={"pointer"}
                display={"flex"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/k16zt1WSvnM?si=ZWkZt8Y-fahjyl4l",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={ChromeDemo} alt="ChromeDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Browser Companion
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                onClick={() =>
                  toast({
                    title: "Demo Coming Soon",
                    // description: "Thank you for reaching out to us",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                  })
                }
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={VibeSearchDemo} alt="VibeSearchDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Vibe Search
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                cursor={"pointer"}
                display={"flex"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/2Ji8afCx5SI?si=1rLTsNcIixWE4Dh6",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={WalletDemo} alt="WalletDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Hushh Wallet App
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/CzGi_Z_hGaQ?si=OCIPnw0boCSaTerW",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={ConciergeDemo} alt="ConciergeDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Concierge App
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/J0Q_n6CWfO8?si=hqxXUFpUgNlvB1pE",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={ValetDemo} alt="ValetDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Valet Chat App
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/iY9HyVvpkUs?si=kQT1qiDKNkAYvz6f",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={VibeSearchApiDemo} alt="VibeSearchApiDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Vibe Search API
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/mXymL7IZBPg?si=lQ9CxJkU3bpFvDr8",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={VibeSearchMarketDemo} alt="VibeSearchMarketDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={{ md: "32px", base: "20px" }}
                fontSize={{ md: "1.5rem", base: "0.85rem" }}
                letterSpacing={"-0.2px"}
                my={{ md: "2.15rem", base: "0.5rem" }}
              >
                Vibe Search Marketplace
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "0.5rem" }}
                display={"flex"}
                cursor={"pointer"}
                gap={{ md: "0.4rem", base: "0.2rem" }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/0-UHsKOYpQU?si=Q-9864DkYSlf0xCA",
                    "_blank",
                  )
                }
              >
                Watch Now <ArrowForwardIcon style={{ marginTop: "0.35rem" }} />
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
      <AboutFaq />
      <ContactForm />
    </>
  );
};

export default ClientDemoBooking;
