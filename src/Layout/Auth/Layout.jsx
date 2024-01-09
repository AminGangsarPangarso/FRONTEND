import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import bgLogin from '@/assets/image/bg_login.jpg'
import { ChevronLeft } from 'lucide-react'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'

function AuthLayout() {
  const [isAuthenticated] = useAuth((state) => [state.isAuthenticated], shallow)

  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard')
    }
  }, [isAuthenticated])

  return (
    <div className='min-w-screen container flex h-full min-h-screen w-full items-center justify-center py-12'>
      <div className='w-full max-w-5xl overflow-hidden rounded-2xl bg-white text-gray-500 shadow-[0px_0px_100px_rgba(146,63,14,.2)]'>
        <div className='relative w-full md:flex'>
          <Link
            to='/'
            className='absolute left-4 top-4 flex flex-row items-center justify-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 font-raleway text-sm font-semibold text-slate-900 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-100'
          >
            <ChevronLeft className='h-5 w-5 text-slate-900' />
            <span>Back to Home</span>
          </Link>
          <div className='hidden w-1/2 md:block'>
            <img
              src={bgLogin}
              alt='Background Login'
              className='h-full w-auto bg-cover'
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
