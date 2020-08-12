import { useState } from "react"
import clsx from "clsx"
import axios from "axios"
import Link from "next/link"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import DefaultLayout from "@components/Layout/default"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import AccountCircle from "@material-ui/icons/AccountCircle"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import EmailIcon from "@material-ui/icons/Email"
import LockIcon from "@material-ui/icons/Lock"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import Radio from "@material-ui/core/Radio"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import SocialSignInButton from "@components/Button/Social"

const useStyles = makeStyles(theme => ({
	wrapper: {
		flexGrow: 1,
	},
	root: {
		boxShadow: "10px 0px 10px -7px rgba(0, 0, 0, 0.1)",
		height: "100vh",
		"& .MuiTypography-root": {
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "20px",
			fontWeight: 600,
		},
	},
	container: {
		marginTop: "30px",
	},
	input: {
		"& :placeholder": {
			fontSize: "12px",
		},
	},
	logo: {
		height: "70px",
		width: "70px",
	},
	containedPrimary: {
		color: "white",
		width: "70%",
		lineHeight: "25px",
	},
	button__group: {
		margin: "0px auto 15px",
		width: "30%",
	},
	body1: {
		fontSize: "14px",
		fontWeight: 400,
		color: "rgb(72, 72, 72)",
		marginLeft: "5px",
	},
	anchor: {
		marginLeft: "10px",
		fontSize: "14px",
		color: theme.palette.primary.light,
		"&:hover": {
			color: theme.palette.primary.dark,
			textDecoration: "underline",
		},
	},
}))

function CreateAccount() {
	const title = "Create a new account"
	const classes = useStyles()

	const [newUser, setNewUser] = useState("")

	function RegisterForm(props) {
		const useChildStyles = makeStyles(theme => ({
			root: {
				width: "60%",
			},
			flexInput: {
				"& .MuiFormControl-root": {
					width: "50%",
				},
				"& .MuiFormControl-root:first-child": {
					marginRight: theme.spacing(3),
				},
			},
			margin: {
				margin: `${theme.spacing(1)}px auto`,
			},
			radio: {
				display: "flex",
				"& .MuiFormLabel-root": {
					fontSize: "16px",
					lineHeight: 2.5,
				},
				"& fieldset": {
					marginLeft: theme.spacing(2),
				},
				"& .MuiTypography-root": {
					fontSize: "16px",
				},
			},
		}))

		const childClasses = useChildStyles(props)

		const [values, setValues] = useState({
			password: "",
			firstName: "",
			lastName: "",
			email: "",
			roleType: "",
		})

		const [showPass, setShowPass] = useState(false)

		const handleInputChange = name => event => {
			setValues({ ...values, [name]: event.target.value.trim() })
		}

		const toggleShowPassword = () => {
			setShowPass(!showPass)
		}

		const handleMouseDownPassword = event => {
			event.preventDefault()
		}

		function submitForm(e) {
			e.preventDefault()
			const payload = { ...values }
			axios
				.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/users/new`, payload)
				.then(res => {
					let new_user = null
					setNewUser((new_user = res.data))
				})
				.catch(err => console.log(err.response.data.message))
		}

		return (
			<form
				className='center'
				noValidate
				autoComplete='off'
				className={clsx(classes.container, childClasses.root)}
			>
				{/* <Input
					type='number'
					id='input-phone'
					label='Phone Number'
					placeholder='Enter your phone number'
					onChange={handleChange("phoneNumber")}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<PhoneAndroidIcon />
								+84
							</InputAdornment>
						),
					}}
				/> */}
				<FormControl className={clsx(childClasses.margin, "w100")}>
					<InputLabel htmlFor='input-mail'>Email</InputLabel>
					<Input
						placeholder='Enter your email'
						values={values.email}
						onChange={handleInputChange("email")}
						startAdornment={
							<InputAdornment position='start'>
								<EmailIcon />
							</InputAdornment>
						}
					/>
				</FormControl>
				<FormControl className={clsx(childClasses.margin, "w100")}>
					<InputLabel htmlFor='input-password'>Password</InputLabel>
					<Input
						placeholder='Enter your password'
						type={showPass ? "text" : "password"}
						value={values.password}
						onChange={handleInputChange("password")}
						startAdornment={
							<InputAdornment position='start'>
								<LockIcon />
							</InputAdornment>
						}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={toggleShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPass ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<div
					className={clsx(childClasses.flexInput, childClasses.margin, "d-flex", "w100")}
				>
					<FormControl>
						<InputLabel htmlFor='input-fname'>First name</InputLabel>
						<Input
							placeholder='Enter your first name'
							values={values.firstName}
							onChange={handleInputChange("firstName")}
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor='input-lname'>Last name</InputLabel>
						<Input
							placeholder='Enter your last name'
							onChange={handleInputChange("lastName")}
							startAdornment={
								<InputAdornment position='start'>
									<PermIdentityIcon />
								</InputAdornment>
							}
						/>
					</FormControl>
				</div>
				<div className={clsx(childClasses.margin, childClasses.radio)}>
					<InputLabel htmlFor='input-mail'>You are:</InputLabel>
					<FormControl component='fieldset'>
						<RadioGroup row name='role' onChange={handleInputChange("roleType")}>
							<FormControlLabel
								value='2'
								control={<Radio size='small' color='primary' />}
								label='User'
							/>
							<FormControlLabel
								value='3'
								control={<Radio size='small' color='primary' />}
								label='Manager'
							/>
						</RadioGroup>
					</FormControl>
				</div>
				<div className={clsx("center", classes.container)}>
					<Button
						size='large'
						variant='contained'
						color='primary'
						type='submit'
						onClick={submitForm}
						className={classes.containedPrimary}
					>
						Sign up
					</Button>
				</div>
			</form>
		)
	}

	function renderContent() {
		return (
			<Grid container item xs={12} className={classes.wrapper}>
				<Hidden mdDown>
					<Grid item md={3} lg={4} className={classes.root}>
						<Typography component='div' color='primary'>
							Create an account
						</Typography>
					</Grid>
				</Hidden>
				<Grid
					container
					item
					xs={12}
					lg={8}
					direction='column'
					justify='flex-start'
					alignItems='center'
					className={classes.container}
				>
					<div className={classes.container}>
						<Link href='/'>
							<a>
								<img src='/logo.png' alt='logo' className={classes.logo} />
							</a>
						</Link>
					</div>
					<RegisterForm />
					<div
						className={clsx("divider__line-through", classes.container)}
						style={{ width: "57%" }}
					>
						or
					</div>
					<div className={classes.button__group}>
						<SocialSignInButton label='Continue with Gmail' logo='facebook' />
					</div>
					<div className={classes.button__group}>
						<SocialSignInButton label='Continue with Facebook' logo='google' />
					</div>
					<div className={classes.button__group}>
						<SocialSignInButton label='Continue with phone number' logo='phone' />
					</div>
					<Typography component='span' className={classes.body1}>
						Already have an account?
					</Typography>
					<Link href='accounts/create'>
						<a className={classes.anchor}>Log in</a>
					</Link>
				</Grid>
			</Grid>
		)
	}

	return <DefaultLayout title={title} content={renderContent()} />
}

export default CreateAccount
