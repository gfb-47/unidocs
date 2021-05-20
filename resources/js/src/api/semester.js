const axios = window.axios
const BASE_URL = 'http://localhost:8000/api/v1'

export default {
  getAllSemesters: () => axios.get(`${BASE_URL}/semester`),

  // getOnePost: (id) => axios.get(`${BASE_URL}/students/${id}/edit`),

  // addPost: (post) => axios.post(`${BASE_URL}/students`, post),

  // updatePost: (post, id) => axios.put(`${BASE_URL}/students/${id}`, post),

  // deletePost: (id) => axios.delete(`${BASE_URL}/students/${id}`),

}