import React, { useState, useEffect } from 'react'

function LoginForm() {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')

    useEffect(() => {
    }, [])

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handlePassword = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Login</h1>
              <form id="login-form">

                <div className="form-floating mb-3">
                    <input onChange={handleEmail} value={email} placeholder="Email" required type="string" name="email" id="email" className="form-control"/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input onChange={handlePassword} value={password} placeholder="Password" required type="password" name="password" id="password" className="form-control"/>
                    <label htmlFor="password">Password</label>
                </div>

                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      )
}

export default LoginForm;