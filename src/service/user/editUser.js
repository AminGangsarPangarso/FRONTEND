import axios from '@/libs/axios'
import { API_ENDPOINT } from '@/constants'

const editUser = ({ number, password }) => {
  return new Promise((resolve, reject) => {
    axios
      .put(API_ENDPOINT.user, {
        number,
        password,
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default editUser
