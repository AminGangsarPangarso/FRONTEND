import { useEffect } from 'react'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'

function App() {
  const [auth, updateFromLocalStorage, isValidToken] = useAuth(
    (state) => [state.auth, state.updateFromLocalStorage, state.isValidToken],
    shallow
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateFromLocalStorage()
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  if (isValidToken() && !auth) {
    return (
      <div className='fixed inset-0 z-[99] flex h-full w-full items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-x-1 text-sm text-amber-900'>
          <svg
            fill='none'
            className='h-16 w-16 animate-spin'
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              clipRule='evenodd'
              d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
              fill='currentColor'
              fillRule='evenodd'
            />
          </svg>
          <span className='font-raleway'>Loading ...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
