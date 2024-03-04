'use client'
import React from 'react'
import HushhHeaderLogo from './svg/hushhHeaderLogo'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import theme from '../theme'
import { useResponsiveSizes } from '../context/responsive'

const Header = () => {
    const { isMobile } = useResponsiveSizes()

    return (
        <div className='fixed top-0 z-50'>
            <div className=' bg-myBG w-screen flex justify-between items-center px-4 py-2 md:px-32 md:py-10'>

                <div className="">
                    <HushhHeaderLogo />
                </div>
                {!isMobile && (
                <div className="text-white flex gap-20">
                    <Link href='/'>HOME</Link>
                    <Link href='/about'>ABOUT US</Link>
                    <Link href='#'>INVESTORS</Link>
                    <Link href='#'>WORK WITH US</Link>
                </div>
                )}

                <div className="">
                    <Button
                        border={"1px solid #606060"}
                        borderRadius={"5px"}
                        w={"8.75rem"}
                        h={"3.125rem"}
                        // color={theme.colors._white}
                        className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                        lineHeight={"50px"}
                        letterSpacing={"0.5rem"}
                        _hover={{
                            background:
                              "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                            color:"white"
                        }}
                    >
                        LOGIN
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header