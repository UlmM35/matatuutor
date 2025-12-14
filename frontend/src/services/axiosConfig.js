import axios from 'axios'
import { store } from '../store'
import { logOut } from '../reducers/userReducer'

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const url = error.config?.url

    if (status === 401 && !url.includes('/login')) {
      alert('Session expired, logging out.')
      store.dispatch(logOut())
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)
}