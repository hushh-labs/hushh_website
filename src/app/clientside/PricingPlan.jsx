"use client";
import React, { useState } from "react";
import { Container, Divider, List, ListIcon, ListItem, Switch } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  Link,
  SimpleGrid,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ListIconTick from "../_components/svg/icons/listIconTick";
import Image from "next/image";
import BoxImage from "../_components/svg/keyHighlightImg.svg"
import ManageFinanceBox from '../_components/svg/managefinanceBox.svg';
import PricingFaq from "../_components/features/faq/pricingFaq";
import ContactForm from "../_components/features/contactForm";
import { useMediaQuery } from "react-responsive";
const planData = [
    {
      category: "Everyday Consumers",
      plans: [
        {
          name: "DEVELOPERS & ENGINEERS",
          heading: "Hushh Vault: Free for basic use",
          description: "A secure place for all your personal and business data",
          price: "$5",
          perMonth: "/mo",
        },
        {
          name: "EVERYDAY CONSUMERS",
          heading: "Hushh AI Assistant",
          description:
            "Your personal navigator in the digital world, making data decisions simple and personalized",
          price: "$10",
          perMonth: "/mo",
        },
      ],
    },
    {
      category: "Developers & Engineers",
      plans: [
        {
          name: "DEVELOPERS & ENGINEERS",
          heading: "Hushh SDK & API Access",
          description:
            "Fuelling the next wave of AI and data-driven applications with robust, easy-to-integrate tools",
          price: "$50",
          perMonth: "/mo",
        },
        {
          name: "DEVELOPERS & ENGINEERS",
          heading: "Developer Support & Marketplace",
          description:
            " Free access to a supportive community and marketplace to monetize or discover innovative solutions",
          price: "Free",
        },
      ],
    },
    {
      category: "Sales Agents",
      plans: [
        {
          name: "SALES AGENTS",
          heading: "Data Insights Dashboard",
          description:
            "Providing actionable insights to refine sales strategies and hit targets",
          price: "$250",
          perMonth: "/mo",
        },
        {
          name: "SALES AGENTS",
          heading: "Prospect Identification Tool",
          description:
            "Leveraging AI to uncover high-potential leads and opportunities",
          price: "$300",
          perMonth: "/mo",
        },
      ],
    },
    {
      category: "Creators & Aspiring Influence",
      plans: [
        {
          name: "CREATORS & ASPIRING INFLUENCE",
          heading: "Content Monetization Platform",
          description:
            "Revenue generated, empowering creators to earn from their unique content and insights",
          price: "8%",
          perMonth: "/comm",
        },
        {
          name: "CREATORS & ASPIRING INFLUENCE",
          heading: "Personal Brand Data Insights",
          description:
            "Offering deep analytics on audience engagement and preferences to tailor content effectively",
          price: "$300",
          perMonth: "/mo",
        },
      ],
    },
  ];

const workspacePlansData = [
    {
        category: "Everyday Consumers",
        plans: [
          {
            name: "DEVELOPERS & ENGINEERS",
            heading: "Hushh Vault: Free for basic use",
            description: "A secure place for all your personal and business data",
            price: "$5",
            perMonth: "/mo",
          },
          {
            name: "EVERYDAY CONSUMERS",
            heading: "Hushh AI Assistant",
            description:
              "Your personal navigator in the digital world, making data decisions simple and personalized",
            price: "$10",
            perMonth: "/mo",
          },
        ],
      },
      {
        category: "Developers & Engineers",
        plans: [
          {
            name: "DEVELOPERS & ENGINEERS",
            heading: "Hushh SDK & API Access",
            description:
              "Fuelling the next wave of AI and data-driven applications with robust, easy-to-integrate tools",
            price: "$50",
            perMonth: "/mo",
          },
          {
            name: "DEVELOPERS & ENGINEERS",
            heading: "Developer Support & Marketplace",
            description:
              " Free access to a supportive community and marketplace to monetize or discover innovative solutions",
            price: "Free",
          },
        ],
      },
      {
        category: "Sales Agents",
        plans: [
          {
            name: "SALES AGENTS",
            heading: "Data Insights Dashboard",
            description:
              "Providing actionable insights to refine sales strategies and hit targets",
            price: "$250",
            perMonth: "/mo",
          },
          {
            name: "SALES AGENTS",
            heading: "Prospect Identification Tool",
            description:
              "Leveraging AI to uncover high-potential leads and opportunities",
            price: "$300",
            perMonth: "/mo",
          },
        ],
      },
      {
        category: "Creators & Aspiring Influence",
        plans: [
          {
            name: "CREATORS & ASPIRING INFLUENCE",
            heading: "Content Monetization Platform",
            description:
              "Revenue generated, empowering creators to earn from their unique content and insights",
            price: "8%",
            perMonth: "/comm",
          },
          {
            name: "CREATORS & ASPIRING INFLUENCE",
            heading: "Personal Brand Data Insights",
            description:
              "Offering deep analytics on audience engagement and preferences to tailor content effectively",
            price: "$300",
            perMonth: "/mo",
          },
        ],
      },
];

