import useCart from '@/store/cart'
import { useMemo } from 'react'
import { cn } from '@/utils/classes'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

function ButtonAddToCart({ product, isDisabled = false, hasLoggedIn = false }) {
  const [cart, addCart, incrementCart, decrementCart] = useCart(
    (state) => [
      state.cart,
      state.addCart,
      state.incrementCart,
      state.decrementCart,
    ],
    shallow
  )

  const { id, name, price, image } = product
  const quantity = useMemo(() => {
    return cart[id]?.quantity || 0
  }, [cart])

  const onIncrement = (e) => {
    e.preventDefault()
    if (quantity === 0) {
      addCart({
        id,
        name,
        price,
        image,
      })
      return
    }
    incrementCart(id)
  }

  const onDecrement = (e) => {
    e.preventDefault()
    decrementCart(id)
  }

  if (!hasLoggedIn) {
    return (
      <Link
        to='/login'
        className='flex w-full items-center justify-center gap-2 rounded-md bg-amber-700 px-5 py-2.5 text-left font-raleway font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-amber-800'
      >
        Login first to continue
      </Link>
    )
  }

  if (quantity <= 0) {
    return (
      <button
        type='button'
        disabled={isDisabled}
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-md bg-amber-700 px-5 py-2.5 text-left font-raleway font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-amber-800',
          isDisabled && 'cursor-not-allowed opacity-80'
        )}
        onClick={onIncrement}
      >
        <ShoppingCart className='h-5 w-5' />
        <span>Add to card</span>
      </button>
    )
  }

  return (
    <div className='flex items-center justify-between'>
      <button
        type='button'
        disabled={isDisabled}
        className={cn(
          'flex items-center justify-center gap-2 rounded-md bg-amber-700 p-3 text-left font-raleway font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-amber-800',
          isDisabled && 'cursor-not-allowed opacity-80'
        )}
        onClick={onDecrement}
      >
        <Minus className='h-5 w-5' />
      </button>
      <span className='w-full font-raleway text-xl font-bold text-amber-800'>
        {quantity}
      </span>
      <button
        type='button'
        disabled={isDisabled}
        className={cn(
          'flex items-center justify-center gap-2 rounded-md bg-amber-700 p-3 text-left font-raleway font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-amber-800',
          isDisabled && 'cursor-not-allowed opacity-80'
        )}
        onClick={onIncrement}
      >
        <Plus className='h-5 w-5' />
      </button>
    </div>
  )
}

export default ButtonAddToCart
