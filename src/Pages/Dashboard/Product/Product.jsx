import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import getAllProductService from '@/service/product/getAll'
import deleteProductService from '@/service/product/delete'
import rupiah from '@/utils/rupiah'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function GetAllProduct() {
  const [table, setTables] = useState([])

  const getAllProduct = async () => {
    await getAllProductService()
      .then((res) => setTables(res?.data || []))
      .catch((err) => console.err(err))
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  const mappedProduct = useMemo(
    () =>
      table.map((val, index) => {
        // console.log(val.product_id)
        return {
          ...val,
          image:
            val.length > 0
              ? import.meta.env.VITE_IMAGE_BASE_URL + val.galery[0].img_url
              : '',
          number: index + 1,
        }
      }),
    [table]
  )

  const handleDelete = async (id) => {
    deleteProductService(id)
      .then(async () => {
        toast.success('Berhasil Menghapus Product', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })
        await getAllProduct()
      })
      .catch(() => {
        toast.error('Gagal Menghapus Product', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })
      })
    setTimeout(() => {
      window.location.reload()
    }, 4000)
  }

  return (
    <div className='container mx-auto my-10 min-h-screen  w-full  overflow-auto pl-20 text-center  '>
      <ToastContainer />
      <div className='mt-34 mb-6 flex  w-full items-center   justify-end px-4 py-4 '>
        <Link
          to='product/create'
          className='rounded-md bg-orange-900 px-4 py-2 text-white  '
        >
          + Tambah Product
        </Link>
      </div>
      <div className='overflow-x-auto '>
        <div className=' min-h-screen  '>
          <div className='mx-4 w-full'>
            <table className='w-full border-4 border-gray-200 bg-white'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='border-b px-4 py-2 text-center'>NO#</th>
                  <th className='border-b px-4 py-2 text-center'>Gambar</th>
                  <th className='border-b px-4 py-2 text-center'>Nama</th>
                  <th className='border-b px-4 py-2 text-center'>Deskripsi</th>
                  <th className='border-b px-4 py-2 text-center'>Harga</th>
                  <th className='border-b px-4 py-2 text-center'>Aksi</th>
                </tr>
              </thead>
              <tbody className=''>
                {mappedProduct.map((item) => (
                  <tr key={item.product_id}>
                    <td className='border-b px-4 py-2'>
                      <div className='text-center text-sm font-medium'>
                        {item.number}
                      </div>
                    </td>

                    <td className='border-b px-4 py-2 '>
                      {item.image === '' ? (
                        <div>Image not found</div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.product_name}
                          className='flex h-20 w-20 items-center justify-center text-center'
                        />
                      )}
                    </td>
                    <td className='border-b px-4 py-2'>
                      <div className='text-center text-sm font-bold'>
                        {item.product_name}
                      </div>
                    </td>
                    <td className='border-b px-4 py-2'>
                      <div className='text-center text-sm font-medium'>
                        {item.product_description}
                      </div>
                    </td>
                    <td className='border-b px-4 py-2'>
                      <div className='text-center text-sm font-bold text-amber-600'>
                        {rupiah(item.product_price)}
                      </div>
                    </td>
                    <td className='flex h-40 w-full  items-center justify-center border-x-4 border-b px-4 py-2 '>
                      <div className='flex w-full  justify-center  p-10 py-2 text-center '>
                        <div className='flex  md:flex-row md:justify-center md:gap-2  '>
                          <Link
                            className=' mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white  hover:bg-blue-700 md:mb-0  '
                            to={`product/edit/${item.product_id}`}
                          >
                            Edit
                          </Link>
                          <button
                            type='button'
                            className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 '
                            onClick={() => handleDelete(item.product_id)}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetAllProduct
