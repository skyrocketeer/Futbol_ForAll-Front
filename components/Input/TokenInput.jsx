import { useState, useEffect } from "react"

function TokenInput(props) {
	const { moveNext, id, forwardRef } = props
	const [payload, setPayload] = useState({
		value: "",
		id: null,
	})

	function handleInputChange(e) {
		setPayload({
			value: e.target.value,
			id: e.target.id,
		})
	}

	useEffect(() => {
		if (moveNext) return moveNext(payload)
	}, [payload])

	return (
		<div className='token-input__wrapper'>
			<input
				type='password'
				id={id}
				maxLength={1}
				className='token-input'
				onChange={handleInputChange}
				value={payload.value}
				ref={forwardRef}
			/>
		</div>
	)
}

export default TokenInput
