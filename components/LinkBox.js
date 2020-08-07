import React from 'react'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core'
import { getTopDomain } from '../utils/helperFunctions'

const LinkBox = ({ title, url }) => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  const topDomain = process.browser ? getTopDomain(url) : ''

  return (
    <Link
      m={1}
      w='100%'
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
      border='1px solid'
      borderColor={borderColor[colorMode]}
      borderRadius={4}
      p={2}
      href={url}
      isExternal
    >
      <Box display='block' width='100%'>
        <Flex width='100%' align='flex-start' flexDirection='column'>
          <Heading size='md' as='h3' mb={2} fontWeight='medium'>
            {title}
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>{topDomain}</Text>
        </Flex>
      </Box>
    </Link>
  )
}

export default LinkBox
