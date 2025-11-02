// import Icon from '@chakra-ui/icon';
// import { HStack } from '@chakra-ui/layout';
// import { useMediaQuery } from '@chakra-ui/react';
// import React from 'react';
// import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

// function Social() {
//   const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
//   console.log(isNotSmallerScreen);

//   return (
//     <HStack spacing="24" maxW="100%">
//       <Icon as={FaFacebookF} boxSize={['10', '10', '10']} cursor="pionter" />
//       <Icon
//         as={FaGoogle}
//         boxSize={['10', '10', '10']}
//         style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
//         cursor="pionter"
//       />
//       <Icon
//         as={FaSpotify}
//         boxSize={['10', '10', '10']}
//         style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
//       />
//       <Icon
//         as={FaShopify}
//         boxSize={['10', '10', '10']}
//         style={{ marginLeft: !isNotSmallerScreen ? '44px' : '' }}
//       />
//     </HStack>
//   );
// }

// export default Social;

import React from 'react';
import { Icon, HStack, useMediaQuery } from '@chakra-ui/react';
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

function Social() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  // responsive box sizes: base (mobile) -> sm -> md+
  const boxSize = { base: '8', sm: '10', md: '12' };

  // small helper to add left margin on small screens
  const mobileMl = !isNotSmallerScreen ? '44px' : '0';

  return (
    <HStack
      spacing={{ base: 6, md: 8 }}
      maxW="100%"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Icon
        as={FaFacebookF}
        boxSize={boxSize}
        cursor="pointer"
        aria-label="Facebook"
        role="button"
        tabIndex={0}
      />
      <Icon
        as={FaGoogle}
        boxSize={boxSize}
        cursor="pointer"
        aria-label="Google"
        role="button"
        tabIndex={0}
        ml={mobileMl}
      />
      <Icon
        as={FaSpotify}
        boxSize={boxSize}
        cursor="pointer"
        aria-label="Spotify"
        role="button"
        tabIndex={0}
        ml={mobileMl}
      />
      <Icon
        as={FaShopify}
        boxSize={boxSize}
        cursor="pointer"
        aria-label="Shopify"
        role="button"
        tabIndex={0}
        ml={mobileMl}
      />
    </HStack>
  );
}

export default Social;
