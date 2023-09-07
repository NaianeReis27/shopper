import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3330/products',
  timeout: 5000,
})

export default api