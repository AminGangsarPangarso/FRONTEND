import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const deleteProductService = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_ENDPOINT.product}/${id}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default deleteProductService
