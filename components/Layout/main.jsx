import Head from "next/head"
import Header from "@components/Header"
import Footer from "@components/Footer"

function Layout(props) {
	const { title, content } = props

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, height=device-height'
				/>
				<title>{title || "new NextJs app"} </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='main-app' className="h-full">
				<Header />
				<div className='mx-4 sm:w-4/5 sm:mx-auto my-10' id='main-content'>{content}</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout
