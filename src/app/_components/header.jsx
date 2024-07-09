"use client";
import React, { useRef, useState, useEffect } from "react";
import HushhHeaderLogo from "./svg/hushhHeaderLogo";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Container, Flex, Text, Badge } from "@chakra-ui/react";
import { useResponsiveSizes } from "../context/responsive";
import { Bars3Icon } from "./svg/icons/hamburgerMenuIcon";
import { CloseMenuIcon } from "./svg/icons/closeMenuIcon";
import SearchBar from "./features/searchBar";
import { ChevronArrowIcon } from "./svg/icons/chevronArrowIcon";
import HushhWalletIcon from "./svg/hushhWalletIcon";
import HushhButtonIcon from "./svg/hushhButton";
import VibeSearchIcon from "./svg/vibeSearch";
import ChromeExtentionLogo from "./svg/ChromeExtensionLogo";
import ConciergeApp from "./svg/conciergeApp";
import { usePathname, useRouter } from 'next/navigation'
import ValetChat from "./svg/valetChat";
import VibeSearchApi from "./svg/vibeSearchApi";
import { headerAssets } from "./svg/icons/HeaderIcons/headerAssets";
import { animateScroll as scroll } from "react-scroll";
import { FiUser, FiYoutube } from 'react-icons/fi';
import { useMediaQuery } from "react-responsive";
import SmallVibeSearch from "./svg/smallVibeSearch.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

  const { isTablet, isMobile, isDesktop } = useResponsiveSizes();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsSubmenu, setProductsSubmenu] = useState(false);
  const [productsSubmenuMobile, setProductsSubmenuMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For the dropdown
  const [userEmail, setUserEmail] = useState('');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const router = useRouter();

  const noHeaderPaths = ['/vivaConnect', '/viva-connect', '/viva-connect/qrPage', '/qrCodePage'];

  const shouldShowHeader = !noHeaderPaths.includes(pathname);
  const notify = () => toast("This Product is Coming Soon!");

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const { data } = await supabase.auth.getSession(); // Get the session data

  //     console.log('data:',data);
  //     console.log('user email: ',data?.session?.user?.email);

  //     if (data.session) {
  //       setIsLoggedIn(true); 
  //       const { data: userIdentities } = await supabase.auth.getUserIdentities();
  //       if (userIdentities) {
  //         const userIdentity = userIdentities.identities[0]; 
  //         const email = userIdentity.email; 
  //         setUserEmail(email); 
  //       }
  //     } else {
  //       setIsLoggedIn(false); 
  //     }
  //    console.log('Is LoggedIn: ',isLoggedIn)
  //   };
  //   checkLoginStatus(); 
  // }, [supabase]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const scrollToContactForm = () => {
    window.scrollTo({
      top: document.getElementById("contact-form").offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 0) {
        setHeaderBackground("black");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    scroll.scrollTo(7500);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(3350);
  };

  const handleMenuIconToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleSubmenuClick = () => {
    setProductsSubmenuMobile(false);
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    window.open("https://hushh-button.vercel.app/user/login", "_blank");
  };

  return (
    <>
  {shouldShowHeader &&
    <div className={`w-full z-1000`} style={{ background: headerBackground }}>
      <div className=" flex items-center justify-between w-full px-6 py-2 z-1000 md:px-32 md:py-5">
        <div className="">
          <Link href="/">
            <HushhHeaderLogo />
          </Link>
        </div>
        {!isDesktop ? (
          <div className="w-full flex py-2 justify-end">
            <Container display={"flex"} gap={"1rem"}>
              <SearchBar />
              <div className=" text-white" onClick={handleMenuIconToggle}>
                {isMenuOpen ? <CloseMenuIcon /> : <Bars3Icon />}
              </div>
            </Container>
          </div>
        ) : (
          <div className="w-max">
            <div className="text-white flex justify-between gap-12 px-7 md:gap-10">
              {/* <Link
                href="/"
                className={`link ${pathname === '/' ? 'gradient-text' : ''}`}
                style={{ zIndex: "1000" }}
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                HOME
              </Link> */}
              <Link
                href="/about"
                // style={{ zIndex: "1000" }}
                className={`link ${pathname === '/about' ? 'gradient-text' : ''}`}
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 group"
                onMouseEnter={() => setProductsSubmenu(true)}
              >
                PRODUCTS
                <ChevronArrowIcon className="group-hover:rotate-0 rotate-180 transition-all duration-300" />
              </Link>
              <Link
                href="https://hushh-labs.github.io/hushh-labs-blog/"
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                LABS
              </Link>
              <Link
                href="/pricingPlans"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/pricingPlans' ? 'gradient-text' : ''}`}
              >
                PRICING
              </Link>
              <Link
                href="/outbound-services"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/outbound-services' ? 'gradient-text' : ''}`}
              >
                SERVICES
              </Link>
              <Link
                href="/UserGuide"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/UserGuide' ? 'gradient-text' : ''}`}
              >
                GUIDE
              </Link>
              <Link
                href="/contact-us"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/contact-us' ? 'gradient-text' : ''}`}
              >
                CONTACT US
              </Link>
            </div>
            {productsSubmenu && (
              <div
                className="bg-white z-100 flex flex-col gap-4 absolute pl-8 pr-8 mt-4 pt-5 pb-7 rounded-2xl shadow-lg shadow-[#A7AEBA1F]"
                onMouseEnter={() => setProductsSubmenu(true)}
                onMouseLeave={() => setProductsSubmenu(false)}
              >
                <p className="text-xs text-fontColor2 font-semibold">
                  HUSHH PRODUCTS
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 flex flex-col gap-2">
                    <Link
                      href={"/products/hushhButton"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 items-start hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <HushhButtonIcon size={24} />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Button</h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Share data for personalized <br /> recommendations.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/browserCompanion"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ChromeExtentionLogo className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">
                          Hushh Browser Companion
                        </h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Enhanced recommendations &<br /> impactful marketing.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/developerApi"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <VibeSearchApi className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Developer API</h1>
                        <p className="text-sm font-medium text-fontColor3">
                           Secure, trusted & incentivized way of <br/> relaying valuable personal information.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/conciergeApp"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ConciergeApp className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Concierge App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Speak your wish, get luxury <br /> redefined: Hushh
                          Concierge
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/vibeSearch"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <VibeSearchIcon className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">VIBE Search App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Find perfect items to express your <br />{" "}
                          individuality in just one click.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <Link
                      href={"/products/hushhWalletApp"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 items-start hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <HushhWalletIcon className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Wallet App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Customer User Flow + Client Advisor User Flow
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/hushhValetChat"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ValetChat className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Valet Chat</h1>
                        <p className="text-sm font-medium text-fontColor3">
                          Valet Chat: Ditch receipts, unlock <br /> insights.
                        </p>
                      </div>
                    </Link>
                    <ToastContainer />  
                    <Link
                      href={"#"}
                      onClick={notify}
                      // onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                    
                      <div className="">
                        <VibeSearchApi className="w-6 h-6" />
                      </div>
                      <div className="flex-col">
                        <h1 className="font-semibold flex-row">
                          VIBE Search APIs
                        <Badge className="gradient-bg p-1" ml={4} borderRadius={'0.6rem'} fontSize={'0.6rem'} color={'white'}>Coming Soon !</Badge>
                        </h1>
                        
                        <p className="text-sm font-medium text-fontColor3">
                          List products on Vibe Search with <br /> management
                          and analytics.
                        </p>
                      </div>
                    </Link>
                    <ToastContainer/>  
                    <Link
                      href={"#"} 
                      onClick={notify}
                      // onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 group hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <headerAssets.VibeSearchMarketplace className="w-6 h-6" />
                      </div>
                      <div className="flex-col">
                        <h1 className="font-semibold flex-row">
                          VIBE Search Marketplace
                          <Badge className="gradient-bg p-1" ml={4} borderRadius={'0.6rem'} fontSize={'0.6rem'} color={'white'}>Coming Soon !</Badge>
                        </h1>
                        <p className="text-sm font-medium text-fontColor3">
                          News and updates
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="">
          { isDesktop && (
            <div className="login">
              <SearchBar />
              <Button
                border={"1px solid #606060"}
                borderRadius={"5px"}
                w={"10.75rem"}
                h={"3.125rem"}
                // color={theme.colors._white}
                className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                lineHeight={"50px"}
                letterSpacing={"0.5rem"}
                _hover={{
                  background:
                    "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                  color: "white",
                  border: "none",
                }}
                onClick={handleLoginClick}
              >
                LOGIN
              </Button>
            </div>
          )}
        </div> 
      </div>

      <div className="w-full justify-end flex px-6 z-1000">
        {isMenuOpen && (isTablet || isMobile )? (
          <div className={`w-full flex flex-col gap-1`} ref={menuRef}>
            <div className="text-white w-full flex items-end flex-col text-center">
              {/* <Link
                href="/"
                className="py-2 border border-myBorder bg-black rounded-t w-1/2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link> */}
              <Link
                href="/about"
                className="py-2 w-1/2 border border-myBorder border-t-0 bg-black"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                onClick={() => setProductsSubmenuMobile(!productsSubmenuMobile)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0 "
              >
                <div className="flex gap-2 items-center justify-center">
                  PRODUCTS
                  <ChevronArrowIcon
                    className={`${productsSubmenuMobile ? "" : "rotate-180"} group-hover:rotate-0 transition-all duration-300`}
                  />
                </div>
              </Link>
              <div className="w-full z-10000">
                {productsSubmenuMobile && (
                  <div className=" flex flex-col w-full items-end">
                    {/* <p className="text-xs text-fontColor2 font-semibold">HUSHH PRODUCTS</p> */}

                    <div className=" flex flex-col w-3/4 ">
                      <Link
                        href={"/products/hushhButton"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <HushhButtonIcon size={24} />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Button</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Share data for personalized <br /> recommendations.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/browserCompanion"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ChromeExtentionLogo className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">
                            Hushh Browser Companion
                          </h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Enhanced recommendations &<br /> impactful marketing.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/conciergeApp"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ConciergeApp className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Concierge App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Speak your wish, get luxury <br /> redefined: Hushh Concierge</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/vibeSearch"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <VibeSearchIcon className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">VIBE Search App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Find perfect items to express your <br /> individuality in just one click.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/hushhWalletApp"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0"
                      >
                        <div className="">
                          <HushhWalletIcon className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Wallet App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Customer User Flow + Client Advisor User Flow</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/developerApi"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <VibeSearchApi className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Developer API</h1>
                        </div>
                      </Link>
                      <Link
                        href={"/products/hushhValetChat"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ValetChat className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Valet Chat</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Valet Chat: Ditch receipts, unlock <br /> insights.</p> */}
                        </div>
                      </Link>
                      <ToastContainer/>
                      <Link
                        href={"#"}
                        onClick={notify}
                        // onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        
                        <div className="">
                          <VibeSearchApi className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">VIBE Search APIs</h1>
                          <Badge colorScheme='purple'>New</Badge>
                        </div>
                      </Link>
                      <ToastContainer/>
                      <Link
                        href={"/"}
                        onClick={notify}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <headerAssets.VibeSearchMarketplace className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">
                            VIBE Search Marketplace
                          </h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>News and updates</p> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/pricingPlans"
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/UserGuide"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                GUIDE
              </Link>
              <Link
                href="https://hushh-labs.github.io/hushh-labs-blog/"
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
                onClick={() => setIsMenuOpen(false)}
              >
                LABS
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                CONTACT US
              </Link>
              {/* <ScrollLink
                to="contact-form"
                spy={true}
                smooth={true}
                duration={7000}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToContactForm();
                }}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                CONTACT US
              </ScrollLink> */}
              <Link
                href="/"
                className="py-2 w-1/2 border border-myBorder border-t-0 bg-black rounded-b"
                // onClick={() => setIsMenuOpen(false) }
                onClick={handleLoginClick}
              >
                LOGIN
              </Link>
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  }  
    </>
  );
};

