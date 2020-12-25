import Layout from "@components/Layout/main"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance } from 'keycloak-js'

function Teams(){
	const { keycloak } = useKeycloak<KeycloakInstance>()
	const renderContent = () => {
		return (
			<>
				<div className='flex flex-col justify-center w-full items-center h-full'>
					<FontAwesomeIcon icon={faGlobeAsia} size="6x"/>
					<p className='text-3xl font-semibold my-10'>Let's make our world a better place</p>
				</div>
			{keycloak?.authenticated ? (
				<>
					<button
						type="button"
						className="mx-2 btn btn-outline-primary"
						onClick={() => {
							if (keycloak) {
								window.location.href = keycloak.createAccountUrl()
							}
						}}
					>
						My Account
					</button>

					<button
						type="button"
						className="mx-2 btn btn-outline-danger"
						onClick={() => {
							if (keycloak) {
								window.location.href = keycloak.createLogoutUrl()
							}
						}}
					>
						Logout
					</button>
				</>
			) : (
				<>
					<button
						type="button"
						className="mx-2 btn btn-outline-primary"
						onClick={() => {
							if (keycloak) {
								window.location.href = keycloak.createRegisterUrl()
							}
						}}
					>
						Signup
					</button>

					<button
						type="button"
						className="mx-2 btn btn-outline-success"
						onClick={() => {
							if (keycloak) {
								window.location.href = keycloak.createLoginUrl()
							}
						}}
					>
						Login
					</button>
				</>
			)}
		</>
	)}
	
	return (
		<Layout>
			{renderContent()}
		</Layout>
	)
}

export default Teams
