import React, { useRef } from 'react'
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useColorMode,
  Link
} from '@chakra-ui/core'

const Subscribe = () => {
  const inputEl = useRef(null)
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  }
  const borderColor = {
    light: 'blue.200',
    dark: 'blue.900'
  }

  const subscribe = async (e) => {
    console.log(e)
  }

  return (
    <Box
      border='1px solid'
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w='100%'
    >
      <Heading as='h5' size='lg' mb={2}>Subscribe to the newsletter</Heading>
      <Text>Get overviews of the most exciting companies (<Link href='reports/instabase'>like this one</Link>) sent to your inbox every morning.</Text>
      <InputGroup size='md' mt={4}>
        <Input
          aria-label='Email for newsletter'
          placeholder='tim@apple.com'
          ref={inputEl}
          type='email'
        />
        <InputRightElement width='6.75rem'>
          <Button
            fontWeight='bold'
            h='1.75rem'
            size='sm'
            onClick={subscribe}
          >
                        Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Subscribe
