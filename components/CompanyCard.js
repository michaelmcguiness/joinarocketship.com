import React from 'react'
import NextLink from 'next/link'
import format from 'comma-number'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core'

const CompanyCard = (frontMatter) => {
  const {
    title,
    description,
    sector,
    employeeCount,
    location,
    investors,
    valuation,
    website,
    image
  } = frontMatter
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  const slug = frontMatter.__resourcePath
    .replace('reports/', '')
    .replace('.mdx', '')

  return (
    <NextLink href={`reports/${slug}`} passHref>
      <Link
        w='100%'
        _hover={{
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          textDecoration: 'none'
        }}
        border='1px solid'
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={2}
      >
        <Heading size='md' as='h3' mb={2} fontWeight='medium'>
          {title}
        </Heading>
      </Link>
    </NextLink>
  )
}

export default CompanyCard
