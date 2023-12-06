import { useState } from 'react'
import logo from '@/assets/Image/logoyanti.png'
import bgnavbar from '@/assets/Image/bg_gambar.png'
import { Link } from 'react-scroll'
// import getAllLandingService from '@/service/detaillanding/getAll'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className=' my-bgnavbar  z-0 h-screen  w-full'
      style={{ backgroundImage: `url(${bgnavbar})` }}
    >
      <nav className='  w-full bg-black '>
        <div className='mx-auto flex h-20 max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img className='h-10 w-12' src={logo} alt='Logo' />
              <div className='hidden md:block'>
                <div className='ml-10 flex items-center'>
                  <div className='flex w-full items-center justify-between '>
                    <ul className='w-full font-dm-serif'>
                      <Link
                        activeClass='active'
                        to='/'
                        spy
                        smooth
                        offset={50}
                        duration={500}
                        className=' cursor-pointer rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white '
                      >
                        Home
                      </Link>

                      <Link
                        to='/about'
                        spy
                        smooth
                        offset={5}
                        duration={500}
                        className='cursor-pointer rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                      >
                        About
                      </Link>
                      <Link
                        to='/product'
                        spy
                        smooth
                        offset={5}
                        duration={500}
                        className='cursor-pointer rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                      >
                        Product
                      </Link>

                      <Link
                        to='/faq'
                        spy
                        smooth
                        offset={5}
                        duration={500}
                        className='cursor-pointer rounded-md px-6 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
                      >
                        FAQ
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to='/logincust'
              spy
              smooth
              offset={5}
              duration={500}
              className='hidden cursor-pointer rounded-md
             bg-amber-700 px-6 py-2 font-dm-serif text-sm text-gray-300 
              hover:text-white md:block'
            >
              Login
            </Link>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>

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
        <div className='hidden md:block'>
          <div className='ml-4 flex items-center md:ml-6' />
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
          id='mobile-menu'
        >
          <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
            <ul className='flex flex-col font-dm-serif'>
              <Link
                activeClass='active'
                to='/'
                spy
                smooth
                offset={150}
                duration={500}
                className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300  hover:bg-amber-700 hover:text-white'
              >
                Home
              </Link>
              <Link
                activeClass='active'
                to='/about'
                spy
                smooth
                offset={150}
                duration={500}
                className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
              >
                About
              </Link>
              <Link
                activeClass='active'
                to='/product'
                spy
                smooth
                offset={220}
                duration={500}
                className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
              >
                Product
              </Link>
              <Link
                activeClass='active'
                to='/faq'
                spy
                smooth
                offset={98}
                duration={500}
                className='rounded-md px-3 py-2 font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
              >
                FAQ
              </Link>
            </ul>
          </div>
          <Link
            to='/logincust'
            activeClass='active'
            spy
            smooth
            offset={98}
            duration={500}
            className='flex justify-between rounded-md px-3 py-2 text-left font-dm-serif text-sm text-gray-300 hover:bg-amber-700 hover:text-white'
          >
            Login
          </Link>
        </div>
      </nav>

      <div className='content  mx-auto flex min-h-full w-full justify-center text-white  '>
        <div className='mb-40 flex w-full flex-col items-center  justify-center text-center '>
          <h1 className='mx-auto  w-full font-dm-serif text-2xl sm:text-4xl '>
            {' '}
            Cita Rasa Nusantara dalam Setiap Sajian Minuman{' '}
          </h1>
          <div className='pt-8 '>
            <p className='font-raleway-serif text-white '>
              Menyelami Kelezatan Warisan Kuliner Indonesia yang Menggugah Lidah
              dan Menyentuh Hati.
            </p>
            <div className='rounded pt-8'>
              <button
                type='button'
                className='text-md rounded-full bg-orange-900 px-6 py-2 font-dm-serif shadow-lg shadow-orange-600/50 hover:bg-amber-700'
              >
                <Link to='/product' spy smooth offset={180} duration={500}>
                  Belanja Sekarang
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
