'use client';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FooterComponent from "./FooterComponent";
import CircelFormShadow from "../../_components/svg/circleFormShadow.svg";
import Image from "next/image";
import BigCircleFormShadow from "../../_components/svg/BigCircleFormShadow.svg";
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react'

emailjs.init('_TMzDc8Bfy6riSfzq');

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const form = useRef();

  const [ firstName , setFirstName ] = useState('');
  const [ lastName , setLastName ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ number , setNumber ] = useState('');
  const [ subject , setSubject ] = useState('');
  const [ message , setMessage ] = useState('');

  const toast = useToast()

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = 'service_kwvlp08';
    const templateId = 'template_nc0x47v';
    const user_Id = '9KjZ-7TNPYvuqx3as';
  
    const templateParams = {
      from_name: firstName,
      from_lname: lastName,
      from_email: email,
      to_name:'Manish Sainani',
      message: message,
      subject:subject,
      number:number,
    }
    try {
      const response = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams,
        user_Id
      );

      toast({
        title: 'Form Submitted.',
        description: "Thank you for reaching out to us",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      setFirstName('');
      setLastName('');
      setEmail('');
      setNumber('');
      setMessage('');
      setSubject('');
    } catch (error) {
      console.error('Sending mail FAILED...', error.text);
    }
  };


  return (
    <>
      <div className="relative"  id="contact-form">
        <div className="relative z-10">
          <Container
            id="contact-form"
            maxW={{ md: "74rem" }}
            height={{ md: "667px" }}
            p={"1rem"}
            display={"flex"}
            flexDirection={{ base: 'column', md: 'row' }}
            bg={"#1D1D1D"}
            mt={{ md: '5rem', base: '2rem' }}
            zIndex={10}
          >
            <Box
              p={"2rem"}
              className="new-gradient-bg"
              borderRadius={"0.5rem"}
              flexDirection={"column"}
              display={'flex'}
              flex={1}
              position={'relative'}
            >
              <HStack
                textAlign={"left"}
                alignItems={"left"}
                flexDirection={"column"}
                mb={{ md: "6rem", base: '2rem' }}
              >
                <Text
                  color={"#FFFFFF"}
                  fontWeight={"600"}
                  fontSize={{ md: "3.75rem", base: '2rem' }}
                  lineHeight={{ base: "28px", md: "55px" }}
                >
              Connect with hushh
            </Text>
            <Text color={"#C9C9C9"}>Say something to reach out to us</Text>
          </HStack>
          <HStack
            gap={{ md:"3rem", base:'0.5rem'}}
            textAlign={"left"}
            alignItems={"left"}
            flexDirection={"column"}
            color={"#FFFFFF"}
            
          >
            <Text>info@hush1one.com</Text>
            <a href="tel:+14252969050"><Text>+14252969050</Text></a>
            <Text>
            Hushh.ai <br></br>
            1021 5th St W <br></br>
            Kirkland, WA 98033
            </Text>

          </HStack>
          <Image src={CircelFormShadow} alt="CircelFormShadow" style={{position:'absolute',zIndex:'7', top:'430px',right:'80px',bottom:'0'}}/>
            <Image src={BigCircleFormShadow} alt="BigCircleFormShadow" style={{position:'absolute',zIndex:'7', right:'0',bottom:'0'}}/>
        </Box>

            {/* Contact Form */}
            <Box  p={{ md: "4rem", base: '1rem' }} flex={1.75} display={"flex"}>
              <form id="form" /*onSubmit={sendEmail} */ style={{ color: "white" }}>
                <HStack display={{ base: 'block', md: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} gap={{ md: "2rem", base: '1rem' }} mb={{ md: "2rem", base: '1rem' }}>
                  <Stack gap={{ md: "1rem", base: '0.5rem' }} mb={{ base: '1rem' }}>
                    <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>First Name</Text>
                    <Input
                      variant="unstyled"
                      size={'sm'}
                      w={'12rem'}
                      borderBottom="1px solid white"
                      {...register("firstName", { required: true, maxLength: 100 })}
                      placeholder="First Name"
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} // Update state on change
                    />
                  </Stack>

                  <Stack gap={{ md: "1rem", base: '0.5rem' }} mb={{ base: '1rem' }}>
                    <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Last Name</Text>
                    <Input
                      variant="unstyled"
                      size={'sm'}
                      w={'12rem'}
                      borderBottom="1px solid white"
                      {...register("lastName", { required: true, maxLength: 100 })}
                      placeholder="Last Name"
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} // Update state on change
                    />
                  </Stack>
                </HStack>

                <HStack display={{ base: 'block', md: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} gap={{ md: "2rem", base: '1rem' }} mb={{ md: "2rem", base: '1rem' }}>
                  <Stack gap={{ md: "1rem", base: '0.5rem' }} mb={{ base: '1rem' }}>
                    <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Email</Text>
                    <Input
                      variant="unstyled"
                      size={'sm'}
                      w={'12rem'}
                      borderBottom="1px solid white"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}                      
                      placeholder="@email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} // Update state on change
                    />
                  </Stack>
                  <Stack gap={{ md: "1rem", base: '0.5rem' }} mb={{ base: '1rem' }}>
                    <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Phone Number</Text>
                    <Input
                     variant="unstyled"
                     size={'sm'}
                     w={'12rem'}
                     borderBottom="1px solid white"
                      {...register("number", {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                      })}
                      placeholder="number"
                      value={number} 
                      onChange={(e) => setNumber(e.target.value)}

                    />
                  </Stack>
                </HStack>

                <HStack
                  mb={"2rem"}
                  py={"1rem"}
                  display={"flex"}
                  alignItems={"left"}
                  flexDirection={"column"}
                >
                  <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Select Subject: </Text>
                  <RadioGroup defaultValue="ProductInquiry">
                    <HStack display={{ md: 'flex', base: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} spacing={{ md: "2rem", base: '1rem' }} align={"stretch"}>
                      <Radio
                        {...register("subject", { required: true })}
                        colorScheme="white"
                        name="subject"
                        onChange={(e) => setSubject('Explore Hushh Products')}
                      >
                        <Text fontSize={'0.75rem'}>Explore Hushh Products</Text>
                      </Radio>
                      <Radio
                        {...register("subject", { required: true })}
                        colorScheme="white"
                        name="subject"
                        className="radio-option"
                        // value='subject2'
                        onChange={(e) => setSubject('Enhance my client')}
                      >
                        <Text fontSize={'0.75rem'}>Enhance my client</Text>
                      </Radio>
                      <Radio
                        {...register("subject", { required: true })}
                        colorScheme="white"
                        name="subject"
                        // value='subject3'
                        onChange={(e) => setSubject('Partner with Hushh')}
                      >
                        <Text fontSize={'0.75rem'}>Partner with Hushh</Text>
                      </Radio>
                      <Radio
                        {...register("subject", { required: true })}
                        colorScheme="white"
                        // value={subject}
                        onChange={(e) => setSubject('Get Support')}
                        name="subject"
                        className="radio-option"
                      >
                        <Text fontSize={'0.75rem'}>Get Support</Text>
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
                <HStack mb={{ md: "4rem", base: '2rem' }} alignItems={"left"} flexDirection={"column"}>
                  <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Message</Text>
                  <Textarea
                    h={"6.25rem"}
                    w={{ base: '15.625rem', md: '100%' }}
                    placeholder="Type your message here"
                    {...register("message", { required: true })}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </HStack>
                <HStack justifyContent="flex-end" w={"100%"}>
                  <Button
                    type="submit"
                    bg={"transparent"}
                    px={"2rem"}
                    py={"1.25rem"}
                    border={"3px solid #606060"}
                    borderRadius={"2px"}
                    _hover={{
                      background:
                        "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                      border:'none'
                    }}
                    onClick={(e) => {sendEmail(e)}}
                  >
                    <Text
                      color={"white"}
                      fontSize={"1rem"}
                      letterSpacing={"0.29rem"}
                      lineHeight={"28px"}
                    >
                      HUSHH IT!
                    </Text>
                  </Button>
                </HStack>
              </form>
            </Box>
          </Container>
        </div>
        <div className="z-1 absolute top-2/3 w-full">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
