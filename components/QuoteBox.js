import React from 'react'
import { useColorMode, Text, Flex } from '@chakra-ui/core'

const QuoteBox = ({ quote, author }) => {
  const { colorMode } = useColorMode()
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  }
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  return (
    <Flex
      border='1px solid'
      borderColor={borderColor[colorMode]}
      borderRadius={4}
      p={4}
      mb={2}
    >
      <Text as='i' color={primarytextColor[colorMode]}>
        "{quote}" - <strong>{author}</strong>
      </Text>
    </Flex>
  )
}

export default QuoteBox
