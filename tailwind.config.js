const { colors, animation } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
	purge:[
		'./pages/**/*.tsx',
		'./components/**/*.tsx'
	],
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
		},
	},
	variants: {
		opacity: ["responsive", "hover"],
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			// Add your custom styles here
			const newUtil = {
				".line-clamp": {
					display: "-webkit-box",
					"-webkit-line-clamp": 3,
					"-webkit-box-orient": "vertical",
					overflow: "hidden",
					"text-overflow": "ellipsis",
				},
				".avatar-xs": {
					borderRadius: "50%",
					width: "50px",
					height: "50px",
				},
				".avatar-sm": {
					borderRadius: "50%",
					width: "120px",
					height: "120px",
				},
				".avatar-md": {
					borderRadius: "50%",
					width: "150px",
					height: "150px",
				}
			}
			addUtilities(newUtil)
		}),
	],
}
