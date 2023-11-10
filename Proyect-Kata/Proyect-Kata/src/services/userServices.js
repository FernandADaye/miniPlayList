import axios from 'axios'

const BASE_URL = 'https://ecomerce-json.jwt.onrender.com'

const registerUseService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export { registerUseService, loginUserService }
