// import { useColorMode } from '@chakra-ui/color-mode';
import {
  Circle,
  Flex,
  Stack,
  Box,
  Button,
  useColorMode,
  useMediaQuery,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
// import { specter } from '../../public/asset/specter';

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
          <Text fontSize="5*1" fontWeight="semibold">
            Hi, I am
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
            GDE - React.js, Next.js, Node. Co-Founder of Syncteams &#38; work @
            Scorefam &#38; Analytics 🗣
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
            Hire Me
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
