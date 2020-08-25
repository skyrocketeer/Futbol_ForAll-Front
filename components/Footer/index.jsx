import { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "next/link"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
	wrapper: {
		marginTop: "20px",
		background: theme.palette.secondary.main,
		height: "293px",
	},
	root: {
		flexGrow: 1,

		"& a": {
			color: theme.palette.primary.light,

			"&:hover": {
				color: theme.palette.primary.dark,
			},
		},
	},
	title: {
		fontSize: "1.3rem",
		fontWeight: 500,
		lineHeight: 2.4,
		color: theme.palette.primary.main,
	},
}))

function Footer() {
	const classes = useStyles()

	return (
		<Container component='footer' maxWidth={false} className={classes.wrapper}>
			<Box pt={2} ml={45}>
				<img src='/logo.svg' width='50px' height='50px'></img>
			</Box>
			<Container fixed maxWidth='lg' className={classes.root}>
				<Grid container item xs={12} justify='space-evenly'>
					<Grid item xs={3}>
						<Typography className={classes.title}>About us</Typography>
						<Grid container item xs spacing={2} direction='column'>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our Heritage</a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our Story</a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our vision</a>
								</Link>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={3}>
						<Typography className={classes.title}>Ways to Order</Typography>
						<Grid item xs container spacing={2} direction='column'>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a> On the app </a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>On the web </a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a> Phone call </a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>At the store </a>
								</Link>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={3}>
						<Typography className={classes.title}>Career</Typography>
						<Grid item xs container spacing={2} direction='column'>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our Heritage</a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our Story</a>
								</Link>
							</Grid>
							<Grid item xs={10}>
								<Link href='/posts'>
									<a>Our vision </a>
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Container>
	)
}

export default Footer
