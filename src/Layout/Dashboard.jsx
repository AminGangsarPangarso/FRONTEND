import React, { useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaCog } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import useAuth from '@/store/auth'
import { LOCAL_STORAGE_KEY } from '@/constants'

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [logout] = useAuth((state) => [state.logout], shallow)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    logout()

    navigate('/login')
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkUserToken = () => {
    const userToken = localStorage.getItem(LOCAL_STORAGE_KEY.auth)
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
      navigate('/login')
      return
    }
    setIsLoggedIn(true)
  }
  useEffect(() => {
    checkUserToken()
  }, [isLoggedIn])

  return isLoggedIn ? (
    <>
      <div className='fixed top-0 flex h-20 w-full bg-black '>
        <button
          type='button'
          className='z-100 fixed left-5 top-5 text-gray-600 '
          onClick={toggleSidebar}
        >
          {!isOpen && <AiOutlineMenu className='mt-2 h-6 w-6 text-white' />}
        </button>
        <div className=''>
          <div className='mx-auto flex h-20 w-screen items-center justify-between px-10 pl-40 text-center text-white  '>
            <h1 className="bg-amber-500 bg-clip-text font-['dm-serif'] text-2xl font-extrabold text-transparent md:text-4xl  ">
              Yang-Ti
            </h1>
            <button
              type='button'
              className='cursor-pointer rounded-lg bg-amber-500 px-4 py-2  font-["dm-serif"] text-xl font-medium'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <Transition.Root show={isOpen} as={React.Fragment}>
          <Dialog
            as='div'
            static
            className='fixed inset-0 overflow-hidden'
            open={isOpen}
            onClose={setIsOpen}
          >
            <Transition.Child
              as={React.Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='absolute inset-0 bg-opacity-75 transition-opacity' />
            </Transition.Child>
            <div className='fixed inset-y-0 left-0 z-0 mt-20 flex w-64 max-w-full flex-col bg-black shadow '>
              <button
                type='button'
                className='z-100 fixed left-5 top-5 text-gray-600 '
                onClick={toggleSidebar}
              >
                {isOpen && (
                  <div className='z-50 mt-10  px-56'>
                    <div className='z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-500 text-center'>
                      <AiOutlineClose className='z-50 m-3 h-6 w-6  cursor-pointer text-white' />
                    </div>
                  </div>
                )}
              </button>
              <div className='mt-9 flex flex-1 flex-col overflow-y-auto p-4 '>
                <nav>
                  <ul>
                    <li className='rounded-md px-2  hover:bg-amber-500'>
                      <Link
                        to='/dashboard'
                        className='flex items-center py-2  text-white hover:text-white'
                      >
                        <RxDashboard className='mr-2 h-6 w-6' />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li className='  mt-6 rounded-md px-2 hover:bg-amber-500'>
                      <Link
                        to='/settings'
                        className='flex items-center py-2 text-white hover:text-white  '
                      >
                        <FaCog className='mr-2 h-6 w-6' />
                        <span>Settings</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <main className='pt-20'>
        <Outlet />
      </main>
    </>
  ) : null
}

export default DashboardLayout
