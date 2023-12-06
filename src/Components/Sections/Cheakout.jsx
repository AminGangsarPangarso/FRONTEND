import gambardetailproduct from '@/assets/Image/gambarmanfaat.png'
import { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link, useParams, useNavigate } from 'react-router-dom'
import getDetailLanding from '@/service/detaillanding/getDetailLanding'
import { IMAGE_BASE_URL } from '@/constants'
import rupiah from '@/utils/rupiah'

function Cheakout() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getDetailLanding(id)
      .then((res) => {
        setDetail(res)
      })
      .catch((err) => alert(err))
  }, [])
  return (
    <div className='container  '>
      {detail && (
        <div className=' mt-20 grid  grid-cols-1 rounded-md  border-2 p-10  md:grid-cols-2'>
          <img
            src={
              IMAGE_BASE_URL + detail.data.galery[0].img_url ||
              gambardetailproduct
            }
            alt=''
            className='-10 h-96 w-96  rounded-md  bg-cover '
          />
          <div className='detail_product '>
            <h1 className=' mt-4 text-4xl font-extrabold '>
              {detail.data.product_name}
            </h1>
            <p className='my-5 text-lg font-bold text-amber-600 lg:text-2xl'>
              {rupiah(detail.data.product_price)}
            </p>
            <p>{detail.data.product_description}</p>
            <p>Spesifikasi :</p>
            <ul>
              <li>Halal</li>
              <li>Halal-izin edar dan merk terdaftar</li>
              <li>Tanpa menggunakan bahan tambahan pangan sintetis</li>
              <li />
            </ul>
            <div className='flex gap-6'>
              <button
                onClick={() => navigate(-1)}
                type='button'
                className='mt-5 flex items-center justify-center gap-2 rounded-lg bg-amber-800 px-8 py-2 text-white hover:bg-amber-700 '
              >
                <IoMdArrowRoundBack />
                Kembali
              </button>
              {/* <Link
                to={`https://wa.me/${detail.number}?text=Halo%20saya%20ingin%20memesan%20${detail.data.product_name}`}
                className='mt-5 flex items-center justify-center gap-2 rounded-lg bg-green-800 px-8 py-1 text-white hover:bg-green-600'
              >
               
                Beli
              </Link> */}
              <Link
                to='/checkout'
                className='mt-5 flex items-center justify-center gap-2 rounded-lg bg-green-800 px-8 py-1 text-white hover:bg-green-600'
              >
                Beli
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cheakout

// import gambardetailproduct from '@/assets/Image/gambarmanfaat.png'
// import { IoMdArrowRoundBack } from 'react-icons/io'
// import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import getDetailLanding from '@/service/detaillanding/getDetailLanding'
// import { IMAGE_BASE_URL } from '@/constants'
// import rupiah from '@/utils/rupiah'

// export default function Cheakout() {
//   const { id } = useParams()
//   const [detail, setDetail] = useState(null)
//   const [jumlah, setJumlah] = useState(0)
//   const navigate = useNavigate()

//   const handleIncress = () => {
//     setJumlah(jumlah + 1)
//   }

//   const handleDicress = () => {
//     setJumlah(jumlah - 1)
//   }

//   useEffect(() => {
//     getDetailLanding(id)
//       .then((res) => {
//         setDetail(res)
//       })
//       .catch((err) => alert(err))
//   }, [])

//   const handlePay = () => {
//     // if (jumlah > 0 && detail) {
//     //   const productPrice = detail.data.product_price
//     //   const totals = productPrice * jumlah
//     //   const dataPayment = {
//     //     product_id: detail.data.product_id,
//     //     user_id: detail.data.user_id,
//     //     total: detail.data.total,
//     //   }
//     //   console.log('data pembelian ', dataPayment)
//     // } else console.log('Jumlah barang harus lebih dari 0')
//   }
//   return (
//     <div className='container  '>
//       {detail && (
//         <div className=' mt-20 grid  grid-cols-1 rounded-md  border-2 p-10  md:grid-cols-2'>
//           <img
//             src={
//               IMAGE_BASE_URL + detail.data.galery[0].img_url ||
//               gambardetailproduct
//             }
//             alt=''
//             className='-10 h-96 w-96  rounded-md  bg-cover '
//           />
//           <div className='detail_product '>
//             <h1 className=' mt-4 text-4xl font-extrabold '>
//               {detail.data.product_name}
//             </h1>
//             <p className='my-5 text-lg font-bold text-amber-600 lg:text-2xl'>
//               {rupiah(detail.data.product_price)}
//             </p>
//             <p>{detail.data.product_description}</p>
//             <p>Spesifikasi :</p>
//             <div className='flex gap-6'>
//               <button
//                 onClick={() => navigate(-1)}
//                 type='button'
//                 className='mt-5 flex items-center justify-center gap-2 rounded-lg bg-amber-800 px-8 py-2 text-white hover:bg-amber-700 '
//               >
//                 <IoMdArrowRoundBack />
//                 Kembali
//               </button>

//               <button type='button' onClick={handleIncress}>
//                 +
//               </button>
//               {jumlah}
//               <button type='button' onClick={handleDicress}>
//                 -
//               </button>
//               <button
//                 type='submit'
//                 onClick={handlePay}
//                 className='mt-5 flex items-center justify-center gap-2 rounded-lg bg-green-800 px-8 py-1 text-white hover:bg-green-600'
//               >
//                 Chekout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
