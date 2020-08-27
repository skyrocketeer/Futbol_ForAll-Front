import { useState } from "react"
<<<<<<< Updated upstream
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
=======
import { useRouter } from "next/router"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"
import clsx from "clsx"
import axios from "axios"
import Link from "next/link"
import DefaultLayout from "@components/Layout/default"
import CircularProgress from "@components/Progress/Circular"
import SocialSignInButton from "@components/Button/Social"
import SuccessToast from "@components/Toast/Success"
// import Modal from "@components/Modal/LoginForm"

function CreateAccount() {
	const title = "Tạo tài khoản mới"
	const router = useRouter()
	const [modal, setModal] = useState(false)

	function RegisterForm(props) {
		const [states, setStates] = useState({
			showPass: false,
			loading: false,
			success: false,
			emailExist: false,
			modal: false,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
			<>
				<form onSubmit={handleSubmit(submitForm)}>
					<div className='form-control__input-group'>
						<div className='form-control__label'>
							<label htmlFor='email' className='form-control__label'>
								Email
							</label>
						</div>
						<input
							className='w-full bg-white focus:outline-none focus:shadow border border-gray-300 rounded-md p-2'
							type='email'
							placeholder='Xin hãy nhập email'
							name='email'
							ref={register}
						/>
					</div>
					{errors.email && <div className='text-red-600'>{errors.email.message}</div>}
					{states.emailExist && (
						<div className='text-red-600'>Email này đã được sử dụng</div>
					)}

					<div className='form-control__input-group mt-2'>
						<div className='form-control__label'>
							<label htmlFor='password' className='form-control__label'>
								Mật khẩu
							</label>
						</div>
						<input
							className='w-full bg-white focus:outline-none focus:shadow border border-gray-300 rounded-md p-2'
							placeholder='Xin hãy nhập mật khẩu'
							type={states.showPass ? "text" : "password"}
							name='password'
							ref={register}
						/>
					</div>
					{errors.password && (
						<div className='text-red-600'>{errors.password.message}</div>
					)}

					<div className='form-control__input-group mt-2'>
						<div className='form-control__label'>
							<label htmlFor='firstName' className='form-control__label'>
								Tên
							</label>
						</div>
						<input
							className='w-full bg-white focus:outline-none focus:shadow border border-gray-300 rounded-md p-2'
							placeholder='Xin hãy nhập tên'
							name='firstName'
							ref={register}
						/>
					</div>
					{errors.firstName && (
						<div className='text-red-600'>{errors.firstName.message}</div>
					)}

					<div className='form-control__input-group mt-2'>
						<div className='form-control__label'>
							<label htmlFor='lastName' className='form-control__label'>
								Họ
							</label>
						</div>
						<input
							className='w-full bg-white focus:outline-none focus:shadow border border-gray-300 rounded-md p-2'
							name='lastName'
							ref={register}
							placeholder='Xin hãy nhập họ'
						/>
					</div>
					{errors.lastName && (
						<div className='text-red-600'>{errors.lastName.message}</div>
					)}

					<div className='form-control__input-group mt-2'>
						<div className='form-control__label'>
							<label htmlFor='roleType' className='form-control__label'>
								Bạn là?
							</label>
						</div>
						<div className='relative'>
							<Controller
								as={
									<select className='appearance-none w-full border border-gray-300 text-gray-700 p-2 rounded-md focus:outline-none focus:bg-white focus:shadow'>
										<option hidden disabled value='' />
										<option value='2' label='Người dùng' />
										<option value='3' label='Quản lí' />
									</select>
								}
								name='roleType'
								defaultValue=''
								control={control}
							/>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									className='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
					{errors.roleType && (
						<div className='text-red-600'>{errors.roleType.message}</div>
					)}
					{states.loading ? (
						<button
							className='inline-flex items-center cursor-default justify-center mt-3 py-3 border-transparent rounded-full w-full bg-gray-300 opacity-50'
							disabled
						>
							<CircularProgress withText />
						</button>
					) : (
						<button
							className={clsx(
								Object.keys(errors).length > 0
									? "opacity-50 cursor-not-allowed bg-green-primary"
									: "bg-green-primary",
								"mt-3 focus:outline-none font-semibold text-neon-main py-3 w-full rounded-full shadow"
							)}
						>
							ĐĂNG KÝ
						</button>
					)}
				</form>
				<button onClick={() => setStates(prev => ({ ...prev, loading: true }))}>
					toast
				</button>
				{states.loading ? <SuccessToast /> : null}
			</>
>>>>>>> Stashed changes
		)
	}

	function renderContent() {
		return (
<<<<<<< Updated upstream
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
=======
			<>
				<div className='block'>
					<Link href='/'>
						<a>
							<img
								src='/logo.png'
								alt='logo'
								width='60px'
								height='70%'
								className='mx-auto'
							/>
						</a>
					</Link>
				</div>
				<RegisterForm />
				<div className='divider__line-through mt-4'>hoặc</div>
				<div className='social__btn'>
					<SocialSignInButton logo='facebook' label='Đăng kí bằng Facebook' />
					<SocialSignInButton logo='google' label='Đăng kí bằng Gmail' />
					<SocialSignInButton logo='phone' label='Đăng kí bằng số điện thoại' />
				</div>
			</>
>>>>>>> Stashed changes
		)
	}

	return <DefaultLayout title={title} content={renderContent()} />
}

export default CreateAccount
