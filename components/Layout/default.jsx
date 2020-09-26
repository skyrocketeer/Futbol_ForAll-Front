import Head from "next/head"
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
			<div id='main-app' className='bg-gray-facebook'>
				<div className='md:w-1/2 lg:w-3/5 py-10 md:mx-auto' role='main'>
					{content}
				</div>
				<div className='bg-secondary'>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Layout