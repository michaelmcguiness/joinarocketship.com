import React from 'react'
import {
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Box
} from '@chakra-ui/core'

import Container from '@components/Container'
import ReportSeo from '@components/ReportSeo'

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://joinarocketship.com/reports/${slug}`
  )}`

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('reports/', '')
    .replace('.mdx', '')

  return ({ children }) => {
    return (
      <Container>
        <ReportSeo url={`https://joinarocketship.com/reports/${slug}`} {...frontMatter} />
        <Stack
          as='article'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='700px'
          w='100%'
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
            w='100%'
          >
            <Heading letterSpacing='tight' mb={2} as='h1' size='2xl'>
              {frontMatter.title}
            </Heading>
            <Flex
              justify='space-between'
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w='100%'
              mb={4}
            >
              <Text fontSize='sm' color='gray.500' minWidth='100px' mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
          <Box>
            <Link href={discussUrl(slug)} isExternal>
              {'Discuss on Twitter'}
            </Link>
          </Box>
        </Stack>
      </Container>
    )
  }
}
