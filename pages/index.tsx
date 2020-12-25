import Layout from "@components/Layout/main"
import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js'
// import { GetStaticProps, InferGetStaticPropsType } from "next"

// export const getStaticProps: GetStaticProps = async () => {
// 	const posts = await axios
// 		.get(`${process.env.NEXT_FRONT_DOMAIN}/api/posts`)
// 		.then(res => res.data)
// 		.catch(err => console.log(err.response))
	
// 	return { props: { posts: posts || [] } } 
// 	}

type ParsedToken = KeycloakTokenParsed & {
  email?: string

  preferred_username?: string

  given_name?: string

  family_name?: string
}

function HomePage() {
	const { keycloak } = useKeycloak<KeycloakInstance>()
	const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed

	const loggedinState = keycloak?.authenticated ? (
    <span className="text-success">logged in</span>
  ) : (
    <span className="text-danger">NOT logged in</span>
	)
	
	const renderContent = () => {
		const welcomeMessage =
    keycloak?.authenticated || (keycloak && parsedToken)
      ? `Welcome back ${parsedToken?.preferred_username ?? ''}!`
      : 'Welcome visitor. Please login to continue.'

  return (
    <>
			<h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <p>You are: {loggedinState}</p>
      <p>{welcomeMessage}</p>
		</>
	)
		// return (
			// <div className='block sm:grid sm:grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 sm:gap-4'>
			// 	{cards.map(card => (
			// 		<div
			// 			className='rounded overflow-hidden shadow-lg mb-4 mx-2 cursor-pointer'
			// 			key={card.title}
			// 			onClick={() => router.push(`/posts/${card.id}`)}
			// 		>
			// 			<img className='h-48 w-full object-cover' src={`/images/${card.img}`} />
			// 			<div className='px-6 py-2'>
			// 				<div className='font-bold text-xl mb-2'>{card.title}</div>
			// 				<p className='text-gray-700 text-base line-clamp'>
			// 					{card.content.trim().slice(0, 150) + '...'}
			// 				</p>
			// 			</div>
			// 			<div className='flex flex-wrap px-4 py-2'>
			// 				{card.tags.map(tag => (
			// 					<span
			// 						key={tag}
			// 						className='inline-block bg-blue-100 text-indigo-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'
			// 					>
			// 						{tag}
			// 					</span>
			// 				))}
			// 			</div>
			// 		</div>
			// 	))}
			// </div>
		// )
	}

	return ( 
		<Layout>
			{renderContent()}
		</Layout>
	)
}

export default HomePage