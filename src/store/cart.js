import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { LOCAL_STORAGE_KEY } from '@/constants'

const useCart = create(
  persist(
    (set) => ({
      cart: {},
      addCart: ({ id, name, image }) => {
        set((state) => {
          const cart = { ...state.cart }
          cart[id] = {
            id,
            name,
            image,
            quantity: 1,
          }
          return { cart }
        })
      },
      incrementCart: (cartId) => {
        set((state) => {
          const cart = { ...state.cart }
          cart[cartId].quantity = (cart[cartId].quantity || 0) + 1
          return { cart }
        })
      },
      decrementCart: (cartId) => {
        set((state) => {
          const cart = { ...state.cart }
          const count = (cart[cartId].quantity || 0) - 1
          if (count > 0) {
            cart[cartId].quantity = count
            return { cart }
          }
          delete cart[cartId]
          return { cart }
        })
      },
      clearCart: () => {
        set(() => {
          return { cart: {} }
        })
        localStorage.removeItem(LOCAL_STORAGE_KEY.cart)
      },
    }),
    {
      name: LOCAL_STORAGE_KEY.cart,
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart
