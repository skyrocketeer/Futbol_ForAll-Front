import { useState, useEffect, forwardRef } from "react"
import Link from "next/link"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import Divider from "@material-ui/core/Divider"
import InputBase from "@material-ui/core/InputBase"
import Typography from "@material-ui/core/Typography"
import SocialSignInButton from "@components/Button/Social"
import { makeStyles } from "@material-ui/core"

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(theme => ({
	root: {
		top: "-30% !important",
		"& .MuiDialog-paper": {
			height: "580px",
			width: "450px",
		},
	},
	input: {
		"& .MuiInputBase-input": {
			padding: "16px 10px",
			fontSize: "0.9em",
		},
	},
	form: {
		marginBottom: "20px",
	},
	formControl__wrapper: {
		border: "1px solid lightgrey",
		borderRadius: "5px",
		margin: "20px auto",
	},
	submitBtn: {
		"&.MuiDialogActions-root": {
			padding: 0,
			justifyContent: "center",
		},
	},
	containedPrimary: {
		color: "white",
		width: "100%",
		lineHeight: "25px",
	},
	button__group: {
		margin: "0px auto 15px",
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
		"&:hover": {
			textDecoration: "underline",
		},
	},
}))

function Modal(props) {
	const { onModalClose } = props
	const [open, setOpen] = useState(props.open)
	const style = useStyles()

	const [values, setValues] = useState({
		password: "",
		phoneNumber: "",
	})

	useEffect(() => {
		if (props.open) setOpen(true)
	}, [props.open])

	function handleClose() {
		setOpen(false)
		//emit event for parent event listener
		if (onModalClose) onModalClose()
	}

	function handleSubmit(e) {
		e.preventDefault()
		console.log(e.target)
	}

	function handleInputChange(event) {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	return (
		<>
			<Dialog
				className={style.root}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
				<DialogTitle id='form-dialog-title' className='center'>
					Login
				</DialogTitle>

				<Divider />

				<DialogContent>
					<form className={style.form} noValidate autoComplete='off'>
						<div className={style.formControl__wrapper}>
							<InputBase
								name='phone'
								placeholder='Enter your phone number'
								className={style.input}
								fullWidth
								onChange={handleInputChange}
							/>
							<Divider />
							<InputBase
								className={style.input}
								fullWidth
								name='password'
								placeholder='Enter your password'
								type='password'
								onChange={handleInputChange}
							/>
						</div>
						<DialogActions className={style.submitBtn}>
							<Button
								size='large'
								variant='contained'
								color='primary'
								className={style.containedPrimary}
							>
								Login
							</Button>
						</DialogActions>
					</form>

					<div className='divider__line-through'>or</div>

					<div className={style.button__group}>
						<SocialSignInButton label='Continue with Gmail' logo='facebook' />
					</div>
					<div className={style.button__group}>
						<SocialSignInButton label='Continue with Facebook' logo='google' />
					</div>
					<div className={style.button__group}>
						<SocialSignInButton label='Continue with phone number' logo='phone' />
					</div>

					<Typography component='span' className={style.body1}>
						Don't have an account?
					</Typography>
					<Link href='accounts/create'>
						<a className={style.anchor}>Create one</a>
					</Link>
				</DialogContent>
			</Dialog>
		</>
	)
}

Modal.propTypes = {
	onModalClose: PropTypes.func,
}

export default Modal
