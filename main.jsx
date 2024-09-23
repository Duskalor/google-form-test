import { createRoot } from 'react-dom/client';
import { App } from './src/App';
import './main.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();
createRoot(document.getElementById('main')).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
