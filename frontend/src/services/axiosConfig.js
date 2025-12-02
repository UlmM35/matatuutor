import axios from 'axios'
import { store } from '../store'
import { logOut } from '../reducers/userReducer'

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        alert("Token expired, logging out.")
        store.dispatch(logOut())
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }
  )
}