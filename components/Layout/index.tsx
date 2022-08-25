import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from 'next/image';
import logo from './logo-white.png';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main>{children}</main>
    <footer>
      <Box bottom="0" padding="20px" position="fixed" right="0" textAlign="right">
        <Image alt="panaxium-logo" height="12" src={logo} width="100" />
      </Box>
    </footer>
  </>
);

export default Layout;
