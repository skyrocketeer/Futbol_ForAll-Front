import { useRouter } from 'next/router'
import { useState, useRef, createRef, useEffect } from "react"
import TokenInput from "@components/Input/TokenInput"
import Toast from "@components/Toast"
import Layout from "@components/Layout/main"
import style from './verify.module.css'
import clsx from 'clsx'
import axios from "axios"

VerifyAccount.propTypes = {}

function VerifyAccount() {
	const router = useRouter()
	const [secs, setTime] = useState(60)
	const [mins, setMin] = useState(2)

	useEffect(() => {
		let timer = setTimeout(() => {
			if (secs > 0) setTime(secs - 1)
			else {
				if (!mins && !secs) return
				setMin(mins - 1)
				setTime(59)
			}
		}, 1000)

		return () => clearTimeout(timer)
	}, [secs])

	function renderOTPForm() {
		const refs = useRef(Array.from({ length: 6 }, () => createRef()))
		
		// create 6 input fields
		let tokenArr = Array.from({ length: 6 }, () => "")
		const [token, setToken] = useState(tokenArr) 

		const [isValidated, setIsValidated] = useState(false)

		let showToast = false
		let toastType

		useEffect( () => {
			refs.current[0].current.focus()
		},[])

		function formatTime(mins, secs){
			if(!mins && !secs)
				return '00:00' 
			
			if (mins < 10)
				mins = `0${mins}` 
			
			if (secs < 10)
				secs = `0${secs}`
			
			return `${mins}:${secs}` 
		}

		function toNextBox(value, index) {
			if(value.length == 1){
				if (index < refs.current.length)
					return refs.current[index].current.focus()
			}
		}

		function handleSubmit() {
			if(!isValidated) return

			// if (mins || secs) return

			const payload = {
				key: router.query.key,
				code: parseInt(token.join(""))
			}

			axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/otp/validate`, payload)
			.then(res => {
				if(res.data.status === 'OK') {
					showToast = true
					toastType = 1
				}
			})
			.catch(err => {
				if(err.response.status == 403 && err.response.data.errorCode === "EX5001"){
					showToast = true
					toastType = 2
				}
			})
		}
		
		async function resendOTP() {
			if(mins || secs) return 

			await handleSubmit()

			setTime(3)
			setMin(0)
		}

		function handleInputChange(value, index) {
			let newData = [...token]
			newData[index-1] = value
			setToken(newData)
			
			toNextBox(value, index)
		}


		useEffect( () => {
			setIsValidated(token.every(input => input !== ""))
		},[JSON.stringify(token)])

		return (
			<>
				<div className='h-full items-end border-solid border-2 rounded bg-gray-100 py-5'>
					<div className='w-full sm:w-1/2 mx-auto'>
						<div className='flex justify-center'>
							<img src={'/images/email-flat.png'} alt="email-icon" width="150px"/>
						</div>
						<div className={clsx('sm:w-auto md:w-4/5 mx-auto text-center mb-4', style.text__large)}> 
							<span>Just one more step</span>
							<br/>
							<span>Let's verify your email</span>
						</div>
					</div>
					
					<div className='w-full md:w-3/4 mx-auto justify-center py-3'>
						<div className="w-3/4 sm:w-3/5 mx-auto text-xs md:text-sm mb-5 text-center">
							We have already sent a code to email, please check your inbox and enter the code to verify your account
						</div>
						
						<div className='flex flex-wrap w-full justify-center'>
							{Array.from({ length: 6 }, () => "").map( (el, i) => {
								return (
									<TokenInput
										propClassName='mx-2'
										forwardRef={refs.current[i]}
										id={i + 1}
										key={i}
										token={token[i]}
										onTokenChange={handleInputChange}
									/>
								)
							})}
						</div>
					</div>

					<div className='w-2/3 mx-auto mt-6 pt-3'>
						<button 
							className={clsx(
								'flex mx-auto w-3/4 mx-6 mb-3 text-white font-bold py-1 px-6 shadow-lg rounded-full',
								isValidated ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-default' 
							)}
							onClick={handleSubmit}
							disabled={!isValidated}
						>
							<div className="mx-auto my-1">Confirm</div>
						</button>
						<div
							className={clsx('flex text-sm justify-center content-center',
								mins || secs ? 'text-gray-600' : "cursor-pointer underline text-indigo-600"
							)} 
							onClick={resendOTP}
						>
							<span>
								Resend code in {" "}
								{formatTime(mins,secs)} mins
							</span>
						</div>
					</div>
				
				</div>
				{showToast && toastType == 1 ? 
					<Toast type={1} text="Successfully verified"/> : <Toast type={2} text="Invalid OTP"/>
				}
			</>
		)
	}

	return <Layout title='Verify account' content={renderOTPForm()} />
}

export default VerifyAccount