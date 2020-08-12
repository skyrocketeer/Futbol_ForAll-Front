import PropTypes from "prop-types"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"
import clsx from "clsx"
import FacebookIcon from "@assets/svg/facebook"
import GoogleIcon from "@assets/svg/google"
import PhoneIcon from "@assets/svg/phone"

SocialSignInButton.propTypes = {
	label: PropTypes.string,
	logo: PropTypes.string,
}

const useStyle = makeStyles(theme => ({
	button: {
		"&.MuiButtonBase-root": {
			lineHeight: 3,
			border: "2px solid rgb(176, 176, 176)",
			borderRadius: "8px",
			padding: "10px 12px",
		},
	},
	body1: {
		lineHeight: 2,
		fontSize: "14px",
		fontWeight: 400,
		color: "rgb(72, 72, 72)",
	},
}))

function SocialSignInButton(props) {
	const { label, logo } = props
	const style = useStyle()

	const logoType = name => {
		switch (name) {
			case "facebook":
				return <FacebookIcon />
			case "google":
				return <GoogleIcon />
			default:
				return <PhoneIcon />
		}
	}

	return (
		<>
			<ButtonBase className={clsx(style.button, "d-flex w100")} focusRipple>
				{logoType(logo)}
				<Typography component='div' className={clsx(style.body1, "flex")}>
					{label}
				</Typography>
			</ButtonBase>
		</>
	)
}

export default SocialSignInButton
