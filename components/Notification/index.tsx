import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
	text: string,
	textColor?: string,
	icon: IconProp,
	color?: string
}

Notification.defaultProps = {
	text: "Success",
}

function Notification({ text, textColor, icon, color } : Props) {
	return (
		<div className="absolute z-10 top-3">
				<div className="bg-gray-100 rounded-lg border-gray-300 border p-3 shadow-lg">
					<div className="flex flex-row">
						<div className="px-2">
							<FontAwesomeIcon icon={icon} color={color} />
							{/* <svg width="24" height="24" viewBox="0 0 1792 1792" fill="" xmlns="http://www.w3.org/2000/svg">
								<path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
								</svg> */}
						</div>
						<div className="ml-2 mr-6">
							<span className={textColor? textColor: "text-gray-900"}>{text}</span>
						</div>
					</div>
				</div>
		</div>
	)
	// // <div
		// // 	className={clsx(
		// // 		'p-2 items-center text-indigo-100 leading-none rounded-full inline-flex', 
		// // 		type === 1 ? 'bg-green-200 ' : 'bg-red-300'
		// // 	)}
		// // 	role='alert'
		// // >
		// 	{/* <div className={clsx(
		// 		'flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3', 
		// 		type === 1 ? 'bg-green-700' : 'bg-red-600' 
		// 		)}
			
		// 	> */}
		// return	(
		// 	// <div className="px-6 py-4 whitespace-no-wrap">
		// 		<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
    //               Active
    //             </span>
		// 	// </div>
		// 	)
		// 		{/* <span>{type === 1 ? 'Success' : 'Failed'}	</span>			 */}
		// 	{/* </div>
		// 	<div className={clsx('mr-2 text-left text-sm font-semibold flex-auto', type === 1 ? 'text-teal-500' : 'text-purple-800')}>
		// 		{text}
		// 	</div> */}
		// // </div>
}

export default Notification