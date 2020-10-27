import style from './token.module.scss'
import clsx from 'clsx'

type Props = {
	id: string, 
	propClassName: string, 
	token: number, 
	onTokenChange: Function
}

function TokenInput({ id, propClassName, token, onTokenChange }: Props) {

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
		onTokenChange(e.target.value, parseInt(e.target.id))
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
			id={id.toString()}
			maxLength={1}
		/>
	)
}

export default TokenInput
