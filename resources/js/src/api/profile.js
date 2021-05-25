const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getProfile: () => axios.get(`${BASE_URL}/auth/profile`),

  updateProfile: (profile) => axios.put(`${BASE_URL}/auth/profile/`, profile),
}