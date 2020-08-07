import React from 'react'
import { Flex, Link, IconButton } from '@chakra-ui/core'

const Footer = () => (
  <Flex align='center' mb={4} direction='column'>
    <div>
      <Link href='https://twitter.com/joinarocketship' title='Twitter' isExternal>
        <IconButton
          aria-label='Twitter'
          icon='twitter'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link href='editor@joinarocketship.com' title='Email' isExternal>
        <IconButton
          aria-label='Email'
          icon='mail'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
    </div>
  </Flex>
)

export default Footer
