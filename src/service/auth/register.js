import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

export const registerService = ({ username, password, email, number }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_ENDPOINT.logincostumers, {
        username,
        password,
        email,
        number,
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}
