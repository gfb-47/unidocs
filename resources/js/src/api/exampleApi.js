const axios = window.axios;
const BASE_URL = `${getUrl()}/api/v1`

export default {
    getAllPosts: () => axios.get(`${BASE_URL}posts`),

    getOnePost: (id) => axios.get(`${BASE_URL}posts/${id}/edit`),

    addPost: (post) => axios.post(`${BASE_URL}posts`, post),

    updatePost: (post, id) => axios.put(`${BASE_URL}posts/${id}`, post),

    deletePost: (id) => axios.delete(`${BASE_URL}posts/${id}`),
    
}