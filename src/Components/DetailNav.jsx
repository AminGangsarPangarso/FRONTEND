import { useState } from 'react'
import logo from '@/assets/Image/logoyanti.png'
import { Link } from 'react-router-dom'

function DetailNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-black '>
      <div className='mx-auto  max-w-7xl  px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img className='h-10 w-12' src={logo} alt='Logo' />
            </div>
            <div className='hidden md:block '>
              <div className='ml-10 flex items-baseline space-x-4 '>
                <ul className='font-dm-serif '>
                  <Link
                    to='/'
                    className='rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white '
                  >
                    Home
                  </Link>
                  <Link
                    to='/'
                    className='rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                  >
                    About
                  </Link>
                  <Link
                    to='/'
                    className='rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                  >
                    Product
                  </Link>
                  <Link
                    to='/'
                    className='rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                  >
                    FAQ
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              {/* Tambahkan komponen-komponen lain yang diperlukan, misalnya tombol login */}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Icon tampilan menu */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* Icon tampilan tutup */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Tampilan sidebar */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id='mobile-menu'
      >
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <ul className='flex flex-col font-dm-serif'>
            <Link
              to='/'
              className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
            >
              Home
            </Link>
            <Link
              to='/'
              className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
            >
              About
            </Link>
            <Link
              to='/'
              className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
            >
              Product
            </Link>
            <Link
              to='/'
              className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
            >
              FAQ
            </Link>
          </ul>
        </div>
        {/* Tambahkan komponen-komponen lain yang diperlukan, misalnya tombol login */}
      </div>
    </nav>
  )
}

export default DetailNav
