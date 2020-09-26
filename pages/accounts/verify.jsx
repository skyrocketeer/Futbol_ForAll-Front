// // import PropTypes from "prop-types"
// // import { useState, useRef, createRef, useEffect } from "react"
// // import clsx from "clsx"
// // import TokenInput from "@components/Input/TokenInput"
// // import RoundedButton from "@components/Button/Round"
// // import Layout from "@components/Layout/main"

// // VerifyAccount.propTypes = {}

// // function VerifyAccount() {
// // 	const style = useStyle()
// // 	const [otp, setOTP] = useState("")
// // 	const [secs, setTime] = useState(3)
// // 	const [mins, setMin] = useState(0)

// // 	useEffect(() => {
// // 		let timer = setTimeout(() => {
// // 			if (secs > 0) setTime(secs - 1)
// // 			else {
// // 				if (!mins && !secs) return
// // 				setMin(mins - 1)
// // 				setTime(59)
// // 			}
// // 		}, 1000)

// // 		return () => clearTimeout(timer)
// // 	}, [secs])

// // 	const handleInputChange = e => {
// // 		let newOTP = e.target.value
// // 		setOTP(newOTP)
// // 	}

// 	// function handleSubmit() {
// 	// 	if (mins || secs) return
// 	// 	alert("submitted")
// 	// }

// 	// function handleSubmit() {
// 	// 	if (mins || secs) return
// 	// 	alert("submitted")
// 	// }

// // 	function renderOTPForm() {
// // 		let refs = useRef(Array.from({ length: 4 }, () => createRef()))

// // 		function toNextBox(element) {
// // 			if (element.value.length === 1)
// // 				if (parseInt(element.id) === refs.current.length)
// // 					refs.current[parseInt(element.id) - 1].current.blur()
// // 				else refs.current[parseInt(element.id)].current.focus()
// // 		}

// // 		function resendOTP() {
// // 			alert("called resend OTP API")
// // 			setTime(3)
// // 			setMin(0)
// // 		}

// 		return (
// 			<CustomPaper elevation={3}>
// 				<form className={clsx(style.container, "d-flex")}>
// 					<Typography component='div' color='primary'>
// 						<span>Enter your OTP</span>
// 					</Typography>
// 					<Grid
// 						container
// 						item
// 						xs={12}
// 						justify='center'
// 						alignItems='center'
// 						className={style.tokenGroup}
// 					>
// 						{Array.from({ length: 4 }, () => "").map((el, i) => {
// 							return (
// 								<div key={i} className={style.input__group}>
// 									<TokenInput
// 										forwardRef={refs.current[i]}
// 										id={i + 1}
// 										key={i}
// 										moveNext={toNextBox}
// 									/>
// 								</div>
// 							)
// 						})}
// 					</Grid>
// 					<div className={clsx(style.button, "center")}>
// 						<RoundedButton
// 							label='Validate'
// 							size='large'
// 							background
// 							onBtnClick={handleSubmit}
// 						/>
// 					</div>
// 				</form>
// 				<Button
// 					color='primary'
// 					disableRipple
// 					className={style.text}
// 					disabled={mins > 0 || secs > 0}
// 					style={
// 						!mins && !secs ? { cursor: "pointer", textDecoration: "underline" } : null
// 					}
// 					onClick={resendOTP}
// 				>
// 					Resend code{" "}
// 					{mins > 0 ||
// 						(secs > 0 && `after ${mins}:${secs < 10 ? `0${secs}` : secs} mins`)}
// 				</Button>
// 			</CustomPaper>
// 		)

// 		return (
// 			<CustomPaper elevation={3}>
// 				<form className={clsx(style.container, "d-flex")}>
// 					<Typography component='div' color='primary'>
// 						<span>Enter your OTP</span>
// 					</Typography>
// 					<Grid
// 						container
// 						item
// 						xs={12}
// 						justify='center'
// 						alignItems='center'
// 						className={style.tokenGroup}
// 					>
// 						{Array.from({ length: 4 }, () => "").map((el, i) => {
// 							return (
// 								<div key={i} className={style.input__group}>
// 									<TokenInput
// 										forwardRef={refs.current[i]}
// 										id={i + 1}
// 										key={i}
// 										moveNext={toNextBox}
// 									/>
// 								</div>
// 							)
// 						})}
// 					</Grid>
// 					<div className={clsx(style.button, "center")}>
// 						<RoundedButton
// 							label='Validate'
// 							size='large'
// 							background
// 							onBtnClick={handleSubmit}
// 						/>
// 					</div>
// 				</form>
// 				<Button
// 					color='primary'
// 					disableRipple
// 					className={style.text}
// 					disabled={mins > 0 || secs > 0}
// 					style={
// 						!mins && !secs ? { cursor: "pointer", textDecoration: "underline" } : null
// 					}
// 					onClick={resendOTP}
// 				>
// 					Resend code{" "}
// 					{mins > 0 ||
// 						(secs > 0 && `after ${mins}:${secs < 10 ? `0${secs}` : secs} mins`)}
// 				</Button>
// 				{/* <button href='#'>

// 					</button>
// 				</TypographyButton> */}
// 			</CustomPaper>
// 		)
// 	}

// // 	return <Layout title='Verify account' content={renderOTPForm()} />
// // }

// // export default VerifyAccount
