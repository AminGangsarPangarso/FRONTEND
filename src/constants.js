const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL
const MIDTRANS_CLIENT_KEY = import.meta.env.VITE_MIDTRANS_CLIENT_KEY

const API_ENDPOINT = {
  login: '/login',
  register: '/register',
  product: '/product',
  checkout: '/checkout',
}

const LOCAL_STORAGE_KEY = {
  auth: 'auth',
  cart: 'cart',
}

export {
  API_ENDPOINT,
  LOCAL_STORAGE_KEY,
  API_BASE_URL,
  IMAGE_BASE_URL,
  MIDTRANS_CLIENT_KEY,
}
