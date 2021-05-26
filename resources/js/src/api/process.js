const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getProcesses: () => axios.get(`${BASE_URL}/process`),

  getTerms: (id) => axios.get(`${BASE_URL}/process/terms/${id}`),

  showProcess: (id) => axios.get(`${BASE_URL}/process/${id}`),

  addProcess: (post) => axios.post(`${BASE_URL}/process`, post),

  updateProcess: (post, id) => axios.put(`${BASE_URL}/process/${id}`, post),

}