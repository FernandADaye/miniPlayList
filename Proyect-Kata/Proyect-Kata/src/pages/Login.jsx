import React from 'react'
import { loginUserService } from '@/services/userServices'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import './pages.scss'

const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        // console.log('Usuario ingresado exitosamente ', response.data.token)
        localStorage.setItem('token', response.data.token)
        navigate('/Home')
      }
    } catch (error) {
      console.log('Error al registrarse', error.message)
    }
  }

  return (
    <>
      <div className='form'>
        <main className='form-signin w-100 m-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            {errors.email && <span>This field is required</span>}

            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                {...register('password', { required: true })}
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            {errors.password && <span>This field is required</span>}

            <button className='btn btn-primary w-100 py-2' type='submit'>
              Sign in
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login
