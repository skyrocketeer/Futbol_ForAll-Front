import style from './token.module.scss'
import clsx from 'clsx'

function TokenInput(props) {
	const { id, forwardRef, propClassName, token, onTokenChange } = props

	function validate(evt) {
		const theEvent = evt || window.event
		let key

		// Handle paste
		if (theEvent.type === 'paste') {
			debugger
			key = window.event.clipboardData.getData('text/plain')
		} else {
			// Handle key press
			debugger
			key = theEvent.keyCode || theEvent.which
			key = String.fromCharCode(key)
		}

		const regex = /[0-9]|\./

		if( !regex.test(key) ) {
			theEvent.returnValue = false
			if(theEvent.preventDefault) theEvent.preventDefault()
		}
	}

	function handleChange(e) {
		// if(typeof e.target.value !== 'Number') return 
		// const validated = validate(e)
		onTokenChange(e.target.value, e.target.id)
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
			ref={forwardRef}
			id={id}
			maxLength={1}
		/>
	)
}

export default TokenInput
