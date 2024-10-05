import { Header } from '@/component/Header';
import { Sidebar } from '@/component/sidebar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export const Home = () => {
  return (
    <>
      <Toaster richColors />
      <main className='dark grid grid-rows-[auto,1fr,auto] min-h-screen m-auto container'>
        <Header />
        <section className='flex justify-between gap-10 mx-auto  p-5 w-full'>
          <Sidebar />
          <Outlet />
        </section>
      </main>
    </>
  );
};
