import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const getAllLandingService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINT.landing)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default getAllLandingService
