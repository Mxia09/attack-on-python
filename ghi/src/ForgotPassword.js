import React, { useState, useEffect } from "react";

function ForgotPasswordForm(props) {
    const [email, setEmail] = useState ('')

    useEffect(() => {
    }, [])

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.email = email

        const passwordRecoveryUrl = "http://localhost:3000/api/forgot-password/"
        const fetchConfig = {
            method: 'get',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(passwordRecoveryUrl, fetchConfig)
        if (response.ok) {
            props.setShowToast(true);
            props.setToastVariant('success');
            props.setToastMessage(`Account with matching email found.`)

            setEmail('')

        } else {
            props.setShowToast(true);
            props.setToastVariant('danger');
            props.setToastMessage('Account with matching email not found.')
        }
    }

    return (
    <div>
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Password Recovery</h1>
            <form onSubmit={handleSubmit} id="login-form">

            <div className="form-floating mb-3">
                <input onChange={handleEmail} value={email} placeholder="Email" required type="string" name="email" id="email" className="form-control"/>
                <label htmlFor="email">Enter your Email</label>
            </div>
            <button className="btn btn-primary">Submit</button>
            </form>
        </div>
        {props.toast}
        </div>
    </div>
    </div>
    )
}

export default ForgotPasswordForm