const { colors, animation } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
	purge: {
		mode: 'all',
		content: ['./pages/**/*.tsx']
	},
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
				gray: {
					...colors.gray,
					facebook: "#edf0f5",
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
				...animation,
				popUp: "fadein 1.5s, fadeout 0.5s 3s",
			},
			keyframes: {
				fadein: {
					from: {
						right: "-165px",
						opacity: 0,
					},
					to: {
						top: "300px",
						right: 0,
						opacity: 1,
					},
				},
				fadeout: {
					from: {
						top: "300px",
						right: 0,
						opacity: 1,
					},
					to: {
						right: "-165px",
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
			const newUtil = {
				".toast": {
					"text-align": "center" /* Centered text */,
					position: "fixed" /* Sit on top of the screen */,
					"z-index": 5 /* Add a z-index if needed */,
					right: "0px",
					top: "300px" /* 30px from the bottom */,
				},
				".line-clamp": {
					display: "-webkit-box",
					"-webkit-line-clamp": 3,
					"-webkit-box-orient": "vertical",
					overflow: "hidden",
					"text-overflow": "ellipsis",
				},
			}
			addUtilities(newUtil)
		}),
	],
}
