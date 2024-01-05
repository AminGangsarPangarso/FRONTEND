import { createBrowserRouter } from 'react-router-dom'

import PublicLayout from '@/Layout/Public'

import Landing from '@/Pages/Landing/Page'
import NotFound from '@/Pages/NotFound'

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
    path: '*',
    element: <NotFound />,
  },
])

export default router
