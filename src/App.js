import { VStack } from '@chakra-ui/react';
import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import TopNav from './components/TopNav';

function App() {
  return (
    <VStack >
      <TopNav />
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      <Footer />
    </VStack>
  );
}

export default App;
