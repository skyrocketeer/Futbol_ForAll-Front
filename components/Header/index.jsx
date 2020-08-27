import Navbar from "@components/Navbar"
import style from "./header.module.css"
import { useRouter } from "next/router"

function Header() {
	const router = useRouter()

	return (
		<div role='top-nav' className='bg-secondary'>
			<div className='flex w-2/3 mx-auto'>
				<div className='mt-3 mb-1 mr-8'>
					<img className={style.logo} src='/logo.png' alt='logo' />
				</div>
				<Navbar />
				<div className='flex w-1/3 justify-end items-center'>
					<div className='text-center m-2'>
						<button className='text-neon-main border border-neon-main hover:bg-gray-800 px-3 rounded-full'>
							Log in
						</button>
					</div>
					<div className='text-center m-2'>
						<button
							className='bg-neon-main text-secondary border border-secondary hover:bg-neon-light px-3 rounded-full'
							onClick={() => router.push("/accounts/create")}
						>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
