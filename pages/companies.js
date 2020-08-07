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
import CompanyCard from '@components/CompanyCard'

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as reports } from './reports/**/*.mdx'

const url = 'https://joinarocketship.com/companies'
const title = 'Companies - joinarocketship.com'
const description =
  'A growing directory of hyper-growth companies on a rocket ship trajectory.'

const Companies = () => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const filteredReports = reports
    .sort((a, b) => (a.title >= b.title ? 1 : -1))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
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
            maxWidth='700px'
          >
            <Heading letterSpacing='tight' mb={2} as='h1' size='2xl'>
              Company Directory
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>{description}</Text>
            <InputGroup my={4} mr={4} w='100%' maxWidth='400px'>
              <Input
                aria-label='Search companies'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search companies'
              />
              <InputRightElement>
                <Icon name='search' color='gray.300' />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
          >
            {!filteredReports.length && 'No posts found.'}
            {filteredReports.map((frontMatter) => (
              <CompanyCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Companies
