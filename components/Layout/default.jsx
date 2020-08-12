import Head from "next/head"
import Container from "@material-ui/core/Container"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "@styles/theme"

function DefaultLayout(props) {
	const { title, content } = props

	return (
		<div id='main-app'>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth='xl'>{content}</Container>
			</ThemeProvider>
		</div>
	)
}

export default DefaultLayout
