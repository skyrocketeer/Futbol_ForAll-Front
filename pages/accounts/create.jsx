import { useState } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@material-ui/core/styles"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"
import clsx from "clsx"
import axios from "axios"
import Link from "next/link"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import DefaultLayout from "@components/Layout/default"
import CustomCircularProgress from "@components/Progress/Circular"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import AccountCircle from "@material-ui/icons/AccountCircle"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import EmailIcon from "@material-ui/icons/Email"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
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
		textAlign: "center",
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
	},
	anchor: {
		fontSize: "14px",
		color: theme.palette.primary.light,
		"&:hover": {
			color: theme.palette.primary.dark,
			textDecoration: "underline",
		},
	},
}))

function CreateAccount() {
	const title = "Tạo tài khoản mới"
	const classes = useStyles()
	const router = useRouter()

	function Alert(props) {
		return <MuiAlert elevation={6} variant='filled' {...props} />
	}

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
			buttonSuccess: {
				backgroundColor: theme.palette.primary.light,
				"&:hover": {
					backgroundColor: theme.palette.primary.main,
				},
			},
		}))

		const childClasses = useChildStyles(props)

		const [states, setStates] = useState({
			showPass: false,
			loading: false,
			success: false,
			emailExist: false,
		})

		let registerSchema = yup.object().shape({
			email: yup.string().email().required(),
			password: yup.string().required().min(6).max(12),
			firstName: yup.string().required(),
			lastName: yup.string().required(),
			roleType: yup.string().required(),
		})

		const { register, handleSubmit, reset, control, errors } = useForm({
			mode: "onBlur",
			resolver: yupResolver(registerSchema),
		})

		function submitForm(data, e) {
			setStates(prevState => ({
				...prevState,
				loading: true,
			}))
			//cast to int
			data.roleType = Number(data.roleType)

			const payload = { ...data }
			axios
				.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/users/new`, payload)
				.then(res => {
					//progress circle
					setStates(prevState => ({
						...prevState,
						loading: false,
					}))
					if (res.data) {
						//reset form fields
						e.target.reset()
						reset({ roleType: "" })
						setStates(prevState => ({
							...prevState,
							success: true,
						}))

						setTimeout(() => router.push("/"), 2000)
					}
				})
				.catch(err => {
					if (err.response.data.statusCode === 409) {
						setStates(prevState => ({
							...prevState,
							loading: false,
							emailExist: true,
						}))
					}
				})
		}

		const handleClose = (event, reason) => {
			if (reason === "clickaway") {
				return
			}
			setStates(state => ({ ...state, success: false }))
		}

		return (
			<>
				<form
					className='center'
					noValidate
					autoComplete='off'
					className={clsx(classes.container, childClasses.root)}
					onSubmit={handleSubmit(submitForm)}
				>
					<FormControl className={clsx(childClasses.margin, "w100")}>
						<InputLabel htmlFor='input-mail'>Email (bắt buộc)</InputLabel>
						<Input
							placeholder='Xin hãy nhập email'
							name='email'
							inputRef={register}
							error={errors.email ? true : false}
							startAdornment={
								<InputAdornment position='start'>
									<EmailIcon />
								</InputAdornment>
							}
						/>
						{errors.email && <div className='error__text'>{errors.email.message}</div>}
						{states.emailExist && (
							<div className='error__text'>Email này đã được sử dụng</div>
						)}
					</FormControl>
					<FormControl className={clsx(childClasses.margin, "w100")}>
						<InputLabel htmlFor='input-password'>Mật khẩu (bắt buộc)</InputLabel>
						<Input
							placeholder='Xin hãy nhập mật khẩu'
							type={states.showPass ? "text" : "password"}
							name='password'
							inputRef={register}
							error={errors.password ? true : false}
							startAdornment={
								<InputAdornment position='start'>
									<LockIcon />
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => setStates(state => ({ ...state, showPass: true }))}
										onMouseDown={e => {
											e.preventDefault()
										}}
									>
										{states.showPass ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
						/>
						{errors.password && (
							<div className='error__text'>{errors.password.message}</div>
						)}
					</FormControl>
					<div
						className={clsx(
							childClasses.flexInput,
							childClasses.margin,
							"d-flex",
							"w100"
						)}
					>
						<FormControl>
							<InputLabel htmlFor='input-fname'>Tên (bắt buộc)</InputLabel>
							<Input
								placeholder='Xin hãy nhập tên'
								name='firstName'
								inputRef={register}
								error={errors.firstName ? true : false}
								startAdornment={
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								}
							/>
							{errors.firstName && (
								<div className='error__text'>{errors.firstName.message}</div>
							)}
						</FormControl>
						<FormControl>
							<InputLabel htmlFor='input-lname'>Họ (bắt buộc)</InputLabel>
							<Input
								name='lastName'
								inputRef={register}
								error={errors.lastName ? true : false}
								placeholder='Xin hãy nhập họ'
								startAdornment={
									<InputAdornment position='start'>
										<PermIdentityIcon />
									</InputAdornment>
								}
							/>
							{errors.lastName && (
								<div className='error__text'>{errors.lastName.message}</div>
							)}
						</FormControl>
					</div>
					<div className={childClasses.margin}>
						<div className={childClasses.radio}>
							<InputLabel htmlFor='input-mail'>Bạn là:</InputLabel>
							<Controller
								as={
									<RadioGroup row>
										<FormControlLabel
											value='2'
											control={<Radio size='small' color='primary' />}
											label='Người dùng'
										/>
										<FormControlLabel
											value='3'
											control={<Radio size='small' color='primary' />}
											label='Quản lí'
										/>
									</RadioGroup>
								}
								style={{ marginLeft: "10px" }}
								name='roleType'
								defaultValue={""}
								control={control}
							/>
						</div>
						{errors.roleType && (
							<div className='error__text' style={{ marginTop: "-5px" }}>
								{errors.roleType.message}
							</div>
						)}
					</div>
					<div className={clsx("center", classes.container)}>
						{states.loading ? (
							<CustomCircularProgress />
						) : (
							<Button
								size='large'
								variant='contained'
								color='primary'
								type='submit'
								className={classes.containedPrimary}
							>
								Đăng kí
							</Button>
						)}
					</div>
				</form>
				<Snackbar open={states.success} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity='success'>
						Hooray, bạn đã đăng kí thành công! Hãy kiểm tra mail để kích hoạt tài khoản
					</Alert>
				</Snackbar>
			</>
		)
	}

	function renderContent() {
		return (
			<Grid container item xs={12} className={classes.wrapper}>
				<Hidden mdDown>
					<Grid item md={3} lg={4} className={classes.root}>
						<Typography component='div' color='primary'>
							Tạo tài khoản mới
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
						Đã có tài khoản?
					</Typography>
					<Link href='login'>
						<a className={classes.anchor}>Đăng nhập ngay</a>
					</Link>
				</Grid>
			</Grid>
		)
	}

	return <DefaultLayout title={title} content={renderContent()} />
}

export default CreateAccount
