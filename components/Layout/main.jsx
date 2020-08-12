import Head from "next/head"
import Header from "../Header"
import Container from "@material-ui/core/Container"
import Footer from "../Footer"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "@styles/theme"

function Layout(props) {
	return (
		<div id='main-app'>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<title>new NextJs app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container fixed maxWidth='lg'>
					{props.content}
				</Container>
				<Footer />
			</ThemeProvider>
		</div>
	)
}

export default Layout
