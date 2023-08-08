import { createTRPCReact } from '@trpc/react-query';
import type { MainRouter } from 'server';

export const trpc = createTRPCReact<MainRouter>();
