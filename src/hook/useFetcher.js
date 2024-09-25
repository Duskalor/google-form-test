import { api } from '../api';
import { useQuery } from '@tanstack/react-query';

export const useFetcher = () => {
  return useQuery({
    queryKey: ['ideas'],
    queryFn: () => api.list(),
  });
};
