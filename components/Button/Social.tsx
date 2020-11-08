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
		<div className='flex w-full py-2 border border-gray-400 text-gray-600 rounded-lg'>
			<div className='ml-3'>{logoType(logo)}</div>
			<div className='flex-1 my-auto text-sm'>
				<span className="pl-28">{label}</span>
			</div>
		</div>
	)
}

export default SocialSignInButton
