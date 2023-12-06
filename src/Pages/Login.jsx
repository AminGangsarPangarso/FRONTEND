import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import bglogin from '@/assets/Image/bglogin.png'
import logoLogin from '@/assets/Image/logologin.png'
import loginService from '@/service/auth/login'
import useAuth from '@/store/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const [login] = useAuth((state) => [state.login], shallow)

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginService(formdata)
      .then((res) => {
        login(res?.data)
        toast.success('Berhasil Login', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })

        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      })
      .catch(() => {
        toast.error('Gagal Login', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })
      })
  }

  return (
    <div className=' flex h-screen w-full items-center justify-center'>
      <ToastContainer />
      <div className='container flex h-full w-full items-center justify-center gap-8 border-2 bg-white p-8 shadow-lg sm:h-auto sm:w-1/2'>
        <div className='hidden md:block'>
          <img
            src={bglogin}
            alt='bglogin'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='w-full'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logoLogin} alt='gambar' className='mb-4 h-20 w-20' />
            <h2 className='mb-4 text-3xl font-bold'>
              Selamat Datang di Admin Yang Ti
            </h2>
          </div>
          <form className='space-y-4' onSubmit={handleLogin}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-bold text-gray-700'
              >
                Username
              </label>
              <input
                id='email'
                autoComplete='email'
                value={formdata.email}
                onChange={handleChange}
                name='email'
                type='text'
                required
                className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600'
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-bold text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                value={formdata.password}
                onChange={handleChange}
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600'
              />
            </div>
            <div>
              <button
                type='submit'
                className='focus:ring-amber- w-full rounded bg-amber-700 px-4 py-2 font-bold text-white hover:bg-amber-500 focus:outline-none focus:ring-2'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
