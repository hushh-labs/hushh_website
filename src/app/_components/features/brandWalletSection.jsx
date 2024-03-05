import extendedTheme from '@/app/theme'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const BrandWalletSection = () => {
  return (
        <VStack mt={{ md: '8rem', base:'5rem'}}>
            <Heading 
             className='gradient'             
             fontSize={{ md: "3.75rem", base: "1.5rem" }}
            >
            Build your own brand wallet
            </Heading>
            <Text textAlign={'center'} fontSize={{ md:'1rem' }} pl={{ md: "30rem" }}
            pr={{ md: "30rem" }}  color={extendedTheme.colors.secondary}>"Experience elegance and durability with our brand wallet - a statement of luxury and utility."</Text>
        </VStack>
    )
}

export default BrandWalletSection