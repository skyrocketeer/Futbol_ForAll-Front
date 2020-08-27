const { colors } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
	purge: [],
	theme: {
		fontFamily: {
			sans: ["Gilroy"],
			serif: ["Gilroy"],
		},
		extend: {
			colors: {
				red: {
					...colors.red,
					500: "#E53E3E",
					600: "#ef1616",
				},
				green: {
					primary: "#29A8AB",
				},
				neon: {
					light: "rgb(234 255 56)",
					main: "#d6ed17ff",
				},
				secondary: "#101820FF",
			},
			margin: {
				96: "24rem",
				128: "32rem",
			},
			animation: {
				popUp: "fadein 0.5s, fadeout 0.5s 2.5s",
			},
			keyframes: {
				fadein: {
					from: {
						bottom: 0,
						opacity: 0,
					},
					to: {
						bottom: "30px",
						opacity: 1,
					},
				},
				fadeout: {
					from: {
						bottom: "30px",
						opacity: 1,
					},
					to: {
						bottom: 0,
						opacity: 0,
					},
				},
			},
		},
	},
	variants: {
		opacity: ["responsive", "hover"],
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			// Add your custom styles here
			const toastUtil = {
				".toast": {
					"min-width": "250px" /* Set a default minimum width */,
					"margin-left": "-125px" /* Divide value of min-width by 2 */,
					"text-align": "center" /* Centered text */,
					position: "fixed" /* Sit on top of the screen */,
					"z-index": 1 /* Add a z-index if needed */,
					left: "50%" /* Center the snackbar */,
					bottom: "30px" /* 30px from the bottom */,
				},
			}
			addUtilities(toastUtil)
		}),
	],
}
