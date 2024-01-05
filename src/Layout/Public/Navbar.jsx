import logo from '@/assets/image/logo.png'
import { Menu, X } from 'lucide-react'
import { useDisclosure } from '@/hooks'
import { Link as RouteLink } from 'react-router-dom'
import { cn } from '@/utils/classes'
import NavbarLink from './NavbarLink'

function Navbar() {
  const menu = useDisclosure()

  return (
    <>
      <nav className='fixed right-0 top-0 z-[49] w-full bg-black text-white'>
        <div className='container flex items-center justify-between gap-2 py-2'>
          <div className='flex items-center justify-center gap-10'>
            <img className='h-12 w-full' src={logo} alt='Logo' />
            <NavbarLink className='hidden flex-col space-x-2 rounded-lg md:flex md:flex-row' />
            <button
              className='block rounded-md border border-slate-500 px-2 py-1.5 text-white md:hidden'
              type='button'
              onClick={menu.open}
            >
              {menu.isOpen ? <X /> : <Menu />}
            </button>
          </div>
          <RouteLink
            to='login'
            className='block rounded-md bg-amber-700 px-6 py-2 text-left text-white'
          >
            Login
          </RouteLink>
        </div>
      </nav>
      <div
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full -translate-y-full items-center justify-center bg-black transition-transform duration-300 md:hidden md:translate-y-0',
          menu.isOpen && 'translate-y-0'
        )}
      >
        <button
          className='fixed right-4 top-4 rounded-md border border-slate-500 px-2 py-1.5 text-white'
          type='button'
          onClick={menu.close}
        >
          <X />
        </button>
        <NavbarLink
          className='flex w-full max-w-[120px] flex-col gap-4 text-center'
          itemClassName='flex w-full mx-auto justify-center'
          onClick={menu.close}
        />
      </div>
    </>
  )
}

export default Navbar
