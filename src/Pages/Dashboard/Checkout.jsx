import useCart from '@/store/cart'
import { shallow } from 'zustand/shallow'
import cartServices from '@/services/cart.services'
import { toastApiError } from '@/utils/toast'
import { useEffect, useState } from 'react'
import { MIDTRANS_CLIENT_KEY } from '@/constants'

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

  return (
    <div className='min-w-screen container h-full min-h-[calc(100vh_-_348px)] w-full py-12 pt-28'>
      <h1 className='mx-auto font-dm-serif text-4xl tracking-wider sm:text-5xl'>
        Checkout
      </h1>
      <button type='button' onClick={onCheckout}>
        Checkout
      </button>
    </div>
  )
}

export default Checkout
