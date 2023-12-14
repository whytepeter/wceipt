'use client';
import { useAppSelector } from '@/hooks';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { authReducer } = useAppSelector((state) => state);
  const { replace } = useRouter();
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (!authReducer.isLogin) replace('/');
    else setCheckingStatus(false);
  }, [authReducer.isLogin]);

  return (
    <div>
      {!checkingStatus && authReducer.isLogin && (
        <div>
          <p>Dashboard Layout</p>

          <div>{children}</div>
        </div>
      )}{' '}
      {checkingStatus && <div>Loading...</div>}
    </div>
  );
};

export default DashboardLayout;
