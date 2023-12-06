import axios from 'axios'
import { API_BASE_URL, LOCAL_STORAGE_KEY } from '@/constants'
import useAuth from '@/store/auth'

const withAuthorization = () => {
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEY.auth)
  const authState = useAuth?.getState()?.auth?.token
  if (!(authToken || authState)) return {}
  return {
    Authorization: `Bearer ${authState || authToken}`,
  }
}

const axiosIntance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    ...withAuthorization(),
  },
})

export default axiosIntance
