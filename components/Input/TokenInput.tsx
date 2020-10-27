import style from './token.module.scss'
import clsx from 'clsx'

type Props = {
	index: number, 
	propClassName: string, 
	token: number, 
	onTokenChange: Function
}

function TokenInput({ index, propClassName, token, onTokenChange }: Props) {

	// function validate(evt) {
	// 	const theEvent = evt || window.event
	// 	let key

	// 	// Handle paste
	// 	if (theEvent.type === 'paste') {
	// 		debugger
	// 		key = window.event.clipboardData.getData('text/plain')
	// 	} else {
	// 		// Handle key press
	// 		debugger
	// 		key = theEvent.keyCode || theEvent.which
	// 		key = String.fromCharCode(key)
	// 	}

	// 	const regex = /[0-9]|\./

	// 	if( !regex.test(key) ) {
	// 		theEvent.returnValue = false
	// 		if(theEvent.preventDefault) theEvent.preventDefault()
	// 	}
	// }

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		// if(typeof e.target.value !== 'Number') return 
		// const validated = validate(e)
		onTokenChange(e.target)
	}

	// useEffect(() => {
	// 	if( Object.values(payload).some( item => item ) ){
	// 		if (moveNext) return moveNext(payload)
	// 	}
	// }, [payload])

	return (
		<input type="text" 
			className={clsx(style.input__token, propClassName, 'bg-secondary')} 
			onChange={handleChange}
			value={token}
			data-index={index}
			maxLength={1}
		/>
	)
}

export default TokenInput
