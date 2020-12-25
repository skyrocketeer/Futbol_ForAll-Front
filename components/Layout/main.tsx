import Head from "next/head"
import Header from "@components/Header"
import Footer from "@components/Footer"

export const siteTitle = 'Next.js website'

export default function Layout({ children, title }:{ children: React.ReactNode, title? : String }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, height=device-height'
				/>
				<meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
				<title>{title || "new NextJs app"} </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='main-app' className="flex flex-col min-h-screen">
				<Header />
				<main className='xs:w-full sm:w-4/5 xs:mx-0 sm:mx-auto my-10 flex-grow'>{children}</main>
				<Footer />
			</div>
		</>
	)
}
