import { Link } from 'gatsby'
import * as React from 'react'
import regStep from "../../assests/reg-step.png"
const RegisterForm = () => {
    return (
        <form
            //  method="post"
            >
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Registration</h2>
                <div className="loginImage">
                    <img src={regStep} alt="reg-step" />
                </div>
                <div className="box2">
                    Thank you for starting the registration process on
                    Advocacy.biz by Capitol Enquiry. The registration process
                    for our website requires you complete the form below and
                    then confirm your email address before you can activate
                    your account. This is a quick process that ensures our
                    customers can get copies of their receipts and
                    notifications of shipment.
                </div>
                <p>
                    <b>STEP 1</b>
                </p>
                <div className="form-group">
                    <label htmlFor="ch-firstname">
                    First Name <span className="red">*</span>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="ch-firstname"
                    placeholder="John"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ch-lastname">
                    Last Name <span className="red">*</span>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="ch-lastname"
                    placeholder="Doe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ch-username">
                    Username or email <span className="red">*</span>
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="ch-username"
                    placeholder="email@example.com"
                    />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
                </div>
            </div>
            <p>
                <Link to="/forgot">Lost your password</Link>
            </p>
            </div>
        </form>
    )
}

export default RegisterForm
