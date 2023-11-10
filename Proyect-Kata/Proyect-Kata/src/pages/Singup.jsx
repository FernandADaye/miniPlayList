import React from 'react'
import { useForm } from 'react-hook-form'

const Singup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='form-container'>
        <main className='form-signin w-100 m-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

            {/* seccion de first_name */}
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='first_name'
                name='first_name'
                placeholder='Doe'
                {...register('first_name', { required: true })}
              />
              <label htmlFor='floatingInput'>Name</label>
            </div>
            {errors.first_name && <span>This field is required</span>}

            {/* seccion de last_name  */}
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='last_name'
                name='last_name'
                placeholder='Doe'
                {...register('last_name', { required: true })}
              />
              <label htmlFor='floatingInput'>Last Name</label>
            </div>
            {errors.last_name && <span>This field is required</span>}

            {/* seccion de gender  */}
            <div className='form-floating'>
              <select
                className='form-select'
                id='gender'
                name='gender'
              >
                <option value=''>Choose...</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
              </select>
              <label htmlFor='gender'>Gender</label>
            </div>
            {errors.gender && <span>This field is required</span>}

            {/* seccion de email  */}
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            {errors.email && <span>This field is required</span>}

            {/* seccion de password  */}
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='Password'
                {...register('password', { required: true })}
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            {errors.password && <span>This field is required</span>}

            {/* button */}
            <button className='btn btn-primary w-100 py-2' type='submit'>
              Sign in
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export default Singup
