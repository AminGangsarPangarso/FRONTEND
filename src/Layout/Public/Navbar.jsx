import logo from '@/assets/image/logo.png'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useDisclosure } from '@/hooks'
import { Link, Link as RouteLink } from 'react-router-dom'
import { cn } from '@/utils/classes'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'
import useCart from '@/store/cart'
import { useMemo } from 'react'
import NavbarLink from './NavbarLink'

function LoginAction() {
  const [isAuthenticated] = useAuth((state) => [state.isAuthenticated], shallow)
  const [cart] = useCart((state) => [state.cart], shallow)
  const count = useMemo(() => {
    const quantity = Object.values(cart).reduce(
      (acc, item) => acc + item.quantity,
      0
    )
    return quantity > 99 ? '99+' : quantity
  }, [cart])

  if (isAuthenticated()) {
    return (
      <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
        <Link
          to='/checkout'
          className='relative rounded-md bg-slate-800 px-2 py-2'
        >
          {count !== 0 && (
            <span className='absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-semibold text-white'>
              {count}
            </span>
          )}
          <ShoppingCart className='h-5 w-5' />
        </Link>
        <RouteLink
          to='dashboard'
          className='block rounded-md bg-amber-700 px-6 py-2 text-left font-raleway text-sm font-semibold tracking-wide text-white'
        >
          Dashboard
        </RouteLink>
      </div>
    )
  }

  return (
    <RouteLink
      to='login'
      className='block rounded-md bg-amber-700 px-6 py-2 text-left font-raleway text-sm font-semibold tracking-wide text-white'
    >
      Login
    </RouteLink>
  )
}

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
          <LoginAction />
        </div>
      </nav>
      <div
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full -translate-y-full flex-col items-center justify-center gap-4 bg-black transition-transform duration-300 md:hidden md:translate-y-0',
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
        <LoginAction />
      </div>
    </>
  )
}

export default Navbar
