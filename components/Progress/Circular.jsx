import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles(theme => ({
	top: {
		color: "#1a90ff",
		animationDuration: "550ms",
	},
}))

function CustomCircularProgress(props) {
	const classes = useStylesFacebook()

	return (
		<CircularProgress
			variant='indeterminate'
			disableShrink
			className={classes.top}
			size={40}
			thickness={4}
			{...props}
		/>
	)
}

export default CustomCircularProgress
