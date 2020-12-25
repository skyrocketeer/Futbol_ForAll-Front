import { useRouter } from 'next/router'
import { useState, useEffect, useReducer } from "react"
import TokenInput from "@components/Input/TokenInput"
import Notification from "@components/Notification"
import Layout from "@components/Layout/main"
import style from './verify.module.css'
import clsx from 'clsx'
import axios from "axios"
import Transition from "@components/Transition"
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function VerifyAccount() {
	const router = useRouter()
	const [secs, setTime] = useState<number>(59)
	const [mins, setMin] = useState<number>(2)

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
		interface Action{
			type?: string, 
			payload?: { index: number, value: number }
		}

		// create 6 input fields
		let initialState: any[] = Array.from({ length: 6 }, () => "")
		const reducer = (state: Array<number>, action: Action) => {
			if (action.type === "reset")
				return initialState

			let newData = [...state]
			action.payload ? newData[action.payload.index-1] = action.payload.value : null

			return newData
		}

		const [token, setToken] = useReducer(reducer, initialState) 
		
		const [isValidated, setIsValidated] = useState<boolean>(false)
		const [showToast, setShowToast] = useState<boolean>(false)
		const [toastType, setToastType] = useState<number>(1)

		function formatTime(mins: number, secs: number): string{
			if(!mins && !secs)
				return '00:00' 
			
			let min,sec : string = ""	
			
			if (mins < 10) min = `0${mins}`
			else min = mins.toString() 
			
			if (secs < 10) sec = `0${secs}`
			else sec = secs.toString()

			return `${min}:${sec}` 
		}

		function toNextBox(target: HTMLInputElement) {
			if(target.value.toString().length == 1){
				let index = target.dataset.index
				
				if (Number(index) < 6)
					return (target.nextElementSibling as HTMLInputElement)?.focus()
			}
		}

		function handleSubmit(): Promise<void> | void {
			if(!isValidated) return
			
			// if (mins || secs) return

			const payload = {
				key: router.query.key,
				code: parseInt(token.join(""))
			}

			return axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/otp/validate`, payload)
			.then(res => {
				if(res.data.status === 'OK') {
					setToken({ type:"reset" })
					showToastAnimation(1)
				}
			})
			.catch(err => {
				if(err.response.status == 403 && err.response.data.errorCode === "EX50001"){
					setToken({ type:"reset" })
					showToastAnimation(2)
				}
			})
		}
		
		function showToastAnimation(type: number){
			setShowToast(true)
			setToastType(type)

			const toastTime = setTimeout(() => setShowToast(false), 3500)
			clearTimeout(toastTime)
		}

		async function resendOTP() {
			if(mins || secs) return 

			await handleSubmit()

			setTime(3)
			setMin(0)
		}

		function handleInputChange(target : HTMLInputElement) {
			setToken({ payload: {index: Number(target.dataset.index), value: Number(target.value)} })
			toNextBox(target)
		}

		useEffect( () => {
			setIsValidated(token.every(input => input !== ""))
		},[token[5]])

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
							{/* @ts-ignore */}
							{Array.from({ length: 6 }, () => "").map( (el, index) => {
								return (
									<TokenInput
										propClassName='mx-1 sm:mx-2'
										index={(index+1)}
										key={index}
										token={token[index]}
										onTokenChange={handleInputChange}
									/>
								)
							})}
						</div>
					</div>

					<div className='w-2/3 mx-auto mt-6 pt-3'>
						<button 
							className={clsx(
								'flex w-3/4 mx-6 mb-3 text-white font-bold py-1 px-6 shadow-lg rounded-full',
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
				
				<Transition appeared={showToast && toastType === 1}>  
          <Notification 
            text='Hooray! Successfully created' 
            icon={faCheckCircle} 
            color="#44C997"
            textColor="text-green-400"
          /> 
        </Transition>
				<Transition appeared={showToast && toastType === 2}> 
          <Notification 
            text='Sorry! Bad credentials' 
            icon={faExclamationCircle} 
            color="#e53e3e"
            textColor="text-red-600"
          />
        </Transition>
			</>
		)
	}

	return <Layout title='Verify account'> { renderOTPForm() } </Layout>
}

export default VerifyAccount
