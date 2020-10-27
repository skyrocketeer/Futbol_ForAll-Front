import Layout from "@components/Layout/main"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

export default function Posts(){
	const renderContent = () => (
		<div className='flex flex-col justify-center w-full items-center h-full'>
      <FontAwesomeIcon icon={faTools} size="6x"/>
			<p className='text-3xl font-semibold my-10'>This page is under construction</p>
    </div>
	)
	
	return <Layout content={renderContent()} />
}
