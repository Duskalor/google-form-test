import { useFetcher } from '../hook/useFetcher';
import { List } from './list';
import { Spinner } from './spinner';

export const ListaTest = () => {
  const { data: listaIdeas, loading } = useFetcher();
  return (
    <div className='pl-52'>
      {loading && <Spinner />}
      {!loading && <List ideas={listaIdeas} />}
    </div>
  );
};
