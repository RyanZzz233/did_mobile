import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 自定义Hook
export function useCheckFlag() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/checkFlag')
      .then(response => response.json())
      .then(data => {
        if (!data.result) {
          router.push('/')
        }
      });
  }, []);
}