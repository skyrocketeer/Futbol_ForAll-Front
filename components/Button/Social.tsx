import FacebookIcon from "@assets/svg/facebook"
import GoogleIcon from "@assets/svg/google"
import PhoneIcon from "@assets/svg/phone"

interface SocialSignInButton {
	label: string,
	logo: string,
}

function SocialSignInButton({label, logo} : SocialSignInButton) {
	const logoType = (name: string) : JSX.Element => {
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
		<div className='flex w-full py-2 border border-gray-400 text-gray-500 rounded-lg'>
			<div className='ml-3'>{logoType(logo)}</div>
			<div className='mx-auto my-auto text-sm'>{label}</div>
		</div>
	)
}

export default SocialSignInButton
