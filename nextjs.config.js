const withPlugins = require('next-compose-plugins')
const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")
const withFonts = require("next-fonts")

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins(
	[
		[withFonts],
		[withSass, {
			enableSvg: true,
			webpack(config, options) {
				config.module.rules.push({
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					use: {
						loader: "url-loader",
					},
				})
				return config
			},
		}],
		[withCSS],
		[withBundleAnalyzer],
	],
	{
		typescript: {
			// !! WARN !!
			// Dangerously allow production builds to successfully complete even if
			// your project has type errors.
			// !! WARN !!
			ignoreBuildErrors: true,
		},
	}
)