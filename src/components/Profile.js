/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      <Box alignSelf="center" px="auto" py="16" w="300px">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Product Designer and Developer, specialised in mobile app development.
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Flex
            cursor="pointer"
            bgImage="url('/image/iregister.png')"
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            backgroundSize="cover"
            h="30vh"
            w="30vh"
            justify="flex-end"
            onClick={() => window.open('https://www.iregisterkids.com')}
          >
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              iregister
            </Text>
          </Flex>
          <Flex
            cursor="pointer"
            backgroundSize="cover"
            bgImage="url('/image/incognito.png')"
            class="syncteams"
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            h="30vh"
            w="30vh"
            justify="flex-end"
            onClick={() => window.open('https://www.incognitobrand.net/')}
          >
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              incognito
            </Text>
          </Flex>
          <Flex
            cursor="pointer"
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bgImage="url('/image/halo.png')"
            backgroundSize="cover"
            h="30vh"
            w="30vh"
            justify="flex-end"
            // _hover={{ w: 'green.400' }}

            onClick={() => window.open('https://halo-web.netlify.app/')}
          >
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              halo
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
