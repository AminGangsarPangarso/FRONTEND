const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL

const API_ENDPOINT = {
  login: '/login',
  register: '/register',
  product: '/product',
}

const LOCAL_STORAGE_KEY = {
  auth: 'auth',
}

export { API_ENDPOINT, LOCAL_STORAGE_KEY, API_BASE_URL, IMAGE_BASE_URL }
