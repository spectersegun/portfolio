import { useColorMode } from '@chakra-ui/color-mode';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

function TopNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex w="100%" pt={5} px={5}>
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          specter OnGod
        </Heading>
        <Spacer></Spacer>

        <Box d={['none', 'none', 'flex']}>
          <a href="http://www.facebook.com/">
            <IconButton
              icon={<FaFacebook />}
              ml={2}
              isRound="true"
            ></IconButton>
          </a>
          <a href="https://www.linkedin.com/in/oluwasegun-omojolowo-9b4694131/">
            <IconButton
              icon={<FaLinkedin />}
              ml={2}
              isRound="true"
            ></IconButton>
          </a>
          <a href="http://www.instagram.com/segunspecter">
            <IconButton
              icon={<FaInstagram />}
              ml={2}
              isRound="true"
            ></IconButton>
          </a>
          <a href="http://www.github.com/spectersegun">
            <IconButton icon={<FaGithub />} ml={2} isRound="true"></IconButton>
          </a>
        </Box>

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ref={btnRef}
          icon={<FaBars />}
          onClick={onOpen}
          ml={4}
          d={['flex', 'flex', 'none']}
        ></IconButton>
      </Flex>
      <Box w="100%">
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <a href="http://www.facebook.com/">
                <IconButton
                  icon={<FaFacebook />}
                  ml={2}
                  isRound="true"
                ></IconButton>
              </a>
              <a href="https://www.linkedin.com/in/oluwasegun-omojolowo-9b4694131/">
                <IconButton
                  icon={<FaLinkedin />}
                  ml={2}
                  isRound="true"
                ></IconButton>
              </a>
              <a href="http://www.instagram.com/segunspecter">
                <IconButton
                  icon={<FaInstagram />}
                  ml={2}
                  isRound="true"
                ></IconButton>
              </a>
              <a href="http://www.github.com/spectersegun">
                <IconButton
                  icon={<FaGithub />}
                  ml={2}
                  isRound="true"
                ></IconButton>
              </a>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default TopNav;
