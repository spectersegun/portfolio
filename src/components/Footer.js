import { Box, HStack, Icon, Link, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const { colorMode } = useColorMode();  // Getting color mode
  const isDark = colorMode === 'dark';   // Check if current mode is dark
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Box
      as="footer"
      width="100%"
      py={6}
      bg={isDark ? 'gray.800' : 'gray.100'}
      color={isDark ? 'gray.200' : 'gray.700'}
      mt={8}
    >
      <HStack
        justifyContent="space-between"
        px={isNotSmallerScreen ? '32px' : '16px'}
        direction={isNotSmallerScreen ? 'row' : 'column'}
      >
        {/* Left Side - Copyright */}
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Omojolowo Oluwasegun Specter. All rights reserved.
        </Text>

        {/* Right Side - Social Media Links */}
        <HStack spacing={4}>
          <Link href="https://twitter.com/spectersegun" isExternal>
            <Icon as={FaTwitter} boxSize={5} color={isDark ? 'cyan.400' : 'blue.500'} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={5} color={isDark ? 'cyan.400' : 'blue.500'} />
          </Link>
          <Link href="http://www.instagram.com/segunspecter" isExternal>
            <Icon as={FaInstagram} boxSize={5} color={isDark ? 'cyan.400' : 'blue.500'} />
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Footer;
