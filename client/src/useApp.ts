import { QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './trpc';

export const useApp = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'}/trpc`,
        }),
      ],
    })
  );
  return {
    queryClient,
    trpcClient,
  };
};
