import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from 'next/image';
import logo from './logo-white.png';

const Layout = ({ children }: { children: ReactNode }) => (
  <Flex flexDirection="column" height="100%" justifyContent="space-between">
    <main>{children}</main>
    <footer>
      <Box padding="20px" textAlign="right">
        <Image alt="panaxium-logo" height="12" src={logo} width="100" />
      </Box>
    </footer>
  </Flex>
);

export default Layout;
