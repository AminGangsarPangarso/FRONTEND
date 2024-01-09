import React from 'react'
import { Outlet } from 'react-router-dom'
import bgLogin from '@/assets/image/bg_login.jpg'

function AuthLayout() {
  return (
    <div className='min-w-screen container flex h-full min-h-screen w-full items-center justify-center py-12'>
      <div className='w-full max-w-5xl overflow-hidden rounded-2xl bg-white text-gray-500 shadow-xl'>
        <div className='w-full md:flex'>
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
