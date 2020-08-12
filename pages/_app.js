import React, { useEffect } from "react"
import "@styles/main.scss"

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return <Component {...pageProps} />
}

export default App
