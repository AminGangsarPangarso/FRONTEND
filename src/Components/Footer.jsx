import { FaTiktok, FaStore } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md'
import logofooter from '@/assets/Image/logoyanti.png'
import { SiShopee } from 'react-icons/si'
import { useState, useEffect } from 'react'
import getAllLandingService from '@/service/detaillanding/getAll'

function Footer() {
  const [contactNumber, setContactNumber] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const res = await getAllLandingService()

      setContactNumber(res.number)
    }

    fetchData()
  }, [])
  return (
    <div className='footeryangti mt-40 flex h-full w-full flex-col justify-evenly px-10 py-20 text-white md:flex-row md:items-center'>
      <div className=' '>
        <div className='logoyangti flex lg:items-center lg:justify-center '>
          <img src={logofooter} alt='Logofooter' className='w-30 h-20' />
        </div>
        <div className='mediaSosialYangti flex w-full  text-center text-white'>
          <ul className='mt-4 flex items-center justify-center gap-4 px-2 py-2 text-center text-lg'>
            <li>
              <a href='https://tokopedia.link/yz4c9p3bXBb'>
                <FaStore className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href='https://shope.ee/2AlaWxkQ7e'>
                <SiShopee className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href='https://www.tiktok.com/@sirupyangti'>
                <FaTiktok className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/sirupsecangyangti/'>
                <FiInstagram className='h-6 w-6' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='  mt-4 flex flex-col gap-2'>
        <h1 className='font-bold'>Pages</h1>
        <ul className='mt-4'>
          <div className=''>
            <li className='mb-2'>Home it work</li>
            <li className='mb-2'>Pricing</li>
            <li className='mb-2'>Blog</li>
            <li className='mb-2'>Demo</li>
          </div>
        </ul>
      </div>

      <div className=' mt-4 flex flex-col gap-2 '>
        <h1 className='font-bold'>Contact</h1>
        <ul className=''>
          <li className=' mt-4 flex gap-4'>
            {' '}
            <MdCall className='h-6 w-6' /> {`+${contactNumber}`}
          </li>
          <li className='mt-4 flex gap-4'>
            {' '}
            <MdEmail className='h-6 w-6' />
            sirupyangti@gmail.com
          </li>
          <li className='mt-4 flex gap-4'>
            {' '}
            <MdLocationOn className='h-6 w-6' />
            Perum II, Jalan Jeruk D36 RT:006 RW:015, <br /> Kel. Sidoarum, Kap.
            Godean, Sleman, DI Yogyakarta.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
