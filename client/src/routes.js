import { Navigate, useRoutes } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/home/home';
import Guest from './pages/guest/guest';
import Admin from './pages/admin/admin';
import Print from './pages/print/print';
import Shared from './pages/shared/shared';
import Buy from './pages/buy/buy';
import Login from './pages/login/login';
import Error from './pages/error/error';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/app",
      element: <Layout />,
      children: [
        { element: <Navigate to="/app/home" />, index: true },
        {
            path: "home",
            element: <Home />,
        },
        {
            path: "print",
            element: <Print />,
        },
        { 
            path: "shared",
            element: <Shared /> 
        },
        { 
            path: "buy",
            element: <Buy /> 
        },
      ],
    },
    {
        path:"/",
        element: <Guest />
    },
    {
        path:"/login",
        element: <Login />
    }
    ,
    {
        path: "*",
        element: <Error />
    },
    {
        path: "admin",
        element: <Admin />
    }
  ]);
  return routes;
}