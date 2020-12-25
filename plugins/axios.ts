import axios from 'axios'

// declare a request interceptor
axios.interceptors.request.use(
  config => {
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    
    return config
  },
  error => {
    console.log(error)
    // handle the error
    return Promise.reject(error)
  }
)

export default axios
