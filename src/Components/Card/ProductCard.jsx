import useAuth from '@/store/auth'
import { PackageSearch } from 'lucide-react'
import rupiah from '@/utils/rupiah'
import { shallow } from 'zustand/shallow'
import ButtonAddToCart from '@/Components/Button/AddToCart'

function ProductCard({ product }) {
  const { name, image, price } = product
  const [auth] = useAuth((state) => [state.auth], shallow)

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
      <ButtonAddToCart product={product} hasLoggedIn={!!auth} />
    </div>
  )
}

export default ProductCard
