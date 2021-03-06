import React from 'react'
import NextLink from 'next/link'
import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  Image
} from '@chakra-ui/core'
import styled from '@emotion/styled'

import Footer from './Footer'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  }
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  }
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  }

  return (
    <>
      <StickyNav
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='900px'
        width='100%'
        bg={navBgColor[colorMode]}
        as='nav'
        p={8}
        mt={[0, 8]}
        mb={8}
        mx='auto'
      >
        <NextLink href='/' passHref>
          <Image
            cursor='pointer'
            maxWidth={45}
            src='/static/images/logo.svg'
            alt='logo'
          />
        </NextLink>

        <Box>
          <NextLink href='/companies' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Companies
            </Button>
          </NextLink>
          <NextLink href='/resources' passHref>
            <Button ml={1} as='a' variant='ghost' p={[1, 4]}>
              Resources
            </Button>
          </NextLink>
          <IconButton
            ml={1}
            aria-label='Toggle dark mode'
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
          />
        </Box>
      </StickyNav>
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
      <Footer />
    </>
  )
}

export default Container
