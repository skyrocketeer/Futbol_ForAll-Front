import HamburgerMenu from "@components/Hamburger"
import { useState } from "react"
import dynamic from "next/dynamic"

const Navbar = dynamic(
  () => import('@components/Navbar'),
  { ssr: false }
)

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false)

	function handleMenuState(){
		setMenuOpen(!isMenuOpen)
	}

	return (
		<header className='bg-secondary sm:flex sm:items-center sm:px-12 sm:py-3'>
			<div className='flex items-center justify-between px-2 md:pl-24 md:pr-8 h-60px'>
				<div className='my-2 mr-2 md:mr-6 overflow-hidden'>
					<img className='h-8 w-16 object-cover' src='/logo.jpg' alt='starboy-logo' />
				</div>
				<div className="sm:hidden">
					<HamburgerMenu isOpen={isMenuOpen} toggleMenu={handleMenuState}/>
				</div>
			</div>
			<Navbar isOpen={isMenuOpen}/>
		</header>
	)
}

export default Header
