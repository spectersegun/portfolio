import React from 'react';
import { VStack } from '@chakra-ui/react';

import Header from './components/Header';
import Social from './components/Social';
// import Profile from './components/Profile';
import TopNav from './components/TopNav';

function App() {
  return (
    <VStack p={5}>
      <TopNav />
      <Header></Header>
      <Social></Social>
      {/* <Profile></Profile> */}
    </VStack>
  );
}

export default App;
