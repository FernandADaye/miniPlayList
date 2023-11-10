import React from 'react'

const Singup = () => {
  return (
    <>
      <div className='form-container'>
        <main className='form-signin w-100 m-auto'>
          <form>
            <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Doe'
              />
              <label htmlFor='floatingInput'>Name</label>
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
            </div>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
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
