const axios = window.axios
const BASE_URL = 'http://localhost:8000/api/v1'

export default {
  getProfile: () => axios.get(`${BASE_URL}/auth/profile`),
}