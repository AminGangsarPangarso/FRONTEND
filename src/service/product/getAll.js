import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const getAllProductService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINT.product)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default getAllProductService
