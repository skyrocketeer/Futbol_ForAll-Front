import Link from "next/link"
import { useRouter } from "next/router"
import clsx from 'clsx'
import { useState } from "react"
import Transition from '@components/Transition'
import HamburgerMenu from "@components/Hamburger"

type Menu = {
	name: string,
	link: string
}

function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

	function handleMenuState(): void {
		setMenuOpen(!isMenuOpen)
	}

	const menus: Array<Menu> = [
		{ name: "Stadium", link: "/stadiums" },
		{ name: "Teams", link: "/posts" },
		{ name: "MyTeams", link: "/teams" },
	]

	function getMenu(){
		return menus.map((el, index) =>
      <Link href={el.link} key={index}>
        <a 
          className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          {el.name}
        </a>
      </Link>
    )}

	const renderButton = () => {
		// 	<div className='text-center flex'>
		// 		<button 
		// 			className='text-neon-main border border-neon-main hover:bg-gray-800 px-3 mr-3 rounded-full'
		// 			onClick={() => router.push("/accounts/login")}
		// 		>
		// 			Log in
		// 		</button>
		// 		<button
		// 			className='bg-neon-main text-secondary border border-secondary hover:bg-neon-light px-3 rounded-full'
		// 			onClick={() => router.push("/accounts/create")}
		// 		>
		// 			Sign up
		// 		</button>
		// 	</div>
		// :
		// 	<div className='font-thin text-neon-main border-t border-gray-700'>
		// 		<div className='py-1 hover:bg-gray-800 cursor-pointer' onClick={() => router.push("/accounts/login")}>Login</div>
		// 		<div className='hover:bg-gray-800 cursor-pointer' onClick={() => router.push("/accounts/create")}>Sign up</div>
		// 	</div>
    // <div>
    return
  }
  
  const Notifications = () => {
    const [showNotis, setShowNotis] = useState(false)
    
    return ( 
    <>
      <button 
        className="p-1 border-2 border-transparent text-gray-400 rounded-full 
          hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" 
        aria-label="Notifications"
        onClick={() => setShowNotis(!showNotis)}
        onBlur={() => setShowNotis(false)}
      >
        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      {showNotis &&
      <div className="absolute right-36 top-10 mt-2 w-48 rounded-md shadow-lg">
        <div className="py-1 rounded-md bg-white shadow-xs">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">New Likes</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">New Comments</a>
        </div>
      </div>}
    </>)
  }

  const ProfileSetting = () => {
    const [showSetting, setShowSetting] = useState<boolean>(false)

    return (
      <div className="ml-3 relative">
        <button className="max-w-xs flex items-center text-sm rounded-full text-white focus:shadow-solid" 
          id="user-menu" 
          aria-label="User menu" 
          aria-haspopup="true"
          onClick={() => setShowSetting(!showSetting)}
          onBlur={() => setShowSetting(false)}
        >
          <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </button>
        {showSetting && 
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="/accounts/tim-cook" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>}
      </div>
    )
  }
  
  const DesktopMenu = () => 
    <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-20">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center w-4/5">
          <div className="flex-shrink-0">
            <img className="h-8 w-12" src="/logo.jpg" alt="Starboy logo" />
          </div>
          <div className="ml-20 flex items-baseline justify-around space-x-10 w-full">
            {getMenu()}
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <Notifications />
          <ProfileSetting />
        </div>
        <div className="-mr-2 md:hidden flex">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={handleMenuState}/>
        </div>
      </div>
    </div>

  const MobileMenu = () =>
    <>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5 space-x-3">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="space-y-1">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
        </div>
      </div>
    </>

	return (
		<nav className={clsx('bg-gray-800')}>
			{window.innerWidth >= 640 ? DesktopMenu() : MobileMenu()}
		</nav>
	)
}

export default Navbar
