import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { mulish } from "./_utilities/fonts";
import HomebannerBG from "./_components/svg/images/homeBannerBg";
import { Providers } from "./provider";
import Header from "./_components/header";
import React from "react";
import ResponsiveSizeProvider from "./context/responsive";
import ContactForm from "./_components/features/contactForm";
import HeaderComponent from "./_components/features/HeaderComponent";
import emailjs from "@emailjs/browser";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title:{
     default:'HUSHH',
     template:"%s",
  },
  description: {
    template:'%s',
    default:"Your Data Your Business",
  },
  keywords:{
    template:'%s',
    default:'Hushh, Hush, User Data API business,Hushh Button, Hushh Wallet App, Hushh Browser Companion, Hushh For Students, Hushh Valet Chat, Valet Chat, Vibe Search, Concierge App',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1PDGMHH7CL"></script>
      <GoogleTagManager gtmId="G-1PDGMHH7CL"/>
      <meta name="google-site-verification" content="2yMPgnyqy54zZFkGkUxbtKD_9R60gWhe5Hk-DTYff9M" />
      <head>

      </head>

      <body
        style={{ backgroundColor: "black" }}
        className={`${mulish.variable} font-sans`}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/fbf5d1e1-066c-4f35-a420-7128eae2130c/webchat/config.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>

        <ResponsiveSizeProvider>
          <header className="h-[90px] w-full absolute z-50">
            <HeaderComponent />
          </header>
          <NextTopLoader
            color="red"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='
                      <div class="bar" role="bar">
                        <div class="peg">
                        </div>
                      </div> 
                      <div class="spinner" role="spinner">
                        <div class="spinner-icon">
                        </div>
                      </div>
                      '
            zIndex={1600}
            showAtBottom={false}
          />
          {" "}
          <div className="">
            <Providers>{children}</Providers>
          </div>
        </ResponsiveSizeProvider>
      </body>
    </html>
  );
}
