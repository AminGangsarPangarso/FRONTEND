import { toast } from 'react-toastify'

const defaultStyleToast = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
}

const toastSuccess = (message, options = {}) => {
  toast.success(message, {
    ...defaultStyleToast,
    ...options,
  })
}

const toastError = (message, options = {}) => {
  toast.error(message, {
    ...defaultStyleToast,
    ...options,
  })
}

const toastInfo = (message, options = {}) => {
  toast.info(message, {
    ...defaultStyleToast,
    ...options,
  })
}

const toastWarn = (message, options = {}) => {
  toast.warn(message, {
    ...defaultStyleToast,
    ...options,
  })
}

const toastApiSuccess = (res, options = {}) => {
  toastSuccess(res?.data?.message || res?.message || 'Success', options)
}

const toastApiError = (err, options = {}) => {
  toastError(
    err?.response?.data?.message || err?.message || 'Something when wrong',
    options
  )
}

export {
  toastSuccess,
  toastError,
  toastInfo,
  toastWarn,
  toastApiSuccess,
  toastApiError,
}
