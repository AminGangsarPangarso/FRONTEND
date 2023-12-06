import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '@/Layout/Dashboard'
import PublicLayout from '@/Layout/Public'

import Dashboard from '@/Pages/Dashboard/Dashboard'
import Landing from '@/Pages/Landing'
import Login from '@/Pages/Login'
import LoginCostumers from '@/Pages/LoginCostumers'
import NotFound from '@/Pages/NotFound'

import CreateProduct from '@/Pages/Dashboard/Product/Create'
import CreateEdit from '@/Pages/Dashboard/Product/Edit'
import GetAllProduct from '@/Pages/Dashboard/Product/Product'

import DetailPublicProduct from '@/Components/Sections/DetailPublicProduct'
import Settings from './Pages/Dashboard/Settings'
import DetailLanding from './Pages/Dashboard/DetailLanding'
import Cheakout from './Components/Sections/Cheakout'

const router = createBrowserRouter([
  {
    path: '',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'logincust',
        element: <LoginCostumers />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },

      {
        path: 'product',
        children: [
          {
            path: '',
            element: <GetAllProduct />,
          },
          {
            path: 'create',
            element: <CreateProduct />,
          },
          {
            path: 'edit/:id',
            element: <CreateEdit />,
          },
        ],
      },
    ],
  },

  {
    path: 'settings',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Settings />,
      },
    ],
  },

  {
    path: '',
    element: <DetailPublicProduct />,
    children: [
      {
        path: 'detail/:id',
        element: <DetailLanding />,
      },
      {
        path: 'checkout',
        element: <Cheakout />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
