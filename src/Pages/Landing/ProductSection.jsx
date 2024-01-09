import { useEffect, useMemo, useState } from 'react'
import productService from '@/services/product.service'
import { toastError } from '@/utils/toast'
import { IMAGE_BASE_URL } from '@/constants'
import rupiah from '@/utils/rupiah'
import { Minus, PackageSearch, Plus, ShoppingCart } from 'lucide-react'
import { cn } from '@/utils/classes'
import useCart from '@/store/cart'
import { shallow } from 'zustand/shallow'
import { Link } from 'react-router-dom'
import useAuth from '@/store/auth'

function ButtonAction({ product, isDisabled = false, hasLoggedIn = false }) {
  const [cart, addCart, incrementCart, decrementCart] = useCart(
    (state) => [
      state.cart,
      state.addCart,
      state.incrementCart,
      state.decrementCart,
    ],
    shallow
  )

  const { id, name, price, description, image } = product
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
        description,
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

function ProductCard({ product }) {
  const { name, image, price } = product
  const [isAuthenticated] = useAuth((state) => [state.isAuthenticated], shallow)

  return (
    <div className='group h-full w-full max-w-[320px] space-y-4 rounded-md border border-slate-200 bg-white p-4 text-center'>
      <div className='relative aspect-square h-auto w-full cursor-pointer overflow-hidden rounded-md'>
        <div className='absolute z-10 flex h-full w-full items-center justify-center bg-slate-800/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <PackageSearch className='h-10 w-10 text-white' />
        </div>
        <img
          src={image}
          alt={name}
          className=' object-cover transition-transform duration-300 group-hover:scale-110'
        />
      </div>
      <div className='space-y-1'>
        <h2 className='line-clamp-2 cursor-pointer text-xl underline decoration-amber-500 decoration-2 underline-offset-2'>
          {name}
        </h2>
        <h3 className='font-raleway text-xl font-bold text-amber-800'>
          {rupiah(price)}
        </h3>
      </div>
      <ButtonAction product={product} hasLoggedIn={isAuthenticated()} />
    </div>
  )
}

function ProductSection() {
  const [rawProducts, setRawproducts] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setRawproducts(res?.data || [])
      })
      .catch((err) => {
        toastError(err)
      })
  }, [])

  const products = useMemo(() => {
    return rawProducts.map((val) => ({
      ...val,
      image: `${IMAGE_BASE_URL}${val.image}`,
    }))
  }, [rawProducts])

  return (
    <div className='mb-16 bg-[#fffbeb] py-16 shadow-[0px_0px_100px_rgba(146,63,14,.2)] xl:py-28'>
      <div className='container flex flex-col justify-center space-y-10 lg:space-y-16'>
        <div className='space-y-2 text-center'>
          <h1 className='mx-auto max-w-5xl text-center font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            Product Kita
          </h1>
          <p className='font-raleway'>
            Beberapa Produk unggulan dari Sirup Secang Yang-Ti yang mungkin bisa
            kamu coba
          </p>
        </div>
        <div className='mx-auto flex flex-row flex-wrap justify-center gap-6'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductSection
