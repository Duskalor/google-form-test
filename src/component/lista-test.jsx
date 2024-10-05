import { useFetcher } from '../hook/useFetcher';
import { List } from './list';
import { Spinner } from './spinner';

export const ListaTest = () => {
  const { data, loading } = useFetcher();
  return (
    <div className=' flex-1'>
      {loading && <Spinner />}
      {!loading && data && <List ideas={data} />}
    </div>
  );
};
