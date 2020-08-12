import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const TextColorBtn = withStyles(theme => ({
	root: {
		color: "#fff",
	},
}))(Button)

function RoundedButton(props) {
	const { label, background, size, type, onBtnClick, link } = props

	function handleClick(event) {
		if (onBtnClick) onBtnClick(event)
		return
	}

	if (background) {
		return (
			<TextColorBtn
				type={type}
				variant='contained'
				color='primary'
				disableElevation
				size={size || "small"}
				className='rounded-btn'
				onClick={handleClick}
				href={link || null}
			>
				{label}
			</TextColorBtn>
		)
	}
	return (
		<Button
			variant='outlined'
			color='primary'
			disableElevation
			size='small'
			className='rounded-btn'
			onClick={handleClick}
			href={link || null}
		>
			{label}
		</Button>
	)
}

RoundedButton.propTypes = {
	label: PropTypes.string,
	background: PropTypes.bool,
	type: PropTypes.string,
	size: PropTypes.string,
	onBtnClick: PropTypes.func,
}

PropTypes.defaultProps = {
	label: "button",
	background: false,
	type: "button",
	onBtnClick: null,
}

export default RoundedButton
