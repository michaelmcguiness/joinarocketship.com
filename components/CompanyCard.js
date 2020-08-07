import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Image, Link } from '@chakra-ui/core'
import { intToString } from '../utils/helperFunctions'

const CompanyCard = (frontMatter) => {
  const {
    title,
    description,
    sector,
    employeeCount,
    location,
    investors,
    valuation,
    favicon
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
      >
        <Flex mb={2} alignItems='center'>
          <Image height={5} src={favicon} mr={2} />
          <Heading size='md' as='h3' fontWeight='medium'>
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryTextColor[colorMode]} fontWeight='medium' mb={1}>
          {`${sector} • ${location} • Employees: ~${employeeCount} • Valuation: ~$${intToString(valuation)} • Investors: ${investors.join(', ')}`}
        </Text>
        <Text color={secondaryTextColor[colorMode]}>
          {description}
        </Text>
      </Link>
    </NextLink>
  )
}

export default CompanyCard
