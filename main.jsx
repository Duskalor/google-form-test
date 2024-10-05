import { createRoot } from 'react-dom/client';
import './main.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

const client = new QueryClient();
createRoot(document.getElementById('main')).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
