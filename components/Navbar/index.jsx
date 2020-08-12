import AppBar from "@material-ui/core/AppBar"
import RoundedButton from "@components/Button/Round"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core"
import Link from "next/link"
import Modal from "@components/Modal/LoginForm"
import { useState } from "react"

const useStyles = makeStyles(theme => ({
	orange: {
		color: theme.palette.primary.main,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}))

function Navbar() {
	const style = useStyles()
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
			<Grid item xs sm={2} key={index}>
				<Link href={el.link}>
					<a className={style.orange}> {el.name} </a>
				</Link>
			</Grid>
		))
	}

	return (
		<AppBar position='static' color='transparent' elevation={0}>
			<Toolbar>
				<Hidden smDown>
					<Grid container item xs sm={10}>
						{renderMenu()}
					</Grid>

					<Grid item container xs sm={3}>
						<Grid item md={5} lg={4} xl={3} className='center'>
							<RoundedButton label='Login' onBtnClick={openModal} />
						</Grid>
						<Grid item md={7} lg={5} xl={4} className='center'>
							<RoundedButton label='Join now' background={true} link='/accounts/create' />
						</Grid>
					</Grid>
				</Hidden>

				<Hidden smUp>
					<IconButton
						edge='start'
						className={style.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
			<Modal open={isOpen} onModalClose={closeModal} />
		</AppBar>
	)
}

export default Navbar
