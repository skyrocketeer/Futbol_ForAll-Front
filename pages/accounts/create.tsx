import style from "./create.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import clsx from "clsx"
import axios from "axios"
import Link from "next/link"
import DefaultLayout from "@components/Layout/default"
import Spinning from "@components/Progress/Spinning"
import SocialSignInButton from "@components/Button/Social"
import Toast from "@components/Notification"
// import Modal from "@components/Modal/LoginForm"

interface RegisterFormInput {
	email: string
	firstName: string
	lastName: string
	password: string
}

let registerSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(6).max(12),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
})

function CreateAccount() {
	const title = "Tạo tài khoản mới"
	const router = useRouter()

	function RegisterForm() {
		const [states, setStates] = useState({
			showPass: false,
			loading: false,
			success: false,
			emailExist: false,
			modal: false,
		})

		const { register, watch, handleSubmit, reset, errors } = useForm<RegisterFormInput>({
			mode: "onBlur",
			resolver: yupResolver(registerSchema),
		})

		const watchEmail = watch("email")

		// const toggleShowPassword = () => {
		// 	setStates(prevState => ({ ...prevState, showPass: !showPass }))
		// }

		//hide email existed error when user inputs new one
		useEffect(() => {
			if (states.emailExist) {
				states.emailExist = false
			}
		}, [watchEmail])

		function submitForm(data: object, e: any) {
			e.preventDefault()

			setStates(prevState => ({
				...prevState,
				loading: true,
			}))

			const payload = { ...data }
			axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/users/new`, payload)
				.then(res => {
					//progress circle
					setStates(prevState => ({
						...prevState,
						loading: false,
					}))
					if (res.data) {
						//reset form fields
						reset()
						// show toast then remove from DOM
						setStates(prevState => ({ ...prevState, success: true }))
						setTimeout(() => {
							setStates(prevState => ({ ...prevState, success: false }))
						}, 1200)

						setTimeout(() => router.push("/"), 2000)
					}
				})
				.catch(err => {
					if (err.response.data.statusCode === 409) {
						// reset password field
						reset({...data, password: "" })
						setStates(prevState => ({
							...prevState,
							emailExist: true,
							loading: false,
						}))
					}
				})
		}

		return (
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

					{states.loading ? (
						<button
							className='inline-flex items-center cursor-default justify-center mt-3 py-3 border-transparent rounded-full w-full bg-gray-300 opacity-50'
							disabled
						>
							<Spinning withText />
						</button>
					) : (
							<button
								className={clsx(
									Object.keys(errors).length > 0
										? "opacity-50 cursor-not-allowed bg-secondary"
										: "bg-secondary",
									"mt-4 focus:outline-none font-semibold text-neon-main py-2 w-full rounded-full shadow"
								)}
							>
								ĐĂNG KÝ
							</button>
						)}
				</form>
				{states.success && <Toast text='Hooray! Successfully created' type={1} />}
			</>
		)
	}

	function renderContent() {
		return (
			<div className='md:flex'>
				<div className='hidden lg:block lg:w-2/5'>
					<div className='block'>
						<Link href='/'>
							<a>
								<img
									src='/logo.jpg'
									alt='starboy-logo'
									className='mx-auto w-24 h-16'
								/>
							</a>
						</Link>
					</div>
					<div className='text-lg text-center mt-5 font-extrabold'>
						ĐĂNG KÝ TÀI KHOẢN MỚI
					</div>
				</div>
				<div className='w-4/5 lg:w-2/5 bg-white rounded-lg py-4 px-5 shadow-lg mx-auto lg:mx-0'>
					<div className='lg:hidden md:block text-center text-md font-extrabold mb-3'>
						ĐĂNG KÝ TÀI KHOẢN MỚI
					</div>
					<RegisterForm />
					<div className='divider__line-through mt-3'>hoặc</div>
					<div className={style.socialBtn}>
						<SocialSignInButton logo='facebook' label='Đăng kí bằng Facebook' />
						<SocialSignInButton logo='google' label='Đăng kí bằng Gmail' />
						<SocialSignInButton logo='phone' label='Đăng kí bằng số điện thoại' />
					</div>
				</div>
			</div>
		)
	}

	return <DefaultLayout title={title} content={renderContent()} />
}

export default CreateAccount