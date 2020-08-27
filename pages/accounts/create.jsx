import { useState } from "react"
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
		)
	}

	function renderContent() {
		return (
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
		)
	}

	return <DefaultLayout title={title} content={renderContent()} />
}

export default CreateAccount
