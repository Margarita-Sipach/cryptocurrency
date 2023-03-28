import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { InfoPage } from './pages/InfoPage';
import { MainPage } from './pages/MainPage';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/:id',
        element: <InfoPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
