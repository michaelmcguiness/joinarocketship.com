import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core'

import Container from '@components/Container'
import LinkBox from '@components/LinkBox'
import resourceLinks from '../data/resourceLinks'

const url = 'https://joinarocketship.com/resources'
const title = 'Resources - joinarocketship.com'
const description = 'How to join a rocket ship and why'

const Resources = () => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode()

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  resourceLinks.sort((a, b) => (a.title >= b.title ? 1 : -1))

  const whyLinks = resourceLinks.filter((link) => link.type === 'WHY')
  const howLinks = resourceLinks.filter((link) => link.type === 'HOW')
  const filteredLinks = resourceLinks.filter((link) =>
    link.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          width='100%'
          maxWidth='700px'
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            width='100%'
          >
            <Heading letterSpacing='tight' mb={2} as='h1' size='2xl'>
              Resources
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {'How to join a rocket ship and why.'}
            </Text>
            <InputGroup my={4} mr={4} w='100%' maxWidth='400px'>
              <Input
                aria-label='Search resources'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search resources'
              />
              <InputRightElement>
                <Icon name='search' color='gray.300' />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex
              flexDirection='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              maxWidth='700px'
              mt={8}
            >
              <Heading letterSpacing='tight' mb={4} size='xl' fontWeight={700}>
                How To Join a Rocket Ship
              </Heading>
              {howLinks.map((link) => (
                <LinkBox {...link} key={link.title} />
              ))}
              <Heading mt={8} letterSpacing='tight' mb={4} size='xl' fontWeight={700}>
                Why You Should Join a Rocket Ship
              </Heading>
              {whyLinks.map((link) => (
                <LinkBox {...link} key={link.title} />
              ))}
            </Flex>
          )}
          {searchValue && (
            <Flex
              flexDirection='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              maxWidth='700px'
              mt={8}
            >
              {!filteredLinks.length && 'No resources found.'}
              {filteredLinks.map((link) => (
                <LinkBox {...link} key={link.title} />
              ))}
            </Flex>
          )}
        </Stack>
      </Container>
    </>
  )
}

export default Resources
