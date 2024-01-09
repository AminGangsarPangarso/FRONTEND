import { createBrowserRouter } from 'react-router-dom'

import PublicLayout from '@/Layout/Public'
import AuthLayout from '@/Layout/Auth'

import Landing from '@/Pages/Landing/Page'
import NotFound from '@/Pages/NotFound'
import Login from '@/Pages/Auth/Login'

const router = createBrowserRouter([
  {
    path: '',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
    ],
  },
  {
    path: '',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
