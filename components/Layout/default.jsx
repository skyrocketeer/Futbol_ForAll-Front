import Head from "next/head"
// import Footer from "@components/Footer"

function Layout(props) {
	const { title, content } = props

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<title>{title || "new NextJs app"} </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='main-app'>
				<div className='w-1/4 mt-5 mx-auto'>{content}</div>
			</div>
			{/* <Footer /> */}
		</>
	)
}

export default Layout
