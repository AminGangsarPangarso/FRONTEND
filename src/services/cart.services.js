import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const cartServices = {
  checkout: ({ products }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_ENDPOINT.checkout, {
          products,
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },
}

export default cartServices
