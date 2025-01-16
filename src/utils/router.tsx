import Root from '../pages/Root';
import List from '../pages/List';
import SinglePage from '../pages/SinglePage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <List />,
      },
      {
        path: '/:name',
        element: <SinglePage />,
      },
    ],
  },
]);
