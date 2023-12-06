import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const getProductByIdService = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_ENDPOINT.product}/${id}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default getProductByIdService
