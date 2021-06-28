const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getAllJury: () => axios.get(`${BASE_URL}/jury`),

  addJury: (data) => axios.post(`${BASE_URL}/jury`, data),

  updateJury: (post, id) => axios.put(`${BASE_URL}/jury/${id}`, post),

  getOneJury: () => axios.get(`${BASE_URL}/jury/${id}`),

}