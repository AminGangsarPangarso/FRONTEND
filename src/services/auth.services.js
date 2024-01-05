import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const authServices = {
  login: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_ENDPOINT.login, {
          user_name: email,
          password,
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },
  register: ({ email, username, password, phoneNnumber }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_ENDPOINT.logincostumers, {
          username,
          password,
          email,
          phone_number: phoneNnumber,
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },
}

export default authServices
