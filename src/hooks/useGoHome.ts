import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 自定义Hook
export function useGoHome() {
  const router = useRouter();

  useEffect(() => {

    router.push('/')

  }, []);
}