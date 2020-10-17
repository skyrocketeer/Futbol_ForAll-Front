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
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<title>{title || "new NextJs app"} </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='main-app'>
				<Header />
				<div className='w-2/3 mx-auto my-10'>{content}</div>
				<div className='bg-secondary'>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Layout