const ClientPricingPlan = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);
    const [isYearly, setIsYearly] = useState(false);
    const [isMonthly, setIsMonthly] = useState(true);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [activePlanCategory, setActivePlanCategory] = useState('site'); // 'site' or 'workspace'
  
    const handleTabsChange = (index) => {
      setTabIndex(index);
      setActiveAccordionIndex(index);
    };
  
    const handleSwitchChange = () => {
      setIsYearly(!isYearly); // toggle the state on each click
      setIsMonthly(false);
    };
  
    const handlePlanCategoryChange = (category) => {
      setActivePlanCategory(category);
      setTabIndex(0);  
    };
  
  const renderPrice = (price, perMonth) => {
      if (price === "Free") return "Free"; // If price is "Free", return "Free"
  
      const priceNum = parseFloat(price.replace("$", ""));
      const yearlyPrice = isYearly ? priceNum * 12 : priceNum;
      const discountedPrice = isYearly ? yearlyPrice * 0.78 : priceNum; // Applying 22% discount if it's yearly, else use original price
      const total = Math.floor(discountedPrice); // Remove decimal part
  
      // Change perMonth text based on yearly toggle
      const durationText = isYearly ? "/yr" : perMonth;
      return `$${total}`; // Total price with updated duration text
  };
  
    const yearlyTextStyles = isYearly ? { color: "white" } : { color: "#717171" };
    const monthlyTextStyles = !isYearly
      ? { color: "white" }
      : { color: "#717171" };

  return (
    <>
      <Box p={{ base: 4, md: 8 }}>
        <VStack
          ml={{ base: "1rem", md: "5.5rem" }}
          spacing={2}
          mt={{md:"8rem", base:'5rem'}}
          mr={{ md:"50%", base:'0'}}
        >
          <Heading
            lineHeight={"32px"}
            display={"flex"}
            alignSelf={"flex-start"}
            textAlign={"left"}
            as={"h1"}
            color={"#FFFFFF"}
            fontSize={{ base: "0.85rem", md: "1.25rem" }}
            letterSpacing={"0.04rem"}
            fontWeight="500"
          >
            Pricing
          </Heading>
          <Heading
            as={"h2"}
            lineHeight={{ md: "90.28px", base: "40px" }}
            className="gradient"
            fontSize={{ base: "2.5rem", md: "4.625rem" }}
            fontWeight="700"
            alignSelf={"flex-start"}
            textAlign={"left"}
          >
            Find the right plan for your needs
          </Heading>
        </VStack>
      </Box>

      <Box gap={{base:'1rem', md:'0'}} mb={{md:'1rem', base:'0.2rem'}} mt={{md:'5rem', base:'2rem'}} px={{md:'7.5rem', base:'1.5rem'}} alignItems={'center'} align={'center'} alignSelf={'center'} alignContent={'center'} w={'100%'} display={'flex'}>
        <Box cursor={'pointer'} onClick={() => handlePlanCategoryChange('site')} gap={'0.5rem'} textAlign={'left'} flex={1} color={activePlanCategory === 'site' ? '#FFFFFF' : '#5A5A5A'}  display={'flex'} flexDirection={'column'}>
           <Text fontWeight={'500'} fontSize={{ md:'1rem', base:'0.9rem'}} lineHeight={'19.5px'} letterSpacing={'1.5px'}>Site plans</Text>
           <Text fontWeight={'600'} fontSize={{ md:'1.5rem', base:'0.75rem'}} lineHeight={{ md:'30px', base:'20px'}}>Build, publish, and host with ease</Text>
        </Box>
        <Box cursor={'pointer'} onClick={() => handlePlanCategoryChange('workspace')} gap={'0.5rem'} textAlign={'left'} flex={1} color={activePlanCategory === 'workspace' ? '#FFFFFF' : '#5A5A5A'}  display={'flex'} flexDirection={'column'}>
            <Text fontWeight={'500'} fontSize={{ md:'1rem', base:'0.9rem'}} letterSpacing={'1.5px'}>Workspace plans</Text>
            <Text fontWeight={'600'}fontSize={{ md:'1.5rem', base:'0.75rem'}} lineHeight={{ md:'30px', base:'20px'}}>Add a team and stage multiple sites</Text>
        </Box>
      </Box>
      <Box display={'flex'} mt={{md:'1rem', base:'0.5rem'}} px={{md:'7.5rem', base:'1.5rem'}}>
         <Divider borderStyle={'solid'} borderWidth={'2px'} borderColor={activePlanCategory === 'site' ? '#146EF5' : '#5A5A5A'} />
         <Divider borderStyle={'solid'} borderWidth={'2px'} borderColor={activePlanCategory === 'workspace' ? '#146EF5' : '#5A5A5A'} />
      </Box>
      
      <VStack
        mt={{ md: "7em", base: "2.5rem" }}
        textAlign={"left"}
        alignItems={"flex-start"}
        mx={{ md: "7.2rem" }}
        display={{md:'flex', base:'none'}}
        flexDirection={{base:'column', md:'column'}}
      >
        <Text
          mb={{ md: "1.5rem", base: "0.75rem" }}
          className="gradient"
          fontWeight={"600"}
          lineHeight={{ md: "52px", base: "35px" }}
          fontSize={{ md: "3.5rem", base: "2rem" }}
          letterSpacing={"0.56px"}
        >
        {activePlanCategory === 'site' ? 'Site plans' : 'Workspace plans'}
        </Text>
        <HStack gap={{ md: "20rem", base: "4rem" }}>
          <Text
            w={{md:"50%",base:'100%'}}
            lineHeight={"30px"}
            color={"#FFFFFF"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            {activePlanCategory === 'site' ? 
              'Our site plans provide easy 1-click publishing and hosting, right from inside our powerful visual designer' 
              : 
              'Our workspace plans provide easy 1-click publishing and hosting, right from inside our powerful visual designer'}
          </Text>
        <VStack> 
          <Box
            lineHeight={"22px"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
            display={"flex"}
            flexDirection={"row"}
            gap={"1rem"}
          >
            <Text color={"#717171"} style={monthlyTextStyles}>
              Billed monthly
            </Text>
            <Switch size="lg" onChange={handleSwitchChange} />
            <Text color="#717171" style={yearlyTextStyles}>
              Billed yearly
            </Text>
          </Box>
          <Text fontWeight={'400'} style={yearlyTextStyles} fontSize={'0.85rem'} lineHeight={'22px'}>(Save up to 22%)</Text>
        </VStack> 
        </HStack>
      </VStack>

      <HStack
        mt={{ md: "7em", base: "2.5rem" }}
        textAlign={{ md:"center", base:'center'}}
        alignItems={{ md:"flex-start"}}
        display={{ base:'flex', md:'none'}}
        flexDirection={{base:'column', md:'column'}}
      >
        <Text
          mb={{ md: "1.5rem", base: "0" }}
          className="gradient"
          fontWeight={"600"}
          lineHeight={{ md: "52px", base: "35px" }}
          fontSize={{ md: "3.5rem", base: "2rem" }}
          letterSpacing={"0.56px"}
        >
          {activePlanCategory === 'site' ? 'Site plans' : 'Workspace plans'}
        </Text>
        <VStack gap={{ md: "20rem", base: "4rem" }}>
          <Text
            w={'100%'}
            lineHeight={{ md:"30px", base:'20px'}}
            color={"#FFFFFF"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            {activePlanCategory === 'site' ? 
              'Our site plans provide easy 1-click publishing and hosting, right from inside our powerful visual designer' 
              : 
              'Our workspace plans provide easy 1-click publishing and hosting, right from inside our powerful visual designer'}
          </Text>
        <VStack> 
          <Box
            lineHeight={"22px"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
            display={"flex"}
            flexDirection={"row"}
            gap={"1rem"}
            mt={{base:'-2rem', md:'0'}}
          >
            <Text color={"#717171"} style={monthlyTextStyles}>
              Billed monthly
            </Text>
            <Switch size="lg" onChange={handleSwitchChange} />
            <Text color="#717171" style={yearlyTextStyles}>
              Billed yearly
            </Text>
          </Box>
          <Text fontWeight={'400'} style={yearlyTextStyles} fontSize={'0.85rem'} lineHeight={'22px'}>(Save up to 22%)</Text>
        </VStack> 
        </VStack>
      </HStack>

      <Box
        minW={"100%"}
        display={"flex"}
        textAlign={"left"}
        alignItems={{ md:"flex-start", base:'center'}}
        flexDirection={"column"}
      >
        <Tabs
          onChange={handleTabsChange}
          position="relative"
          variant="unstyled"
          mt={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TabList
            p={"0.5rem"}
            borderRadius={"8px"}
            border={"1px solid #222222"}
            minH={{ md:"4.125rem", base:'1.5rem'}}
            w={{ md:"52%", base:'100%'}}
            justifyContent={"space-between"}
          >
{(activePlanCategory === 'site' ? planData : workspacePlansData).map((category, index) => (              <Tab
                key={index}
                _selected={{
                  color: "white",
                  bg: "#363636",
                  borderRadius: "4px",
                }}
                color={"#898989"}
                lineHeight={{md:"22px", base:'14px'}}
                fontWeight={"600"}
                fontSize={{md:"15px", base:'10px'}}
              >
                {category.category}
              </Tab>
            ))}
          </TabList>

          <TabPanels mt={"2rem"}>
          {(activePlanCategory === 'site' ? planData : workspacePlansData).map((category, index) => (
              <TabPanel key={index}>
                <SimpleGrid
                  mx={{ md:"10rem", base:'0'}}
                  columns={{ base: 2, md: 2 }}
                  gap={{md:"8rem", base:'1rem'}}
                >
                  {category.plans.map((plan, idx) => (
                    <Box
                      flex={1}
                      display={"flex"}
                      textAlign={"center"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      gap={{ md: "1.75rem", base: "1rem" }}
                      justifyContent={'space-between'}
                      bg={"#131414"}
                      borderRadius={"2rem"}
                      p={{ md:"1.5rem", base:'1rem'}}
                      key={idx}
                      color={"white"}
                    >
                      <Box
                        bg={"#146EF5"}
                        w={{md:"max-content"}}
                        borderRadius={"4px"}
                      >
                        <Text
                          px={{ md:"1rem", base:'0.5rem'}}
                          py={{ md:"0.5rem", base:'0.2rem'}}
                          fontWeight="600"
                          lineHeight={"20px"}
                          fontSize={{ md: "0.875rem", base: "0.5rem" }}
                        >
                          {plan.name}
                        </Text>
                      </Box>
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "1.75rem", md: "4.125rem" }}
                        lineHeight={{ md: "79.2px", base: "40px" }}
                      >
                        {renderPrice(plan.price)}{"  "}
                        {plan.perMonth && !isTabletOrMobile && (
                          <span
                            style={{
                              color: "white",
                              marginLeft: "-0.75rem",
                              fontWeight: "600",
                              fontSize: "1.25rem",
                            }}
                          >
                            {plan.perMonth && (isYearly ? " /yr" : ' /mo')}
                          </span>
                        )}
                        {plan.perMonth && isTabletOrMobile && (
                          <span
                            style={{
                              color: "white",
                              fontWeight: "600",
                              fontSize: "1rem",
                            }}
                          >
                            {plan.perMonth && (isYearly ? " /yr" : ' /mo')}
                          </span>
                        )}
                      </Text>
                      <Text
                        lineHeight={"22px"}
                        fontWeight={"500"}
                        fontSize={{ md:"1.125rem", base:'0.85rem'}}
                      >
                        {plan.heading}
                      </Text>
                      <Text
                        h={{ md:"3rem"}}
                        lineHeight={{md:"28px", base:'18px'}}
                        fontWeight={"400"}
                        fontSize={{ md:"1rem", base:'0.65rem'}}
                      >
                        {plan.description}
                      </Text>
                      <Button
                        w={"100%"}
                        bg={"#146EF5"}
                        color={"white"}
                        borderRadius={"4px"}
                        fontWeight={'600'}
                        fontSize={{md:'1rem', base:'0.6rem'}}
                        _hover={{
                            color:'black',
                            bg:'white'
                        }}
                      >
                        Upgrade to Premium
                      </Button>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Box
          mt={{ base: "0.5rem", md: "1rem" }}
          gap={{ md: "2rem", base: "1rem" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            lineHeight={{ md:"36px", base:'20px'}}
          >
            All prices are in USD and charged per site with applicable taxes
            added at checkout
          </Text>
          <Button fontSize={{md:"1rem", base:"0.8rem"}} rightIcon={<ChevronDownIcon />}>
            View all plan features
          </Button>
        </Box>
      </Box>
      
      <Box mx={{ md:'6rem', base:'0'}} mb={'1rem'} bg={'#131414'} gap={{ md:'5rem', base:'1rem'}} minW={{ md:'85%', base:'100%'}} mt={{md:'6rem', base:'4rem'}} display={'flex'} flexDirection={'row'}>
        <VStack ml={{ md:'2rem', base:'0'}} mx={{base:'1rem'}} gap={{ md:'1rem', base:'0rem'}} textAlign={'left'} alignItems={'flex-start'} my={{md:'4rem', base:'2rem'}}>
          <Text className="color-gradient" fontWeight={'600'} fontSize={{ md:'1rem', base:'1rem'}} lineHeight={'1rem'} letterSpacing={'0.255'}>HUSHH</Text>
          <Text className="gradient" fontSize={{md:'3.75rem', base:'2rem'}} fontWeight={'600'} lineHeight={{ md:'63.65px', base:'45px'}}>Key Highlights</Text>
          <VStack display={{md:'none', base:'block'}} alignItems={'center'} justify={'center'} align={'center'} alignSelf={'center'} >
             <Image src={BoxImage} alt="BoxImageHighlight" style={{width:'100%', height:'100%'}}/>
          </VStack>
          <List spacing={{ md:10, base:5}} color={"white"} mt={'1rem'}>
            <ListItem display={"flex"}>
              <Box pr={{ md:'1rem', base:'0.5rem'}}>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={{ md:'32px', base:'32px'}}
                >
                  Simplicity & Transparency
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={{ md:'30px', base:'20px'}}>
                  Pricing is designed to be straightforward across all services,
                  ensuring users can easily select the tools that best fit their
                  needs without encountering hidden fees.
                </Text>
              </VStack>
            </ListItem>
            <ListItem display={"flex"}>
              <Box pr={{ md:'1rem', base:'0.5rem'}}>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={'32px'}
                >
                  Scalable Solutions
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={{ md:'30px', base:'20px'}}>
                  From free basic access to premium options, services are built to scale with the growth of individuals & businesses, ensuring long-term support
                </Text>
              </VStack>
            </ListItem>
            <ListItem display={"flex"}>
              <Box pr={{ md:'1rem', base:'0.5rem'}}>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={'32px'}
                >
                  Community Focus
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={{ md:'30px', base:'20px'}}>
                  Beyond the tools and platforms, Hushhh fosters a community for support, learning, and collaboration, enhancing the value of every subscription.
                </Text>
              </VStack>
            </ListItem>
          </List>
        </VStack>
        <VStack display={{md:'flex', base:'none'}} alignContent={'flex-end'} alignItems={'flex-end'} alignSelf={'flex-end'} w={'100%'} h={'80%'} >
           <Image src={BoxImage} alt="BoxImageHighlight"/>
        </VStack>
      </Box>

      <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          display={{ base: 'flex' }}
          gap={{md:'7rem'}}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={{ md:'1rem', base:'0.5rem'}} flex={1}>
            <Text
              className="default-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={{ md:"1rem", base:'20px'}}
              fontWeight={"600"}
              fontSize={{ md: "1rem", base: '0.75rem' }}
            >
              HUSHH
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"600"}
              lineHeight={{ md: "63.3px", base: "41.2px" }}
            >
              Final Takeaway
            </Text>
            <Box display={'flex'} flexDirection={'column'} gap={{ md: '1rem', base: '0rem' }}>
              <Text fontSize={{md:'1rem', base:'0.8rem'}} fontWeight={'500'} color={'#ABABAB'} lineHeight={{ md:'36px', base:'25px'}}>Hushhh’s diverse pricing strategy aims to democratize access to powerful data and AI tools, making them accessible to a wide audience. Whether you’re a consumer trusting us with your data, a developer building the next big app, a sales agent aiming for your next target, or a creator curating unique experiences, Hushhh provides the tools, support, and platform to achieve your goals. With Hushhh, embrace a smarter, more secure, and personalized digital future.</Text>
            </Box>
          </Box>
          <Box my={{base:'1rem'}} display={'flex'} flexDirection={'column'} flex={1} gap={'1rem'}>
            <Image src={ManageFinanceBox} alt="ManageFinanceBox" />
            <Text fontSize={{ md: '1rem', base: '0.75rem' }} color={'#ABABAB'} lineHeight={{ md: '36px', base: '18px' }}>This summary aims to convey Hushhh’s commitment to delivering value through innovative, user-centric products and services, ensuring clear communication of pricing and offerings to foster trust and loyalty across all user segments.</Text>
          </Box>
      </HStack>
      <PricingFaq/>
      <ContactForm/>
    </>
  )
}

export default ClientPricingPlan