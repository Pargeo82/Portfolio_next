import { useState } from 'react';
import Image from 'next/image';
import { Stack, useTheme, alpha } from '@mui/material';
import Navlinks from './Navlinks';

const NavigationMobile = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <nav
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: alpha(theme.palette.background.default, 0.8),
      }}
    >
      <Stack
        direction={'row'}
        mx={4}
        my={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Image
          src='/minime.jpg'
          alt='Small me'
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
        />

        <div onClick={() => setShowNav(!showNav)}>
          <Image
            src='/hamburger.png'
            alt='Menu'
            width={40}
            height={40}
          />
        </div>
      </Stack>
      {showNav && <Navlinks onNavToggle={() => setShowNav(!showNav)} />}
    </nav>
  );
};

export default NavigationMobile;
