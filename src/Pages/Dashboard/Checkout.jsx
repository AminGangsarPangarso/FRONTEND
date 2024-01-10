import useCart from '@/store/cart'
import { shallow } from 'zustand/shallow'
import cartServices from '@/services/cart.services'
import { toastApiError } from '@/utils/toast'
import { useEffect, useMemo, useState } from 'react'
import { MIDTRANS_CLIENT_KEY } from '@/constants'
import { cn } from '@/utils/classes'
import rupiah from '@/utils/rupiah'

function Checkout() {
  const [cart, clearCart] = useCart(
    (state) => [state.cart, state.clearCart],
    shallow
  )
  const [snap, setSnap] = useState(null)

  const initSnap = () => {
    const snapScript = document.createElement('script')
    snapScript.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
    snapScript.type = 'text/javascript'
    snapScript.onload = () => {
      if ('snap' in window) {
        setSnap(window.snap)
      }
    }
    snapScript.dataset.clientKey = MIDTRANS_CLIENT_KEY
    document.head.appendChild(snapScript)
  }

  useEffect(() => {
    initSnap()
  }, [])

  const onCheckout = async (e) => {
    e.preventDefault()
    console.log(cart)

    const products = Object.values(cart).map(({ id, quantity }) => ({
      id,
      quantity,
    }))

    await cartServices
      .checkout({ products })
      .then((res) => {
        snap.pay(res?.data)
        clearCart()
      })
      .catch((err) => {
        toastApiError(err)
      })
  }

  console.log(Object.values(cart))

  const carts = useMemo(() => {
    const arrCharts = Object.values(cart).map(({ ...rest }) => ({
      ...rest,
      subTotalPrice: rest.price * rest.quantity,
    }))
    return {
      isEmpty: arrCharts.length === 0,
      values: arrCharts,
      total: arrCharts.reduce((acc, { price, quantity }) => {
        return acc + price * quantity
      }, 0),
    }
  }, [cart])

  return (
    <div className='min-w-screen container h-full min-h-[calc(100vh_-_348px)] w-full space-y-6 py-12 pt-28'>
      <h1 className='mx-auto font-dm-serif text-4xl tracking-wider sm:text-5xl'>
        Checkout
      </h1>
      <div />
      {carts.values.map(({ id, quantity, price, subTotalPrice, name }) => {
        return (
          <div key={id}>
            {name} - {quantity} x {rupiah(price)} = {rupiah(subTotalPrice)}
          </div>
        )
      })}
      {!carts.isEmpty && (
        <div className='flex'>Total Cart: {rupiah(carts.total)}</div>
      )}
      <button
        type='button'
        onClick={onCheckout}
        className={cn(
          'block rounded-md bg-amber-700 px-6 py-2 text-left font-raleway text-sm font-semibold tracking-wide text-white',
          carts.isEmpty && 'cursor-not-allowed opacity-80'
        )}
        disabled={carts.isEmpty}
      >
        Checkout
      </button>
    </div>
  )
}

export default Checkout
