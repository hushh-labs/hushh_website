import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import extendedTheme from '../theme'
import React from 'react'
import GroupPhoto from '../_components/svg/aboutImages/groupPhoto'
export default function About() {
  return (
    <Stack pt={'10.5rem'} background={extendedTheme.colors.black} fontFamily={'Figtree'}>
        <VStack px={'5rem'} alignItems={'left'}>
           <Heading as={'h1'} 
              fontWeight={'300'}
              fontSize={'6rem'}
              lineHeight={'6rem'}
              letterSpacing={'-6%'}>
            <Text 
              color={'#ADA785'}
              >
              About
            </Text>
            <Text color={extendedTheme.colors.white}>
              hushh
            </Text>
           </Heading>
        </VStack>
             <GroupPhoto/>
        <VStack>

        </VStack>
      </Stack>
  )
}
