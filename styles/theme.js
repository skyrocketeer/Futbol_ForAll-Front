import { createMuiTheme } from "@material-ui/core/styles"
import { purple, grey, deepPurple, red } from "@material-ui/core/colors"
import PoppinsLight from "@assets/fonts/Poppins-Light.ttf"

const Poppins = {
	fontFamily: "Poppins",
	fontStyle: "light",
	fontWeight: 400,
	src: `
    local('Poppins'),
    local('Raleway-Light'),
    url(${PoppinsLight}) format('ttf')`,
}

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#97bc62ff",
			main: "#6dd47e",
			dark: "#00563f",
		},
		secondary: {
			light: deepPurple[700],
			main: purple[800],
			dark: "#060b25",
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
		fontFamily: "Poppins",
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
		MuiCssBaseline: {
			"@global": {
				"@font-face": [Poppins],
			},
		},
	},
})

export default theme
