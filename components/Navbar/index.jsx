import Link from "next/link"
// import Modal from "@components/Modal/LoginForm"
import { useState } from "react"

function Navbar() {
	const menus = [
		{ name: "Stadium", link: "/stadiums" },
		{ name: "Teams", link: "/posts" },
		{ name: "MyTeams", link: "/posts" },
	]

	const [isOpen, setOpenModal] = useState(false)

	function openModal() {
		setOpenModal(true)
	}

	function closeModal() {
		setOpenModal(false)
	}

	const renderMenu = () => {
		return menus.map((el, index) => (
			<div className='flex-1 text-center' key={index}>
				<Link href={el.link}>
					<a className='text-neon-main'> {el.name} </a>
				</Link>
			</div>
		))
	}

	return (
		<div className='flex items-center w-3/5 mx-5'>{renderMenu()}</div>
		// <AppBar position='static' color='transparent' elevation={0}>
		// 	<Toolbar>
		// 		<Hidden smDown>
		// 			<Grid container item xs sm={10}>
		// 				{renderMenu()}
		// 			</Grid>

		// 			<Grid item container xs sm={3}>
		// 				<Grid item md={5} lg={4} xl={3} className='center'>
		// 					<RoundedButton label='Login' onBtnClick={openModal} />
		// 				</Grid>
		// 				<Grid item md={7} lg={5} xl={4} className='center'>
		// 					<RoundedButton label='Join now' background={true} link='/accounts/create' />
		// 				</Grid>
		// 			</Grid>
		// 		</Hidden>

		// 		<Hidden smUp>
		// 			<IconButton
		// 				edge='start'
		// 				className={style.menuButton}
		// 				color='inherit'
		// 				aria-label='menu'
		// 			>
		// 				<MenuIcon />
		// 			</IconButton>
		// 		</Hidden>
		// 	</Toolbar>
		// 	<Modal open={isOpen} onModalClose={closeModal} />
		// </AppBar>
	)
}

export default Navbar
