'use client';
import React from 'react'
import { HushhButton } from 'hushh-button-sdk';
import { usePathname, useRouter } from 'next/navigation'


export const questionsArray = [
    {
        question: "What are your plans for today?",
        options: [
            "Explore Hushh Products",
            "Partner with us",
            "Get Hired at Hushh",
            "Get support"
        ],
        answer: ""
    },
    {
        question: "What product you want to explore first?",
        options: [
            "Hushh Button (This very thing :)",
            "Hushh Wallet App",
            "Hushh For Students",
            "Browser Companion",
            "Vibe Search",
            "Concierge App",
            "Valet Chat",
            "Hushh Developer APIs"
        ],
        answer: ""
    },
    {
        question: "What explains you the best?",
        options: [
            "User",
            "Agent",
            "Brand representative",
            "Fellow Developer",
            "Applicant"
        ],
        answer: ""
    }
]
const HushhButtonFromLib = () => {

    const pathname = usePathname()
    const router = useRouter();
    const noHeaderPaths = ['/vivaConnect', '/viva-connect', '/viva-connect/qrPage', '/qrCodePage'];
    const shouldShowHeader = !noHeaderPaths.includes(pathname);
    return (
        <div>
            {shouldShowHeader && <HushhButton questions={questionsArray} />}
        </div>
    )
}

export default HushhButtonFromLib