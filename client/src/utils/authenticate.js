import axios from 'axios'

export function setAuthenticationHeader(token) {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defatults.headers.common['Authorization']
  }
}
