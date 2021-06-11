const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getStudentMainProcess: () => axios.get(`${BASE_URL}/student/process/main`),

  getProfessorMainProcess: () => axios.get(`${BASE_URL}/professor/process/main`),

  getMainProcess: () => axios.get(`${BASE_URL}/main/process`),
}