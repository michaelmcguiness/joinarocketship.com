import React from 'react'
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core'

import Container from '@components/Container'
import QuoteBox from '@components/QuoteBox'

const Index = () => {
  const { colorMode } = useColorMode()
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  }

  return (
    <Container>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading letterSpacing='tight' mb={5} as='h2' size='2xl'>
            Find Your Dream Job
          </Heading>
          <Text mb={2} color={primarytextColor[colorMode]}>
            We help you identify the most-promising hyper-growth companies to work for,
            invest in, or simply learn about.
          </Text>
          <Text mb={5} color={primarytextColor[colorMode]}>
            Subscribe to our free newsletter to have overviews of the most exciting
            companies (like this one) sent to your inbox every morning.
          </Text>
          <Heading letterSpacing='tight' mb={5} as='h2' size='xl'>
            Why a Rocket Ship?
          </Heading>
          <QuoteBox
            quote='When companies are growing quickly and they are having a lot of impact, careers take care of themselves. And when companies aren’t growing quickly or their missions don’t matter as much, that’s when stagnation and politics come in. If you’re offered a seat on a rocket ship, don’t ask what seat. Just get on.'
            author='Eric Schmidt, former CEO of Google'
          />
          <QuoteBox
            quote='If you join a company, my general advice is to join a company on a breakout trajectory.'
            author='Sam Altman, CEO of OpenAI and former president of Y Combinator'
          />
          <QuoteBox
            quote="In a rapidly changing field like technology, the best place to get experience when you're starting out is in younger, high-growth companies."
            author='Marc Andreessen, Co-Founder of Andreessen Horowitz'
          />
          <QuoteBox
            quote='If you fall in with the right crowd, you will have outsized opportunities over time. Being part of the original PayPal network exposed you to companies like LinkedIn, Yelp, Tesla, SpaceX, and Facebook. Similarly, ex-Googlers are now senior executives or VCs involved with the top companies in Silicon Valley (Facebook, Sequoia, Dropbox, Pinterest, etc.). People who were early at Google now know people at every major company in Silicon Valley.'
            author='Elad Gil, Co-Founder of Color Genomics'
          />
          <QuoteBox
            quote='If you want that nice house and bigger impact, get upside in a younger hyper growth company with about 10 to 400 people that has the best people and is changing a real industry.'
            author='Joe Lonsdale, GP at 8VC and Co-Founder of Palantir'
          />
          <QuoteBox
            quote='I prefer to see [my students] take their first jobs after graduation at midsized companies with momentum, not startups, because they are the companies most likely to be big successes. Why is success so important? You get more credit than you deserve for being part of a successful company, and less credit than you deserve for being part of an unsuccessful company. Success will help propel your career. At a fast-growing company, chances are good you’ll have a higher position two years after you join. At a slow-growth company, no matter how good a job you do, you won’t have the same opportunities to advance. When it comes time to leave the successful company, you’ll be able to write your own ticket. No one will remember if you were employee 20 or 120. Everyone wants to recruit or back people from successful companies because they know/think people carry the lessons of success with them.'
            author='Andy Rachleff, CEO of Wealthfront and Lecturer at Stanford GSB'
          />
          <QuoteBox
            quote='The 100th engineer at Facebook made far more money than 99% of Silicon Valley entrepreneurs. Small slices of gigantic pies are still themselves gigantic. If you’re extremely talented, you can easily identify a company with high growth potential and relatively low risk and get an aggressive compensation package from them. If you turn out to be wrong after a few years, you can try again. Within 2 or 3 tries, and likely on the first one, you’ll have a great outcome and can be confident you contributed serious lasting value to the world.'
            author='Dustin Moskovitz, CEO of Asana and Co-Founder of Facebook'
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Index
