"use client";
import {
  VStack,
  Text,
  Box,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import React from "react";
import linkedln from "../svg/icons/linkedIn.svg";
import Image from "next/image";
import LinkedinIcon from "../svg/icons/linkedinIcon.svg";
import Link from "next/link";
import { teamImages } from "./teamImages";
import { useState } from "react";
import { advisorsData } from "../advisorsBioData/advisorsData";
import locationIcon from "../svg/icons/locationIcon.svg";
import jobIcon from "../svg/icons/jobIcon.svg";
import { useMediaQuery } from "react-responsive";

const TeamSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 769 });

  const openModal = (advisor) => {
    setSelectedAdvisor(advisor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAdvisor(null);
    setIsOpen(false);
  };

  return (
    <>
      <Box w={"100%"} h={"100%"}>
        {/* Founder section */}
        <div className="">
          <VStack>
            <div className="pb-2.5">
              <Text
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                MEET THE FOUNDERS
              </Text>
            </div>
            <div className="md:pb-10 pb-4">
              <Text
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
                textAlign={{ base: "center" }}
              >
                Our Team Leader
              </Text>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[30rem] text-center">
              <p>
                Leadership isn't a title, it's an action. Thank you for leading
                by example.
              </p>
            </div>
            <Grid
              mt={"4rem"}
              mx={{ base: "1rem" }}
              gap={{ md: "10rem", base: "3rem" }}
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            >
              <VStack mb={"1rem"}>
                <div className="flex flex-col gap-8 text-center items-center">
                  <Image
                    alt="manish"
                    src={teamImages.Manish}
                    width={260}
                    height={276}
                  />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={"1.3rem"}
                    >
                      Manish Sainani
                    </Text>
                    <Text color={"#ABABAB"}>Founder and CEO</Text>
                  </div>
                  <Link href="https://www.linkedin.com/in/manishsainani/">
                    <Image
                      alt="manishLinkedIn"
                      src={linkedln}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </VStack>
              <VStack>
                <div className="flex flex-col gap-8 text-center items-center">
                  <Image
                    alt="justin"
                    src={teamImages.Justin}
                    width={260}
                    height={276}
                  />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={"1.3rem"}
                    >
                      Justin Donaldson
                    </Text>
                    <Text color={"#ABABAB"}>
                      Co-founder and Chief Data Scientist
                    </Text>
                  </div>
                  <Link href="https://www.linkedin.com/in/jjustindonaldson/">
                    <Image
                      alt="manishLinkedIn"
                      src={linkedln}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </VStack>
            </Grid>
          </VStack>
        </div>

        {/* Team section */}
        <div className="mt-24 md:mt-0">
          <VStack mt={{ base: "2rem", md: "8rem" }}>
            <div className="pb-2.5">
              <Text
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                THE TEAM
              </Text>
            </div>
            <div className="md:pb-4 pb-2">
              <Text
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Our Team
              </Text>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[35rem] text-center">
              <p>
                The Hushh team: Disrupting the status quo, one line of code at a
                time
              </p>
            </div>
          </VStack>
        </div>
        <div className="mt-12 md:mt-0">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          >
            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.VivekSwaminathan}
                width={260}
                height={276}
              />
              <div className=" -translate-y-16 flex flex-col items-center text-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Vivek Swaminathan
                  </Text>
                  <Text color={"#ABABAB"}>TT Software Engineer - API</Text>
                </div>
                <div className="">
                  <Link href="https://www.linkedin.com/in/vivek-swaminathan-374891a6/">
                    <Image
                      alt="vivekLinkedIn"
                      src={linkedln}
                      width={{ base: 12, md: 24 }}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </VStack>

         

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.KeerthiSreeMarrapu}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Keerthi Sree Marrapu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Product Engineer
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/mksree/"}>
                  <Image
                    alt="karthickLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.RohanSidankar}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Rohan Sidankar
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/rohan-sidankar-017205207/"}
                >
                  <Image
                    alt="rohanLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

       

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.OmkarKailasMalpure}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Omkar Kailas Malpure
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - AI/ML
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/omkar-malpure/"}>
                  <Image
                    alt="omkarLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.VasundhharaKatoch}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Vasundhhara Katoch
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - AI/ML + Product Evangelist
                  </Text>
                </div>
                <Link
                  href={
                    "https://www.linkedin.com/in/vasundhhara-katoch-a72299169/"
                  }
                >
                  <Image
                    alt="vasundharaLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.AnkitKumarSingh}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Ankit Kumar Singh
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Customer Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={
                    "https://www.linkedin.com/in/ankit-kumar-singh-69305a22a/"
                  }
                >
                  <Image
                    alt="ankitLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.KavyaChauhan}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Kavya Chauhan
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Customer Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/kavya-chauhan-6290bb239/"}
                >
                  <Image
                    alt="kavyaLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.YashMakan}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Yash Makan
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/yashmakan/"}>
                  <Image
                    alt="yashLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>

            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.AnuragGhose}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Anurag Ghose
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    UX/UI Designer
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/anurag-ghose-851666203/"}
                >
                  <Image
                    alt="anuragLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.AkashKatla}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Akash Katla
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - API
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/akashkatla"}>
                  <Image
                    alt="akashLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.KaranSoni}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Karan Soni
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/karansoni1072002/"}>
                  <Image
                    alt="karanLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.NeeleshMeena}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Neelesh Meena
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/neelesh-meena-73b07b1a0/"}
                >
                  <Image
                    alt="neeleshLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
          </Grid>
        </div>
        <div className="md:flex justify-center">
          <div className="px-9">
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.ApoorvBedmutha}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Apoorv Bedmutha
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/apoorvbedmutha/"}>
                  <Image
                    alt="apoorvLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
          </div>
          <div className="px-9">
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.KarthickMuthu}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Karthick Muthu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    TT UX Designer
                  </Text>
                </div>
                <Link href={"https://www.linkedin.com/in/karthick09/"}>
                  <Image
                    alt="karthickLinkedin"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
          </div>
        </div>

        {/* Our Advisors Section */}
        <div className="mt-24 md:mt-0">
          <VStack mt={{ base: "2rem", md: "8rem" }}>
            <div className="pb-2.5">
              <Text
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                MEET OUR ADVISORS
              </Text>
            </div>
            <div className="md:pb-10 pb-4">
              <Text
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Wisdom in Action
              </Text>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[30rem] text-center">
              <p>
                Hushh Adivsors : Leading with expertise, shaping tomorrow's
                decisions today
              </p>
            </div>
          </VStack>
        </div>
        <div className="mt-12 md:mt-0">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          >
            {advisorsData.map((advisor, index) => (
              <VStack key={index} mb={{ md: "3rem", base: "1.5rem" }}>
                <Image
                  onClick={() => openModal(advisor)}
                  alt={advisor.name}
                  src={advisor.avatar}
                  width={260}
                  height={276}
                />
                <div className="-translate-y-16 flex flex-col text-center items-center gap-3 md:gap-8">
                  <div className="flex flex-col md:gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={{ md: "1.3rem", base: "1rem" }}
                      mt={{ base: "1rem" }}
                    >
                      {advisor.name}
                    </Text>
                    <Text
                      color={"#ABABAB"}
                      fontSize={{ base: "0.75rem", md: "1rem" }}
                    >
                      {advisor.position}
                    </Text>
                  </div>
                  <Box
                    mt={{ md: "0", base: "1rem" }}
                    display="flex"
                    flexDirection="row"
                    gap="1rem"
                    alignItems={"center"}
                  >
                    <Link href={advisor.linkedin}>
                      {!isTabletOrMobile && (
                        <Image
                          alt="sureshLinkedIn"
                          src={linkedln}
                          width={{ base: 12, md: 24 }}
                          height={24}
                        />
                      )}
                      {isTabletOrMobile && (
                        <Image
                          alt="sureshLinkedIn"
                          src={linkedln}
                          width={12}
                          height={12}
                        />
                      )}
                    </Link>
                    <Button
                      h={{ md: "1.75rem", base: "1rem" }}
                      fontSize={{ md: "0.75rem", base: "0.5rem" }}
                      onClick={() => openModal(advisor)}
                    >
                      Know More
                    </Button>
                  </Box>
                </div>
              </VStack>
            ))}
          </Grid>
        </div>
      </Box>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          minW={{ md: "30rem", base: "10rem" }}
          borderRadius={"2rem"}
          p={{ md: "1rem", base: "0" }}
        >
          {selectedAdvisor && (
            <>
              <ModalCloseButton />
              <ModalBody background={"transparent"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {!isTabletOrMobile && (
                    <Image
                      alignContent={"center"}
                      src={selectedAdvisor.imageSrc}
                      alt={selectedAdvisor.name}
                      style={{
                        width: "200px",
                        display: "flex",
                        alignContent: "center",
                        height: "200px",
                      }}
                    />
                  )}
                  {isTabletOrMobile && (
                    <Image
                      alignContent={"center"}
                      src={selectedAdvisor.imageSrc}
                      alt={selectedAdvisor.name}
                      style={{
                        width: "100px",
                        display: "flex",
                        alignContent: "center",
                        height: "100px",
                      }}
                    />
                  )}
                </Box>
                <Text
                  display={"flex"}
                  gap={"1rem"}
                  my={{ md: "0.75rem", base: "0.5rem" }}
                  fontSize={{ md: "2rem", base: "1rem" }}
                >
                  {selectedAdvisor.name}
                  <Link href={selectedAdvisor.linkedin} target="_blank">
                    {!isTabletOrMobile && (
                      <Image
                        alt="linkedin"
                        src={LinkedinIcon}
                        width={{ base: 12, md: 24 }}
                        height={24}
                        style={{ marginTop: "0.5rem" }}
                      />
                    )}
                    {isTabletOrMobile && (
                      <Image
                        alt="linkedin"
                        src={LinkedinIcon}
                        width={15}
                        height={15}
                        style={{ marginTop: "0.2rem" }}
                      />
                    )}
                  </Link>
                </Text>
                <Box
                  display={"flex"}
                  gap={"0.5rem"}
                  fontSize={{ md: "1rem", base: "0.75rem" }}
                >
                  <Text
                    mb={{ md: "0.75rem", base: "0.5rem" }}
                    fontSize={{ md: "1rem", base: "0.75rem" }}
                  >
                    🤫 <b>Role at Hushh: </b>
                  </Text>
                  {selectedAdvisor.position}
                </Box>
                <Box
                  display={"flex"}
                  gap={"0.5rem"}
                  fontSize={{ md: "1rem", base: "0.75rem" }}
                >
                  <Image
                    src={jobIcon}
                    alt="jobIcon"
                    style={{
                      alignSelf: "flex-start",
                      alignItems: "flex-start",
                    }}
                  />
                  <Text
                    mb={{ md: "0.75rem", base: "0.5rem" }}
                    gap={"0.5rem"}
                    display={"flex"}
                    flexDirection={"row"}
                  >
                    <b>Working:</b>
                  </Text>
                  {selectedAdvisor.currentWork}
                </Box>
                <Text
                  gap={"0.5rem"}
                  fontSize={{ md: "1rem", base: "0.75rem" }}
                  display={"flex"}
                >
                  <Image
                    src={locationIcon}
                    alt="locationIcon"
                    boxSize={6}
                    style={{
                      display: "flex",
                      alignSelf: "flex-start",
                      marginRight: "0.25rem",
                    }}
                  />

                  <b>Locality: </b>
                  {selectedAdvisor.currentLocation}
                </Text>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeamSection;
