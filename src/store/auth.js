import { create } from 'zustand'
import { LOCAL_STORAGE_KEY } from '@/constants'

const useAuth = create((set) => ({
  auth: null,
  isAutehnticated: () => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY.auth)
    if (token) {
      set({ auth: token })
      return true
    }
    return false
  },
  login: ({ token, ...data }) => {
    set({ auth: data })
    localStorage.setItem(LOCAL_STORAGE_KEY.auth, token)
  },
  logout: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.auth)
    set({ auth: null })
  },
}))

export default useAuth
