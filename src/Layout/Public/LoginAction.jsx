import { History, ShoppingCart } from 'lucide-react'
import { Link, Link as RouteLink } from 'react-router-dom'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'
import useCart from '@/store/cart'
import { useMemo } from 'react'

function LoginAction() {
  const [auth, logout] = useAuth((state) => [state.auth, state.logout], shallow)
  const [cart] = useCart((state) => [state.cart], shallow)
  const count = useMemo(() => {
    const quantity = Object.values(cart).reduce(
      (acc, item) => acc + item.quantity,
      0
    )
    return quantity > 99 ? '99+' : quantity
  }, [cart])

  const onLogout = (e) => {
    e.preventDefault()
    logout()
  }

  if (auth) {
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
        <Link to='/history' className='rounded-md bg-slate-800 px-2 py-2'>
          <History className='h-5 w-5' />
        </Link>
        <button
          type='button'
          className='block rounded-md bg-amber-700 px-6 py-2 text-left font-raleway text-sm font-semibold tracking-wide text-white'
          onClick={onLogout}
        >
          Logout
        </button>
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

export default LoginAction
