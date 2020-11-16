import Head from "next/head"
import Footer from "@components/Footer"

export const siteTitle = 'Next.js website'

export default function Layout({
	content,
	title
}: {
	content: React.ReactNode,
	title? : String
}) {
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
			<div id='main-app' className='bg-gray-facebook min-h-screen flex flex-col'>
				<main className='md:w-1/2 lg:w-3/5 sm:w-2/3 py-10 sm:mb-6 sm:mx-auto flex-grow'>
					{content}
				</main>
				<Footer />
			</div>
		</>
	)
}