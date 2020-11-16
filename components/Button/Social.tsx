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
			<div className='w-1/4 ml-3'>{logoType(logo)}</div>
			<div className='w-3/4 pl-2 sm:pl-6 md:pl-10 my-auto text-sm'>
				<span className="">{label}</span>
			</div>
		</div>
	)
}

export default SocialSignInButton
