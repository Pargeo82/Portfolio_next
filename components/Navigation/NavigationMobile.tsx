import { useState } from 'react';
import Image from 'next/image';

import styles from './navigation.module.css';
import Navlinks from './Navlinks';
import { Stack } from '@mui/material';

export default function NavigationMobile() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <nav
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
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
          layout='fixed'
          style={{ borderRadius: '50%' }}
        />

        <div onClick={() => setShowNav(!showNav)}>
          <Image
            src='/hamburger.png'
            alt='Menu'
            width={40}
            height={40}
            layout='fixed'
          />
        </div>
      </Stack>
      {showNav && <Navlinks />}
    </nav>
  );
}
