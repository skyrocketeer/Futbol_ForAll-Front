import PropTypes from "prop-types"
import FacebookIcon from "@assets/svg/facebook"
import GoogleIcon from "@assets/svg/google"
import PhoneIcon from "@assets/svg/phone"

SocialSignInButton.propTypes = {
	label: PropTypes.string,
	logo: PropTypes.string,
}

function SocialSignInButton(props) {
	const { label, logo } = props

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
		<div className='flex w-full mb-3 py-2 border border-gray-400 text-gray-500 rounded-lg'>
			<div className='ml-3'>{logoType(logo)}</div>
			<div className='mx-auto my-auto text-sm'>{label}</div>
		</div>
	)
}

export default SocialSignInButton
