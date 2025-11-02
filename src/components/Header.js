// import { useColorMode } from '@chakra-ui/color-mode';
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

function Header() {
  const { colorMode } = useColorMode;
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <Stack pl={5}>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end "
      />
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf="flex-start"
      >
        <Box
          mt={isNotSmallerScreen ? '0' : 16}
          alignSelf="flex-start"
          //   fontSize={['sm', 'md', '100%']}
        >
          {/* <Text
            fontSize="3xl"
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            gap={2}
          >
            Good day
            <span
              style={{
                display: 'inline-block',
                animation: 'wave 1.8s infinite',
                transformOrigin: '70% 70%',
              }}
            >
              👋
            </span>
            , my names are
          </Text> */}

          <Text
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }} // 👈 responsive font sizes
            fontWeight="semibold"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            gap={{ base: 1.5, sm: 2 }} // smaller gap on mobile
            textAlign={{ base: 'center', md: 'left' }} // centers text on mobile
            justifyContent={{ base: 'start', md: 'flex-start' }}
          >
            Good day
            <Box
              as="span"
              display="inline-block"
              sx={{
                '@keyframes wave': {
                  '0%': { transform: 'rotate(0.0deg)' },
                  '10%': { transform: 'rotate(14deg)' },
                  '20%': { transform: 'rotate(-8deg)' },
                  '30%': { transform: 'rotate(14deg)' },
                  '40%': { transform: 'rotate(-4deg)' },
                  '50%': { transform: 'rotate(10deg)' },
                  '60%': { transform: 'rotate(0.0deg)' },
                  '100%': { transform: 'rotate(0.0deg)' },
                },
              }}
              animation="wave 1.8s infinite"
              transformOrigin="70% 70%"
              mx="1"
            >
              👋
            </Box>
            , my names are
          </Text>

          <Text
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            fontSize={['36px', '48px', '72px']}
          >
            Omojolowo Oluwasegun Specter
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            GDE - React.js, Next.js, Python, Node, PHP, Laravel, Golang.
            Co-Founder of Syncteams &#38; work @ Flyboku Travels &#38; Tours 🗣
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/oluwasegun-omojolowo-9b4694131/'
              )
            }
          >
            Experience
          </Button>
        </Box>
        <Image
          width="300px"
          height="300px"
          alignSelf="center"
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://ca.slack-edge.com/T02T9JNH160-U02T7H48M8T-ca7ffebaf358-512"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
