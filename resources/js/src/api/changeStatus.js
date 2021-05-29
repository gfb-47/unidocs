const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
    changeStudentStatus: (id) => axios.put(`${BASE_URL}/student/${id}`),

    changeProfessorStatus: (id) => axios.put(`${BASE_URL}/professor/${id}`)
}
