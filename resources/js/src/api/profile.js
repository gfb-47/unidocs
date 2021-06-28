const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getProfile: () => axios.get(`${BASE_URL}/auth/profile`),

  updatePhone: (phone) => axios.put(`${BASE_URL}/auth/profile/`, phone),

  updatePassword: (password) => axios.put(`${BASE_URL}/auth/profile2/`, password),
}