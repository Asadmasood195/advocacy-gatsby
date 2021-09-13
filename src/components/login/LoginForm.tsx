import { Link } from 'gatsby'
import * as React from 'react'

const LoginForm = () => {
    return (
        <form
            //  method="post"
            >
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Log In</h2>
                <div className="form-group">
                    <label htmlFor="ch-username">
                    Username or email <span className="red">*</span>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="ch-username"
                    aria-describedby="emailHelp"
                    placeholder="Your Username or email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ch-password">
                    Password <span className="red">*</span>
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="ch-password"
                    aria-describedby="emailHelp"
                    placeholder="Your Password"
                    />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                <button type="submit" className="btn btn-primary">
                    Log In
                </button>
                </div>
                <div className="col-lg-10">
                <div className="form-group">
                    <label htmlFor="ch-remember-me">
                    <input
                        type="checkbox"
                        id="ch-remember-me"
                        placeholder=""
                    />
                    {" Remember Me "}
                    </label>
                </div>
                </div>
            </div>
            <p>
                <Link to="/forgot">Lost your password</Link>
            </p>
            </div>
        </form>
    )
}

export default LoginForm