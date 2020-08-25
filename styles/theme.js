import { createMuiTheme } from "@material-ui/core/styles"
import { grey, red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#d6ed17ff",
			main: "#d6ed17ff",
			dark: "#00563f",
		},
		secondary: {
			light: "#606060ff",
			main: "#17293c",
			dark: "#101820FF",
		},
		error: {
			main: red[700],
		},
		background: {
			lightGrey: grey[300],
		},
		default: "#fff",
	},
	shape: {
		borderRadius: "10px",
	},
	typography: {
		fontFamily: ["Gilroy", "Helvetica Neue"].join(","),
	},
	overrides: {
		MuiPaper: {
			elevation2: {
				boxShadow:
					"0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07)",
			},
		},
		MuiButton: {
			root: {
				textTransform: "none",
				lineHeight: 1.2,
				"&:focus": {
					outline: "none",
				},
				"&:hover": {
					cursor: "pointer",
				},
			},
			outlinedSizeSmall: {
				padding: "5px 12px",
			},
			containedSizeSmall: {
				padding: "5px 12px",
			},
		},
		MuiToolbar: {
			gutters: {
				paddingLeft: "0px",
				paddingRight: "0px",
				"@media (min-width: 600px)": {
					paddingLeft: "0px",
					paddingRight: "0px",
				},
			},
		},
	},
})

export default theme
