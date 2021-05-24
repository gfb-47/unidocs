const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getAllCourses: () => axios.get(`${BASE_URL}/course`),

  // getOnePost: (id) => axios.get(`${BASE_URL}/students/${id}/edit`),

  // addPost: (post) => axios.post(`${BASE_URL}/students`, post),

  // updatePost: (post, id) => axios.put(`${BASE_URL}/students/${id}`, post),

  // deletePost: (id) => axios.delete(`${BASE_URL}/students/${id}`),

}