import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import extendedTheme from "../theme";
import React from "react";
import TeamSection from "../_components/features/teamSection";
import AboutGroupPhoto from "../_components/svg/aboutImages/AboutGroupPhoto.svg";
import AboutOfficePhoto from "../_components/svg/aboutImages/AboutOfficePhoto.svg";
import AboutDockPhoto from "../_components/svg/aboutImages/AboutDockPhoto.svg";
import Image from "next/image";
import AboutMission from "../_components/svg/aboutImages/AboutMission.svg";
import AboutVision from "../_components/svg/aboutImages/AboutVision.svg";
import ContactForm from "../_components/features/contactForm";
import AboutFaq from "../_components/features/faq/aboutFaq";
import Head from "next/head";

export const metadata = {
  title: "Hushh | About Our Data Empowerment Mission",
  description:
    "Intelligence as a service powered by your Data - We're user data api business",
  keywords:
    "HUSHH, hushh, Manish Sainani - Founder and CEO, Justin Donaldson - Co-founder, Advisors",
};

export default function About() {
  const gradient = "linear(63.68deg, #ADA785, #D6D3C2)";

  return (
    <>
      <div className="w-full">
        <Box
          w={"100%"}
          h={"100%"}
          pt={"10.5rem"}
          px={{ base: "1.5rem", md: "6.25rem" }}
          background={"black"}
          fontFamily={"Figtree"}
          mb={{ base: "2rem", md: "10.5rem" }}
        >
          <div className="md:flex md:justify-between md:gap-36">
            <div className="md:flex-1 w-full">
              <Heading
                as={"h1"}
                fontWeight={"300"}
                fontSize={"6rem"}
                lineHeight={"6rem"}
                letterSpacing={"-6%"}
              >
                <Text color={"#ADA785"}>About</Text>
                <Text color={extendedTheme.colors.white}>hushh</Text>
              </Heading>
              <div className="pt-24 text-fontColor4 pb-8 leading-9">
                At Hushh, we believe your data is your most valuable asset.
                That's why we're building the tools to put you back in the
                driver's seat. We envision a world where you have complete
                control over your digital identity, choosing how your data is
                used and deriving true benefit from it.
              </div>
              <div className="flex flex-col gap-16">
                <div className="">
                  <div className="pb-5 flex items-center gap-10">
                    <Text
                      bgGradient={gradient}
                      bgClip={"text"}
                      fontSize={"6xl"}
                      width={"11.25rem"}
                    >
                      86k+
                    </Text>
                    <p className="text-fontColor4">LinkedIn Followers</p>
                  </div>
                  <hr className="h-[1px] bg-gradient-to-r from-lineGradient1 via-lineGradient2 to-lineGradient3" />
                </div>
                <div className="">
                  <div className="pb-5 flex items-center gap-10">
                    <Text
                      bgGradient={gradient}
                      bgClip={"text"}
                      fontSize={"6xl"}
                      width={"11.25rem"}
                    >
                      8+
                    </Text>
                    <p className="text-fontColor4">Products</p>
                  </div>
                  <hr className="h-[1px] bg-gradient-to-r from-lineGradient1 to-opacity-0 via-lineGradient2 to-opacity-87 via-opacity-100 to-lineGradient3" />
                </div>
                <div className="">
                  <div className="pb-5 flex items-center gap-10">
                    <div className="flex items-center gap-2.5 w-[11.25rem]">
                      <Text
                        bgGradient={gradient}
                        bgClip={"text"}
                        fontSize={"6xl"}
                      >
                        20
                      </Text>
                      <div className=" text-fontColor4">
                        <p>(Q4)</p>
                        <p>2021</p>
                      </div>
                    </div>
                    <p className="text-fontColor4">
                      Team
                      <br />
                      Member and Growing
                    </p>
                  </div>
                  <hr className="h-[1px] bg-gradient-to-r from-lineGradient1 to-opacity-0 via-lineGradient2 to-opacity-87 via-opacity-100 to-lineGradient3" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 mt-12 md:mt-0">
              <div className="">
                <Image src={AboutGroupPhoto} alt="Group Photo" />
              </div>
              <div className="flex flex-col md:flex-row gap-10 md:items-start items-center">
                <div className="">
                  <Image src={AboutOfficePhoto} alt="Office Photo" />
                </div>
                <div className="">
                  <Image src={AboutDockPhoto} alt="Dock Photo" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-row flex flex-col gap-12 pt-12 md:pt-0 md:gap-36 md:-translate-y-40">
            <div className="md:w-[25rem] flex flex-col gap-5 ">
              <p className=" text-fontColor5 font-bold text-[22px]">History</p>
              <p className=" text-fontColor4 font-medium leading-9">
                Hushh arose from a deep understanding of the modern digital
                landscape. In a world where our data is constantly collected,
                analyzed, and often used without our full knowledge or consent,
                we recognized the urgent need for change. <br />
                Our journey began with a simple question: What if individuals
                weren't just data points, but active owners of their digital
                selves? This question sparked a movement. We set out to develop
                the technology and tools to make this vision a reality. <br />
                Hushh is not just about software; it's about a shift in power
                dynamics. We're dedicated to a future where everyone has the
                tools to reclaim their data, using it for their own empowerment
                and benefit. Our history is still being written, and we invite
                you to be part of the next chapter.
              </p>
            </div>
            <div className="md:w-[25rem] flex flex-col gap-5 ">
              <p className=" text-fontColor5 font-bold text-[22px]">
                Growing team
              </p>
              <p className=" text-fontColor4 font-medium leading-9">
                Hushh isn't just about technology; it's about the passionate
                people behind it. Our team is a dynamic mix of privacy
                champions, skilled engineers, creative designers, and visionary
                thinkers. We're united by a shared belief in the power of
                individual data control and a relentless drive to innovate.
                We're constantly seeking out bright minds and diverse
                perspectives to join our mission. If you're passionate about
                data privacy and empowerment, cutting-edge technology,
                disrupting established industries, and making a real-world
                impact, then Hushh might be the perfect place for you. Explore
                our current openings [Link to careers page if applicable] and
                become part of the team that's changing the data landscape, one
                user at a time.
              </p>
            </div>
          </div>
          <div className="text-center md:mt-0 mt-24">
            <VStack>
              <Text
                as={"h2"}
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                CORE VALUE COMPANY
              </Text>
              <Text
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Our Mission and Vision
              </Text>
              <Text
                mt={"2rem"}
                textAlign={"center"}
                color={extendedTheme.colors.secondary}
              >
                Building a world where data works for you, not against you.
              </Text>
            </VStack>
            <div className="flex flex-col md:flex-row gap-12 md:gap-36 mt-20 md:mt-40 mb-24 md:mb-36">
              <div className="flex flex-col gap-10">
                <Image src={AboutMission} alt="aboutMission" />
                <div className="md:w-[25rem] text-left">
                  <p className=" text-fontColor5 font-bold text-[22px]">
                    Our Mission
                  </p>
                  <p className=" text-fontColor4 font-medium leading-9">
                    Hushh's mission is to empower individuals to reclaim,
                    understand, and harness the full potential of their personal
                    data within a secure and privacy-centric ecosystem. We
                    provide tools that centralize data, offer insights into its
                    use, and create avenues for individuals to benefit from
                    their own information while maintaining complete control
                    over their privacy. Hushh aims to shift the balance of
                    power, transforming data from a corporate tool into a
                    catalyst for individual empowerment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <Image src={AboutVision} alt="aboutVision" />
                <div className="text-left">
                  <p className=" text-fontColor5 font-bold text-[22px]">
                    Our Vision
                  </p>
                  <p className=" text-fontColor4 font-medium leading-9">
                    We envision a future where the responsible and ethical use
                    of personal data leads to unprecedented levels of
                    personalization, convenience, and self-driven opportunity,
                    all while prioritizing individual privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TeamSection />
        </Box>
        <AboutFaq />
        <ContactForm />
      </div>
    </>
  );
}
