import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from 'next/image';
import logo from './logo-white.png';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main>{children}</main>
    <footer>
      <Box textAlign="right" padding="20px">
        <Image src={logo} alt="panaxium-logo" width="100" height="12" />
      </Box>
    </footer>
  </>
);

export default Layout;
