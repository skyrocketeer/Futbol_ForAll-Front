import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import Navbar from "@components/Navbar"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
	bg: {
		background: theme.palette.secondary.main,
	},
	logo: {
		height: "50px",
		width: "50px",
		marginLeft: "100px",
		display: "block",
	},
}))

function Header() {
	const style = useStyles()

	return (
		<div className={clsx(style.bg, "top-nav flex elevation")}>
			<Grid container alignItems='center'>
				<Grid item xs sm={2}>
					<img src='/logo.png' alt='logo' className={style.logo} />
				</Grid>

				<Grid item xs sm={10} md={9}>
					<Navbar />
				</Grid>
			</Grid>
		</div>
	)
}

export default Header
