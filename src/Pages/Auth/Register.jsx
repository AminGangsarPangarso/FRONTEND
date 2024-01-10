import { Lock, Mail, Phone, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import authServices from '@/services/auth.services'
import { cn } from '@/utils/classes'
import { toastApiError, toastApiSuccess } from '@/utils/toast'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  })

  const isDisabled =
    form.username === '' ||
    form.password === '' ||
    form.email === '' ||
    form.phoneNumber === ''

  const onChange = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [login] = useAuth((state) => [state.login], shallow)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    await authServices
      .register(form)
      .then((res) => {
        toastApiSuccess(res)
        login(res?.data)
        const timeout = setTimeout(() => {
          navigate('/history')
          clearTimeout(timeout)
        }, 1500)
      })
      .catch((err) => {
        toastApiError(err)
      })
  }

  return (
    <div className='mx-auto flex w-full max-w-[420px] flex-col justify-center space-y-4 px-8 pb-10 pt-16 font-raleway md:w-1/2 md:pb-10 md:pt-10'>
      <div className='mb-10 space-y-2 text-center'>
        <h1 className='text-4xl font-bold text-gray-900'>REGISTER</h1>
        <p className='leading-5'>
          Welcome to Sirup Yang Ti. Enter your information to register
        </p>
      </div>
      <form className='space-y-5' onSubmit={onSubmit}>
        <div className='w-full space-y-1'>
          <label htmlFor=''>Username</label>
          <div className='flex'>
            <div className='pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center'>
              <User className='h-4 w-4' />
            </div>
            <input
              type='text'
              className='-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-amber-500'
              placeholder='admin'
              name='username'
              autoComplete='username'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='w-full space-y-1'>
          <label htmlFor=''>Email</label>
          <div className='flex'>
            <div className='pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center'>
              <Mail className='h-4 w-4' />
            </div>
            <input
              type='email'
              className='-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-amber-500'
              placeholder='customer@customer.com'
              name='email'
              autoComplete='email'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='w-full space-y-1'>
          <label htmlFor=''>Phone Number</label>
          <div className='flex'>
            <div className='pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center'>
              <Phone className='h-4 w-4' />
            </div>
            <input
              type='number'
              className='-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-amber-500'
              placeholder='62xxxxxxxxxx'
              name='phoneNumber'
              autoComplete='phoneNumber'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='w-full space-y-1'>
          <label htmlFor=''>Password</label>
          <div className='flex'>
            <div className='pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center'>
              <Lock className='h-4 w-4' />
            </div>
            <input
              type='password'
              className='-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-amber-500'
              placeholder='************'
              name='password'
              autoComplete='current-password'
              onChange={onChange}
            />
          </div>
        </div>
        <button
          type='submit'
          className={cn(
            'mx-auto w-full rounded-md bg-amber-600 px-3 py-3 font-semibold text-white transition-colors duration-300 hover:bg-amber-700 focus:bg-amber-700',
            isDisabled && 'cursor-not-allowed opacity-50'
          )}
          disabled={isDisabled}
        >
          Register
        </button>
      </form>
      <span>
        Already have account?{' '}
        <Link to='/login' className='underline'>
          Login
        </Link>
      </span>
    </div>
  )
}

export default Register
