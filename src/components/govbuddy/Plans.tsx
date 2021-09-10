import { Link } from 'gatsby'
import * as React from 'react'

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
                    <div className="row plan-benefit">
                    <div className="col-md-10 col-center ">
                        <h3>All Paid Plans Include</h3>
                        <h4>Information: Powerful, Updated &amp; Easy-to-use!</h4>
                        <p>
                        All the legislative information in our Pocket Directory
                        of the California Legislature, continuously updated
                        throughout the year with a summary of weekly updates
                        mailed to you each week. Available on our GovBuddy.com
                        website or our GovBuddy app.
                        </p>
                        <p>
                        <b>Desktop features include:</b>
                        </p>
                        <ul>
                        <li>
                            State Legislator contact information, including emails
                            addresses, and phone &amp; fax numbers for each
                            office.
                        </li>
                        <li>
                            Social media accounts: Twitter, Facebook, LinkedIn,
                            and Instagram.
                        </li>
                        <li>
                            Staff names, titles, offices, emails, and office phone
                            numbers.
                        </li>
                        <li>
                            Committee listings with members, staff, addresses and
                            meeting times.
                        </li>
                        <li>
                            Brief legislator bios with links to official
                            biographies and Wikipedia listings.
                        </li>
                        <li>
                            Chief of Staff photos and background (where available)
                        </li>
                        <li>Links to campaign finances</li>
                        <li>
                            Interactive district maps let you zoom in to street
                            level or zoom out to state level
                        </li>
                        <li>Printable B&amp;W district maps (pdf)</li>
                        <li>
                            District locator that allows you to enter an address
                            and determine the Assembly, Senate, and
                        </li>
                        <li>
                            Congressional districts that the address belongs in
                        </li>
                        <li>
                            California's US Congress delegation with contact
                            information, staff, brief bios, and committees.
                        </li>
                        <li>Most recent election results (pdf)</li>
                        <li>
                            Our exclusive one-page profile for each state
                            legislator.
                        </li>
                        </ul>
                        <h4>
                        Collaboration: Easily Coordinate Your Advocacy
                        Activities!
                        </h4>
                        <p>
                        All the legislative information in our Pocket Directory
                        of the California Legislature, continuously updated
                        throughout the year with a summary of weekly updates
                        mailed to you each week. Available on our GovBuddy.com
                        website or our GovBuddy app.
                        </p>
                        <p>
                        <b>Desktop features include:</b>
                        </p>
                        <ul>
                        <li>
                            Software lets you identify issues and share them to
                            coordinate your advocacy work,
                        </li>
                        <li>
                            Invite people and organize activities for your
                            advocacy group.
                        </li>
                        <li>
                            Identify legislators, their staff, and committee staff
                            key to your success and let everyone post their
                            interactions and comments.
                        </li>
                        <li>
                            Tag related bills to track their progress through the
                            legislature.
                        </li>
                        <li>
                            Join advocacy groups initiated by others when invited.
                        </li>
                        <li>
                            People you coordinate with do not have to subscribe to
                            GovBuddy. They can can use our free version, although
                            only subscribers will have full access to GovBuddy.
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Plans
