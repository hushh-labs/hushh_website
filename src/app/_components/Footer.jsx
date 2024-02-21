'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { images } from '../../../public/Images/images';
import Link from 'next/link'
import iconsPath from '../../../public/Icons/iconsPath';

export const Footer = () => {

    const [inputFocus, setInputFocus] = useState(false)
    const [formSubmit, setFormSubmit] = useState(false)

    const handleSubscribeSubmit = (e) => {
        e.preventDefault()
        setFormSubmit(true)
    }
    return (
        <div className='bg-normBG shadow-black shadow-2xl text-lightGreen h-full'>
            <div className="flex px-32 py-20 gap-5 items-start justify-between">
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex flex-col flex-1 gap-10">
                        <Image src={images.Logo} alt='Logo' className='pt-2' height={30} />
                        <div className="flex flex-col">
                            <p className='text-lg font-headsiph font-semibold'>Registered Address (US)</p>
                            <p>Hushone Inc.</p>
                            <p>1021 5th St W.</p>
                            <p>Kirkland WA 98033</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p>info@hush1one.com</p>
                            <p>+1 (877) 487-4494</p>
                            <p>DUNS - 119019629</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-start justify-center">
                    <div className="w-max flex flex-col gap-7">
                        <h1 className='text-lg font-bold'>Why HUSHH</h1>
                        <div className="flex flex-col gap-3 text-md text-textGray">
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>About HUSHH</p></Link>
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Our Mission</p></Link>
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Our Vision</p></Link>
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Our Impact</p></Link>
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Meet HUSHHers</p></Link>
                            <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Support</p></Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="items-center flex justify-center">
                        <div className="flex flex-col gap-7">
                            <h1 className='text-lg font-bold'>Products and Pricing</h1>
                            <div className="flex flex-col text-md gap-3 text-textGray">
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Customer Experience</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Agent Stories</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Developer Insights</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Pricing</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="items-center flex justify-center">
                        <div className="flex flex-col gap-7">
                            <h1 className='text-lg font-bold'>HUSHH Labs</h1>
                            <div className="flex flex-col text-md gap-3 text-textGray">
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>All</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Machine Learning</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Discovery</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Embedding</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Fashion</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Mission</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Principles</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Search</p></Link>
                                <Link href='/' className='hover:text-myBorder hover:font-semibold'><p>Vision</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="">
                        <div className="flex flex-col gap-3">
                            <h1 className='text-lg pb-2 font-bold'>Get Updates</h1>
                            <div className="">
                                <form action="" onSubmit={handleSubscribeSubmit}
                                    className={`my-3 w-full flex rounded-md ${inputFocus ? 'shadow-md' : ''}`}>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        onFocus={() => setInputFocus(true)}
                                        onBlur={() => setInputFocus(false)}
                                        className={`group pl-2 bg-normBG outline-none w-full py-3 border border-1 hover:border-lightGreen border-myBorder rounded-l-md ${inputFocus ? ' border-lightGreen' : ''} ${inputFocus ? 'border-1' : ''}`}
                                        placeholder='Your email address'
                                    />
                                    <button
                                        type='submit'
                                        onClick={handleSubscribeSubmit}
                                        className='bg-myBG rounded-r-md border w-12 flex items-center justify-center border-myBorder border-l-0 group hover:bg-myBorder'
                                    >
                                        <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='stroke-myBorder w-8 h-8 group-hover:stroke-myBG' aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </form>
                                <p className={`${formSubmit ? 'text-normtext' : 'text-myBG'}`}>Thank you for subscribing!</p>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='text-lg pt-10 pb-2 font-bold'>Follow Our Socials</h1>
                            <div className="flex items-baseline gap-4 mt-2.5 justify-start w-max">
                                <div className="w-7 h-7 align-middle group">
                                    <Link href={'https://www.linkedin.com'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className=' w-full h-full stroke-normText fill-normText hover:stroke-myBorder hover:fill-myBorder transition-all duration-200' strokeWidth={1.5} fill='#F7F7F2'><path d={iconsPath.linkedinPath} /></svg>
                                    </Link>
                                </div>
                                <div className="w-7 h-7 group">
                                    <Link href={'https://www.instagram.com'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className=' w-full h-full stroke-normText fill-normText hover:stroke-myBorder hover:fill-myBorder transition-all duration-200' strokeWidth={1.5} fill='#F7F7F2'><path d={iconsPath.igPath} /></svg>
                                    </Link>
                                </div>
                                <div className="w-7 h-7 group">
                                    <Link href={'https://www.facebook.com'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className=' w-full h-full stroke-normText fill-normText hover:stroke-myBorder hover:fill-myBorder transition-all duration-200' strokeWidth={1.5} fill='#F7F7F2'><path d={iconsPath.fbPath} /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' mx-32 bg-gradient-to-r from-normBG via-myBorder to-myBG h-[1.5px]' />
            <div className="flex justify-center py-7">
                <p className=' text-lg text-textGray'>© 2024 HUSHH</p>
            </div>
        </div>
    )
}
