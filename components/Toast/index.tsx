import clsx from 'clsx'

type Props = {
	text: string,
	type: number
}

Toast.defaultProps = {
	text: "Success",
}

function Toast({ text,type } : Props) {
	return (
		<div
			className={clsx(
				'p-2 items-center text-indigo-100 leading-none rounded-full toast inline-flex md:animate-popUp', 
				type === 1 ? 'bg-green-200 ' : 'bg-red-300'
			)}
			role='alert'
		>
			<div className={clsx(
				'flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3', 
				type === 1 ? 'bg-green-700' : 'bg-red-600' 
				)}
				style={{height:'16px'}}
			>
				<span>{type === 1 ? 'Success' : 'Failed'}	</span>			
			</div>
			<div className={clsx('mr-2 text-left text-sm font-semibold flex-auto', type === 1 ? 'text-teal-500' : 'text-purple-800')}>
				{text}
			</div>
		</div>
	)
}

export default Toast