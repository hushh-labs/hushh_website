'use client'
import extendedTheme from './theme'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({children}){
    return <ChakraProvider theme={extendedTheme}>{children}</ChakraProvider>
}