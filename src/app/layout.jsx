import './globals.css'
import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'
import { mulish } from './_utilities/fonts'
import HomebannerBG from './_components/svg/images/homeBannerBg'
import Header from './_components/header'
export const metadata = {
  title: 'HUSHH',
  description: 'Your data Your Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${mulish.variable} font-sans`} >
        <header className='h-full absolute z-50'>
          <Header />
        </header>
        <div className="mt-[85px] z-1 bg-lightGreen">
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
