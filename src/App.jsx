import React from 'react';
import { Toaster } from 'sonner';
import { ListaTest } from './component/lista-test';
import { Sidebar } from './component/sidebar';
import { Header } from './component/Header';
export const App = () => {
  return (
    <>
      <Toaster richColors />
      <main className='grid grid-rows-[auto,1fr,auto] min-h-screen m-auto container'>
        <Header />
        <section className='flex gap-10  m-auto p-5'>
          <Sidebar />
          <ListaTest />
        </section>
        {/* <div className=' h-20'> FOOTER</div> */}
      </main>
    </>
  );
};
