import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '@/routes';

export const Sidebar = () => {
  return (
    <nav className='w-52 flex flex-col gap-4 p-5 bg-white dark:bg-gray-800'>
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={`/${route.path}`}
          className='text-blue-500 px-5 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};
