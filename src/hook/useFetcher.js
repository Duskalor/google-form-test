import { api } from '../api';
import { useQuery } from '@tanstack/react-query';

export const useFetcher = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ['ideas'],
    queryFn: () => api.list(),
  });
  return { data, loading: isLoading };
};
