import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

function Social() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  console.log(isNotSmallerScreen);

  return (
    <HStack spacing="24" maxW="100%">
      <Icon as={FaFacebookF} boxSize={['10', '10', '10']} cursor="pionter" />
      <Icon
        as={FaGoogle}
        boxSize={['10', '10', '10']}
        style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
        cursor="pionter"
      />
      <Icon
        as={FaSpotify}
        boxSize={['10', '10', '10']}
        style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
      />
      <Icon
        as={FaShopify}
        boxSize={['10', '10', '10']}
        style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
      />
    </HStack>
  );
}

export default Social;
