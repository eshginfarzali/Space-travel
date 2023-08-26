import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../components';
import { Home, Crew, LayoutDestination, Technology, Moon, Mars, Europa, Titan} from '../pages';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout  redirectPath='/destination/moon'/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'destination',
        element: <LayoutDestination/>,
        
        children:[
         { 
         path:'moon',
          element: <Moon/>
          },
         { 
          path: 'mars',
          element: <Mars/>
          },
         { 
          path: 'europa',
          element: <Europa/>
          },
         { 
          path: 'titan',
          element: <Titan/>
          },
          {
            path: '*',
            element: <Navigate to='/destination/moon' />,
          },
        ]
      },
      {
        path: 'crew',
        element: <Crew />,
      },
      {
        path: 'technology',
        element: <Technology />,
      },
      {
        path: '*',
        element: <Navigate to='/' />,
      },
    ],
  },
]);
