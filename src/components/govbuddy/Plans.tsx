import { Link } from 'gatsby'
import * as React from 'react'
import PlansContent from './PlansContent'

const Plans = () => {
    return (
        <div id="choose-plan">
            <div className="row">
                <div className="col-md-12">
                <div className="text-center">
                    <h2>Choose a plan that works for you</h2>
                </div>
                <div className="plan-box">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className="plan-white">
                            <h3>Team Plan</h3>
                            <h4 className="price">$599/year</h4>
                            <p className="size-people">Up to 20 People</p>
                            <Link
                            to="./sign-up-01-login-or-register.htmll"
                            className="btn btn-grey"
                            >
                            Sign Up Now
                            </Link>
                        </div>
                        </div>
                        <div className="col">
                        <div className="plan-white active">
                            <label className="check_plan">
                            <input
                                type="radio"
                                defaultChecked={true}
                                name="radio"
                            />
                            <span className="checkmark_plan" />
                            </label>
                            <h3>Individual Plan</h3>
                            <h4 className="price">$119.95/year</h4>
                            <p className="size-people">1 Person</p>
                            <Link
                            to="./sign-up-01-login-or-register.html"
                            className="btn btn-grey"
                            >
                            Sign Up Now
                            </Link>
                        </div>
                        </div>
                        <div className="col">
                        <div className="plan-white">
                            <h3>Enterprise Plan</h3>
                            <h4 className="price">Call for Pricing</h4>
                            <p className="size-people">21+ People</p>
                            <Link to="#" className="btn btn-grey">
                            Call Us Now
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <PlansContent />
                </div>
                </div>
            </div>
            </div>
    )
}

export default Plans
