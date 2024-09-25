import React from 'react';
import { toast } from 'sonner';
import { utilText } from '../utils/util-text';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const setDataFetch = async ({ idea, description }) => {
  const URL = `https://docs.google.com/forms/d/e/1FAIpQLSedSrxE67tZaQEPWaB5lkEjc4fVdmz9LnKinYnsRWkiYpoqQQ/formResponse?usp=pp_url&entry.2144804360=${idea}&entry.1731463631=${description}`;
  await fetch(URL, {
    mode: 'no-cors',
  });
  return { idea, description };
};

export const FormTest = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: setDataFetch,
    onSuccess: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('¡Han pasado 3 segundos! Revalidando');
        }, 3000); // 3000 milisegundos = 3 segundos
      })
        .then((value) => {
          console.log(value);
          return queryClient.invalidateQueries(['ideas']);
        })
        .then(() => {
          toast.success('subido correctamente');
        });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    console.log(form);
    const idea = utilText(form.idea);
    const description = utilText(form.description);
    try {
      mutation.mutate({ idea, description });
    } catch (error) {
      toast.error(error.message);
    }
    e.target.reset();
  };

  return (
    <div>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='text'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            IDEA
          </label>
          <input
            type='text'
            id='text'
            name='idea'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='escribe una idea'
            required
            autoComplete='off'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            DESCRIPCIÓN
          </label>
          <input
            type='text'
            id='description'
            name='description'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='escribe una descripción'
            required
            autoComplete='off'
          />
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
