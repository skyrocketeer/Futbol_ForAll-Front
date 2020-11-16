import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE,
	// declare a request interceptor
	axios.interceptors.request.use(
		config => {
			const key = localStorage.getItem("access_token")
			// perform a task before the request is sent
			if (key) {
				axios.defaults.headers.common["Authorization"] = key
			}
			return config
		},
		error => {
			console.log(error)
			// handle the error
			return Promise.reject(error)
		}
	)

export default axios
