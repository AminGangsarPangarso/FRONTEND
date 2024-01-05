import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
