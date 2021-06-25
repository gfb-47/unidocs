const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
    getAllJury: () => axios.get(`${BASE_URL}/jury`),

    addJury: (id) => axios.post(`${BASE_URL}/jury`, id),

    updatePost: (post, id) => axios.put(`${BASE_URL}/jury/${id}`, post),

    getOneJury: () => axios.get(`${BASE_URL}/jury/${id}`),
    
  // deletePost: (id) => axios.delete(`${BASE_URL}/students/${id}`),

}