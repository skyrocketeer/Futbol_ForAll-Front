import Layout from "@components/Layout/main"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

export default function Posts(){
	const renderContent = () => (
		<div className='flex flex-col justify-center w-full items-center h-full'>
      <FontAwesomeIcon icon={faGlobeAsia} size="6x"/>
			<p className='text-3xl font-semibold my-10'>Let's make our world a better place</p>
    </div>
	)
	
	return <Layout content={renderContent()} />
}
