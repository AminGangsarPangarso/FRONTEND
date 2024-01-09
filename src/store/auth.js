import { create } from 'zustand'
import { LOCAL_STORAGE_KEY } from '@/constants'
import { extractToken, isTokenExpired } from '@/utils/auth'

const useAuth = create((set, get) => ({
  auth: null,
  isAuthenticated: () => {
    return !!get()?.auth
  },
  login: ({ token }) => {
    localStorage.setItem(LOCAL_STORAGE_KEY.auth, token)
    get().updateAuth(token)
  },
  updateAuth: (token = null) => {
    token = token ?? get().getLocalStorageToken()
    const user = extractToken(token)
    set({ auth: user?.payload })
  },
  updateFromLocalStorage: () => {
    if (!get().isValidToken()) {
      get().logout()
      return
    }
    get().updateAuth()
  },
  getLocalStorageToken: () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY.auth)
  },
  isValidToken: () => {
    const auth = get().getLocalStorageToken()
    return auth && !isTokenExpired(auth)
  },
  logout: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.auth)
    set({ auth: null })
  },
}))

export default useAuth
