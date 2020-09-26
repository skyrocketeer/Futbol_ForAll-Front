import PropTypes from "prop-types"

SuccessToast.propTypes = {
	text: PropTypes.string,
}

SuccessToast.defaultProps = {
	text: "Success",
}

function SuccessToast(props) {
	const { text } = props
	return (
		<div
			className='p-2 bg-green-200 items-center text-indigo-100 leading-none rounded-full inline-flex toast animate-popUp'
			role='alert'
		>
			<span className='flex rounded-full bg-green-700 uppercase px-2 py-1 text-xs font-bold mr-3'>
				Success
			</span>
			<span className='mr-2 text-left text-teal-500 text-sm flex-auto'>{text}</span>
			{/* <svg
				className='fill-current opacity-75 h-4 w-4'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 20 20'
			>
				<path d='M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z' />
			</svg> */}
		</div>
	)
}

export default SuccessToast
