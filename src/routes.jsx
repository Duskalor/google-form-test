import { createBrowserRouter } from 'react-router-dom';
import { ListaTest } from './component/lista-test';
import { Dashboard } from './component/dashboard';
import { App } from './App';

export const routes = [
  {
    name: 'Dashboard',
    path: '',
    element: <Dashboard />,
  },
  {
    name: 'Ideas',
    path: 'ideas',
    element: <ListaTest />,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);
