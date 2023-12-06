import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const createProductService = ({ image, name, price, description }) => {
  return new Promise((resolve, reject) => {
    const data = new FormData()
    data.append('images', image)
    data.append('product_name', name)
    data.append('product_price', price)
    data.append('product_description', description)
    axios
      .post(API_ENDPOINT.product, data)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default createProductService
