// import { useState, useEffect } from "react"
// import axios from "@plugins/axios"
// import RoundedButton from "@components/Button/Round"

function Stadium(props) {
// 	const [data, setData] = useState(null)

// 	const payload = { phoneNumber: 9875454554, password: "test" }
// 	useEffect(() => {
// 		axios
// 			.post("/api/auth/authenticate", payload)
// 			.then(res => {
// 				localStorage.setItem("access_token", res.data.token)
// 				return
// 			})
// 			.catch(err => console.log(err.response.data))
// 	}, [])

// 	function getData() {
// 		axios
// 			.get("/api/auth/protected")
// 			.then(res => {
// 				console.log(res.data)
// 				let newData = res.data.message
// 				setData(newData)
// 			})
// 			.catch(err => console.log(err.response.data))
// 	}

	return (
        <div>new page here</div>
		// <div>
		// 	<RoundedButton label='API CALL' onBtnClick={getData} />
		// 	<div>{data !== null ? data : null}</div>
		// </div>
	)
}

export default Stadium
