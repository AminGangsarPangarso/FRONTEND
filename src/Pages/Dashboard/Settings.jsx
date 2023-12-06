import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import editUserService from '@/service/user/editUser'
import useAuth from '@/store/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Settings() {
  const [formdata, setFormdata] = useState({
    number: '',
    password: '',
  })

  const navigate = useNavigate()
  const [auth, setDataAuth] = useAuth(
    (state) => [state.auth, state.setDataAuth],
    shallow
  )

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    setFormdata((prev) => ({
      ...prev,
      number: auth?.number,
    }))
  }, [auth])

  const handleUpdateUser = (e) => {
    e.preventDefault()
    editUserService(formdata)
      .then(() => {
        setDataAuth({
          ...auth,
          number: formdata.number,
        })
        toast.success('Berhasil Update User', {
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
        toast.error('Gagal Update User', {
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
        <div className='hidden md:block' />
        <div className='w-full'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='mb-4 text-3xl font-bold'>
              Halaman Untuk Mengubah No Whatsapp dan Password
            </h2>
          </div>
          <form className='space-y-4' onSubmit={handleUpdateUser}>
            <div>
              <label
                htmlFor='number'
                className='block text-sm font-bold text-gray-700'
              >
                number
              </label>
              <input
                id='number'
                autoComplete='number'
                value={formdata.number}
                onChange={handleChange}
                name='number'
                type='number'
                placeholder='Nomer Diawali 62'
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
                placeholder='Masukan Password Baru'
                autoComplete='current-password'
                className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600'
              />
            </div>
            <div>
              <button
                type='submit'
                className='focus:ring-amber- w-full rounded bg-amber-700 px-4 py-2 font-bold text-white hover:bg-amber-500 focus:outline-none focus:ring-2'
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
