'use client';
import WButton from '@/components/global/WButton';
import { Button, styled } from '@mui/material';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className='bg-[#F4D690] text-2xl w-screen h-screen p-4 '>
        Home
        <WButton onClick={handleClick} loading={loading}>
          CLICK ME
        </WButton>
      </div>
    </>
  );
}
