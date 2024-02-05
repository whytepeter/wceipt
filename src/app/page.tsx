'use client';
import Button from '@/components/global/Button';
import { useRouter } from 'next/navigation';

export default function Default() {
  const router = useRouter();

  const handleClick = (route: string): void => {
    router.push(route);
  };

  return (
    <>
      <div className=' flex flex-wrap gap-4 p-4 '>
        This is the Landing Page
        <Button
          onClick={() => {
            handleClick('/dashboard');
          }}
        >
          Dashboard
        </Button>
        <Button
          onClick={() => {
            handleClick('/auth/login');
          }}
        >
          Login
        </Button>
      </div>
    </>
  );
}
