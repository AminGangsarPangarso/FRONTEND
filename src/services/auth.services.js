import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const authServices = {
  login: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_ENDPOINT.login, {
          username,
          password,
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },
  register: ({ email, username, password, phoneNumber }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_ENDPOINT.register, {
          username,
          password,
          email,
          phone_number: phoneNumber,
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },
}

export default authServices
