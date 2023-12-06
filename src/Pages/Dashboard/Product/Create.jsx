import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import createProductService from '@/service/product/create'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CreateProduct() {
  const [formdata, setFormdata] = useState({
    image: null,
    name: '',
    description: '',
    price: 0,
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeFile = (e) => {
    if (e.target.value) {
      setFormdata({
        ...formdata,
        [e.target.name]: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProductService(formdata)
      .then((res) => {
        if (res.status === 'Success')
          toast.success('Berhasil Menambahkan Product', {
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
        toast.error('Gagal Menambahkan Product', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=' container m-10 mx-auto mt-20 w-full bg-slate-200 py-5  text-black '
    >
      <ToastContainer />
      <h1 className='mb-6 text-center font-dm-serif text-2xl font-extrabold '>
        FORM TAMBAH PRODUCT
      </h1>
      <div className='mb-4'>
        <label htmlFor='image' className='mb-1 block px-2 font-medium '>
          {' '}
          Gambar :
          <input
            id='image'
            type='file'
            name='image'
            onChange={handleChangeFile}
            placeholder='Masukan Gambar'
            className='mt-2 w-full rounded  border-4 border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500'
          />
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='name' className='mb-1 block px-2 font-medium'>
          {' '}
          Nama Product :
          <input
            id='name'
            type='text'
            name='name'
            value={formdata.name}
            onChange={handleChange}
            placeholder='Masukan Nama Product'
            className='mt-2 w-full rounded  border-4 border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500'
          />
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='mb-1 block px-2 font-medium'>
          Deskripsi :
          <textarea
            id='description'
            name='description'
            value={formdata.description}
            onChange={handleChange}
            placeholder='Masukan Deskrisi '
            cols='70'
            rows='10'
            className='mt-2 w-full rounded  border-4 border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500'
          />
        </label>
      </div>

      <div className='mb-4'>
        <label htmlFor='price' className='mb-1 block px-2 font-medium '>
          Harga :
          <input
            id='price'
            type='number'
            name='price'
            value={formdata.price}
            onChange={handleChange}
            placeholder='Masukan harga'
            className='mt-2 w-full rounded  border-4 border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500 '
          />
        </label>
      </div>
      <div className='m-2 flex justify-between'>
        <Link
          to='/dashboard'
          className='w- rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:bg-blue-600 focus:outline-none '
        >
          Batal
        </Link>
        <button
          type='submit'
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'
        >
          Simpan
        </button>
      </div>
    </form>
  )
}

export default CreateProduct
