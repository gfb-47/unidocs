const axios = window.axios
const BASE_URL = `${getUrl()}/api/v1`

export default {
  getProcesses: () => axios.get(`${BASE_URL}/process`),

  getSemesterProcesses: () => axios.get(`${BASE_URL}/process2`),

  getTerms: (id) => axios.get(`${BASE_URL}/process/terms/${id}`),

  resetTerms: (id, data) => axios.post(`${BASE_URL}/process/terms/${id}/reset`, data),

  destroyTerms: (id) => axios.delete(`${BASE_URL}/process/terms/${id}/destroy`),

  showProcess: (id) => axios.get(`${BASE_URL}/process/${id}`),

  addProcess: (post) => axios.post(`${BASE_URL}/process`, post),

  updateProcess: (post, id) => axios.put(`${BASE_URL}/process/${id}`, post),

  orientationSet: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/semesterprofessor`, data),

  acceptOrientation: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/acceptorientation`, data),

  rejectOrientation: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/rejectorientation`, data),

  processToDefense: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/todefense`, data),

  processRating: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/ratingprocess`, data),

  processFinish: (data, id) => axios.put(`${BASE_URL}/process/changestatus/${id}/finalizeprocess`, data),

  getUserName: () => axios.get(`${BASE_URL}/public/getusername`),


}