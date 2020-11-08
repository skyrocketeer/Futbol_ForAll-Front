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
import Notification from "@components/Notification"
import IconInput from "@components/Input/IconInput"
import Transition from "@components/Transition"
import { faLock, faEnvelope, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface LoginForm {
	email: string
	password: string
}

let loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(6).max(12),
})

const buttonStyle = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 rounded-md text-white focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" 

function LoginForm() {
	const title = "Đăng nhập tài khoản"
  const router = useRouter()

  const Form = () => {
    const { register, handleSubmit, reset, errors } = useForm<LoginForm>({
      mode: "onSubmit",
      resolver: yupResolver(loginSchema),
    })
    
    const [loading, setLoading] = useState<boolean>(false)
    const [wrongData, setWrongData] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    function submitForm(data: object, e: any) {
      e.preventDefault()
      
      setLoading(true)
  
      const payload = { ...data }
      axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth/login`, payload)
        .then(res => {
          //progress circle
          setLoading(false)
  
          if (res.data) {
            //reset form fields
            reset()
            
            // set access token
            localStorage.setItem('access_token', res.data.access_token)

            setSuccess(true)
            setTimeout(() => { setSuccess(false) }, 200)

            setTimeout(() => router.push("/"), 1200)
          }
        })
        .catch(async err => {
          setLoading(false)
          if (err.response) {
            // reset password field
            reset({ ...data, password: "" })
            setWrongData(true)
            
            setTimeout(() => { setWrongData(false) }, 200)
          }
        })
    }

    return (
      <>
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <IconInput
              icon={faEnvelope}
              classes="rounded-t-md"
              aria-label="Email address" 
              name="email" 
              required
              ref={register} 
              placeholder="Email address"
            />
          </div>
          
          <div className="-mt-px">
            <IconInput 
              icon={faLock}
              classes="rounded-b-md"
              aria-label="Password" 
              name="password" 
              type="password" 
              required 
              placeholder="Password"
              ref={register}
            />
          </div>

          { errors.email && <div className='text-red-600 text-sm mt-2'>{errors.email.message}</div> }
          { errors.password && <div className='text-red-600 text-sm mt-2'>{errors.password.message}</div> }

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
              <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm leading-5">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-6">
          { loading ? (
            <button 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 rounded-md 
              bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo 
              transition duration-150 ease-in-out"
            >
              <Spinning withText />
            </button>
            ) 
          : (
            <button type="submit" 
              className={clsx(buttonStyle, Object.keys(errors).length > 0? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-500")}
            >
              Đăng nhập
            </button>
            )
          }
          </div>
        </form>
        
        <Transition appeared={success}>  
          <Notification 
            text='Hooray! Successfully created' 
            icon={faCheckCircle} 
            color="#44C997"
            textColor="text-green-400"
          /> 
        </Transition>
        <Transition appeared={wrongData}> 
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
  
	function renderContent() {
		return (
			<div className='flex lg:justify-center sm:w-4/5 lg:w-3/5 mx-4 sm:mx-auto'>
				<div className={clsx('hidden lg:block lg:w-2/5 lg:mt-16 lg:mr-5', style.form__height)}>
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
						ĐĂNG NHẬP TÀI KHOẢN
					</div>
				</div>
				<div className={clsx('w-3/4 flex-1 md:w-2/5 bg-white rounded-lg py-10 px-5 md:mt-16 shadow-lg mx-auto md:mx-0', style.form__height)}>
					<div className='lg:hidden md:block text-center text-md font-extrabold mb-3'>
            ĐĂNG NHẬP TÀI KHOẢN
					</div>
					<Form />
					<div className='divider__line-through mt-5 text-indigo-500'>hoặc</div>
					<div className={clsx(style.socialBtn, 'py-2')}>
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

export default LoginForm