import Link from "next/link"
// import Modal from "@components/Modal/LoginForm"
import { useRouter } from "next/router"
import clsx from 'clsx'

type Menu = {
	name: string,
	link: string
}

function Navbar({ isOpen }: { isOpen: boolean }) {
	const router = useRouter()

	const menus: Array<Menu> = [
		{ name: "Stadium", link: "/stadiums" },
		{ name: "Teams", link: "/posts" },
		{ name: "MyTeams", link: "/teams" },
	]

	const renderMenu = (): JSX.Element => {
		return (
			<div className='sm:flex sm:justify-evenly text-neon-main font-bold sm:w-3/5'>
				{menus.map((el, index) => (
				<Link href={el.link} key={index}>
					<a className='block py-1 hover:bg-gray-800'> {el.name} </a>
				</Link>
				))}
			</div>
		)
	}

	const renderButton = (): JSX.Element =>
		window.innerWidth >= 640 ?
			<div className='text-center flex'>
				<button className='text-neon-main border border-neon-main hover:bg-gray-800 px-3 mr-3 rounded-full'>
					Log in
				</button>
				<button
					className='bg-neon-main text-secondary border border-secondary hover:bg-neon-light px-3 rounded-full'
					onClick={() => router.push("/accounts/create")}
				>
					Sign up
				</button>
			</div>
		:
			<div className='font-thin text-neon-main border-t border-gray-700'>
				<div className='py-1 hover:bg-gray-800 cursor-pointer'>Login</div>
				<div className='hover:bg-gray-800 cursor-pointer' onClick={() => router.push("/accounts/create")}>Sign up</div>
			</div>

	return (
		<nav className={clsx('px-2 py-2 sm:flex sm:p-0 sm:items-center sm:justify-between sm:w-full',isOpen ? 'block' : 'hidden')}>
			{renderMenu()}
			{renderButton()}
		</nav>
	)
}

export default Navbar
