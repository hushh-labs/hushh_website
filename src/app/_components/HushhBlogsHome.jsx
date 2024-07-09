import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Apporv from "../_components/svg/aboutImages/TeamImages/ApoorvBedmutha.svg";
import PythonEng from "../../../public/blogs/python_Eng_with_hushh.png";
import { useRouter } from "next/navigation";
import DiscoverFashion from '../../../public/blogs/discoveryFashion1.png'
import WalletBlog from "../../../public/blogs/hushhwalletBlog.png"
import Link from "next/link";

export const HushhBlogsHome = () => {
    const router = useRouter();

  return (
    <>
      <Container
        mt={{ base: "4rem", md: "8rem" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "column" }}
        minW={"100%"}
        textAlign={'flex-start'}
      >
      <Box display={'flex'} px={{ md: "10rem", base: "2rem" }} flexDirection={'row'}> 
        <Text 
          display={'flex'}
          textAlign={'flex-start'}
          fontWeight={"700"}
          className="gradient"
          fontSize={{ md: "3.75rem", base: "1.75rem" }}
        >
          Browse our latest blogs 
        </Text>
        
    </Box>   
    <Text display={'flex'}
          textAlign={'center'}
          align={'center'}
          _hover={{
            cursor:'pointer',
            textDecoration:'underline',
            textDecorationColor:'white'
          }}
          onClick={() =>
            router.push(
              "/hushhBlogs"
            )
          }
          className="hushh-gradient"
          justifyContent={'center'}
           justifySelf={'center'}
          fontWeight={"700"} fontSize={{md:'1.5rem',base:'0.75rem'}} href="/hushhBlogs">View More </Text>
        <Flex mb={{md:'2rem',base:'1rem'}} justify="center" align="center" minHeight="40vh" padding="4">
          <Flex wrap="wrap" justify="center" gap="6">
            {/* Card 1 */}
            <Box
              maxW="sm"
              borderRadius="2.5rem"
              overflow="hidden"
              bg={"#1C1C1C"}
              cursor={"pointer"}
              onClick={() =>
                router.push(
                  "/blogs/trusted-python-engineering-at-hushh"
                )
              }
            >
              <Image
                src={PythonEng}
                alt="PythonEng"
                style={{ width: "382", height: "320px" }}
              />
              <Box p="6">
              <Badge borderRadius="full" px="2" color={'white'} background = 'linear-gradient(#e54d60 8.81%, #a342ff 94.26%)' >
                  #Python
                </Badge>
                <Heading size="md" my="2" color={"#FFFFFF"}>
                  Trusted Python Engineering At Hushh
                </Heading>
                <Text fontSize="sm" color={"#FFFFFF"}>
                  Maintaining trusted deployments at Hushh are paramount. Here
                  we dive into our best practices on one of our open source
                  libraries
                </Text>
                <Divider my={{ md: "1rem", base: "0.5rem" }} />
                <Flex align="center" mt="4">
                  <Avatar size="xs" name="Justin Donaldson" src={Apporv} />
                  <Text ml="2" fontSize="sm" color={"#FFFFFF"}>
                    Justin Donaldson - March 7, 2024
                  </Text>
                </Flex>
              </Box>
            </Box>

            {/* Card 2 */}
            <Box
              cursor={"pointer"}
              onClick={() =>
                router.push(
                  "/blogs/search-and-discovery-for-luxury-fashion"
                )
              }
              maxW="sm"
              borderRadius="2.5rem"
              overflow="hidden"
              bg={"#1C1C1C"}
            >
              <Image
                src={DiscoverFashion}
                alt="DiscoverFashion"
                style={{ width: "382", height: "320px" }}
              />
              <Box p="6">
                <Badge borderRadius="full" px="2" color={'white'} background = 'linear-gradient(#e54d60 8.81%, #a342ff 94.26%)' >
                  <Text >#Embedding</Text>
                </Badge>
                <Heading size="md" my="2" color={"#FFFFFF"}>
                  Search And Discovery For Luxury Fashion
                </Heading>
                <Text fontSize="sm" color={"#FFFFFF"}>
                  Enhancing the search for luxury fashion & embedding fashion
                  related media for style discovery & unleashing the potential of LLM Embeddings
                </Text>
                <Divider my={{ md: "1rem", base: "0.5rem" }} />
                <Flex align="center" mt="4">
                  <Avatar size="xs" name="Justin Donaldson" src={Apporv} />
                  <Text ml="2" fontSize="sm" color={"#FFFFFF"}>
                    Justin Donaldson - July 10, 2023
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              maxW="sm"
              borderRadius="2.5rem"
              overflow="hidden"
              bg={"#1C1C1C"}
              cursor={"pointer"}
              onClick={() =>
                router.push(
                  "/blogs/revolutionizing-shopping-with-hushh-wallet"
                )
              }
            >
              <Image
                src={WalletBlog}
                alt="PythonEng"
                style={{ width: "382", height: "320px" }}
              />
              <Box p="6">
              <Badge borderRadius="full"  px="2" color={'white'} background = 'linear-gradient(#e54d60 8.81%, #a342ff 94.26%)' >
                  #hushhWallet
                </Badge>
                <Heading size="md" my="2" color={"#FFFFFF"}>
                  Revolutionizing Shopping With Hushh Wallet
                </Heading>
                <Text fontSize="sm" color={"#FFFFFF"}>
                  A Blend Of Magic And Innovation shopping with GenAI hushh wallet
                  we dive into our best practices on our genAI products
                </Text>
                <Divider my={{ md: "1rem", base: "0.5rem" }} />
                <Flex align="center" mt="4">
                  <Avatar size="xs" name="Anurag Ghose" src={Apporv} />
                  <Text ml="2" fontSize="sm" color={"#FFFFFF"}>
                     Anurag Ghose - April 12, 2024
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "20.25rem", base: "12rem" }}
            h={{ md: "3.75rem", base: "2.5rem" }}
            color={'white'}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            letterSpacing={{ md: "0.5rem", base: "0.25rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              border: "none",
            }}
            onClick={() =>
              router.push(
                "/hushhBlogs"
              )
            }
          >
            VIEW ALL ARTICLES
          </Button>
      </Container>
    </>
  );
};
