import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const getDetailLanding = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_ENDPOINT.landing}/${id}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default getDetailLanding
