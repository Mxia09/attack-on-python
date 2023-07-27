import React, { useState } from 'react'
import Select, { components } from "react-select"
import wizard from './images/wizard.png'
import python from './images/python.png'
import russ from './images/russ-avatar.png'
import marv from './images/marvin-avatar.png'
import jorge from './images/jorge-avatar.png'
import fred from './images/fred-avatar.png'
import max from './images/max-avatar.png'

function TestimonialForm(props) {
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [profile_pic, setProfilePic] = useState('')
    const [comments, setComments] = useState('')

    const handleName = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleReview = (selectedOption) => {
        setReview(selectedOption.value)
    }

    const handleProfilePic = (selectedOption) => {
        setProfilePic(selectedOption.value)
    }

    const handleComments = (event) => {
        const value = event.target.value
        setComments(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = name
        data.review = review
        data.profile_picture = profile_pic
        data.comments = comments

        const testimonialUrl = `${process.env.REACT_APP_API_HOST}/api/testimonials`
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(testimonialUrl, fetchConfig)
        if (response.ok) {

            props.setShowToast(true);
            props.setToastVariant('success');
            props.setToastMessage(`Review successfully posted`)

            setName('')
            setReview(null)
            setProfilePic(null)
            setComments('')

        } else {
            props.setShowToast(true);
            props.setToastVariant('danger');
            props.setToastMessage('Review posting error')
            console.error('Error creating review.')
        }
    }

    const imageOptions = [
        {
            value: python,
            label: "Avatar 2"
        },
        {
            value: wizard,
            label: "Wizard"
        },
        {
            value: russ,
            label: "Avatar 1"
        },
        {
            value: marv,
            label: "Avatar 2"
        },
        {
            value: jorge,
            label: "Avatar 3"
        },
        {
            value: fred,
            label: "Avatar 4"
        },
        {
            value: max,
            label: "Avatar 5"
        },

    ]

    const reviewOptions = [
        { value: "★★★★★", label: "★★★★★" },
        { value: "★★★★☆", label: "★★★★☆" },
        { value: "★★★☆☆", label: "★★★☆☆" },
        { value: "★★☆☆☆", label: "★★☆☆☆" },
        { value: "★☆☆☆☆", label: "★☆☆☆☆" }
    ]

    const OptionWithImage = (props) => (
        <components.Option {...props}>
            <img
                src={props.data.value}
                alt={props.data.label}
                style={{ width: "50px", marginRight: "10px" }}
            />
            {props.data.label}
        </components.Option>
    )

    const SingleValueWithImage = ({ children, data }) => (
        <div style={{ display: "flex", alignItems: "center", marginTop: 0, marginBottom: 20 }} >
            <img src={data.value} alt={data.label} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", marginRight: 10 }} /> {children} </div>
    );

    return (
        <div>
            <div className="row">
                <div className="offset-3 col-6" style={{ padding: 50 }}>
                    <div className="shadow p-4 mt-4">
                        <h1>Add Review</h1>
                        <form onSubmit={handleSubmit} id="create-hat-form">

                            <div className="form-floating mb-3 text-secondary">
                                <input onChange={handleName} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3 text-secondary">
                                <Select
                                    options={imageOptions}
                                    onChange={handleProfilePic}
                                    value={profile_pic ? imageOptions.find((option) => option.value === profile_pic) : null}
                                    placeholder="Choose an avatar"
                                    components={{
                                        Option: OptionWithImage,
                                        SingleValue: SingleValueWithImage,
                                    }}
                                    isSearchable={false}
                                />
                            </div>

                            <div className="form-floating mb-3 text-secondary">
                                <Select
                                    options={reviewOptions}
                                    onChange={handleReview}
                                    value={reviewOptions.find((option) => option.value === review) || null}
                                    placeholder="How was your experience?"
                                />
                            </div>

                            <div className="form-floating mb-3 text-secondary">
                                <input onChange={handleComments} value={comments} placeholder="Comments" required type="text" name="comments" id="comments" maxLength={25} className="form-control" />
                                <label htmlFor="comments" style={{ zIndex: 0 }}>Comments (25 character limit)</label>
                            </div>

                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TestimonialForm;