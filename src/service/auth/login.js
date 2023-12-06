import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const loginService = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_ENDPOINT.login, {
        user_name: email,
        password,
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default loginService
