import './globals.css'
import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'
import { mulish } from './_utilities/fonts'
import HomebannerBG from './_components/svg/images/homeBannerBg'
import { Providers } from './provider'
import Header from './_components/header'
import React from 'react'
import ResponsiveSizeProvider from './context/responsive'

export const metadata = {
  title: 'HUSHH',
  description: 'Your data Your Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${mulish.variable} font-sans`} >
        <ResponsiveSizeProvider>
        <header className='h-full absolute z-50'>
          <Header />
        </header>
          <Providers>
              {children}
           </Providers>
        {/* <footer>
          <Footer />
        </footer> */}
        </ResponsiveSizeProvider>
      </body>
    </html>
  );
}
