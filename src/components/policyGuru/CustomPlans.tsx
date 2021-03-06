import { Link } from 'gatsby'
import * as React from 'react'

const CustomPlans = () => {
    return (
        <div id="content">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-center">
                  <div className="box">
                    <div className="row align-items-end justify-content-between">
                      <div className="col">
                        <h3>Custom Plans Available Now</h3>
                        <p>
                          PolicyGuru is an enterprise platform that features a
                          searchable database of local government across
                          California. It's ideal for advocacy and campaign work.
                          Data sets can be customized.
                        </p>
                      </div>
                      <div className="col align-right">
                        <Link
                          to="https://policyguru.com"
                          className="btn btn-primary btn-lg"
                        >
                          Call Us Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row plan-benefit">
                <div className="col-md-10 col-center ">
                  <h4>World Class Features And Capabilities </h4>
                  <p>
                    We've created the fastest and most convenient and up to date
                    cloud technology to help you easily and more efficiently
                    research city and county governments.
                  </p>
                  <ul>
                    <li>Build a coallition for advocacy efforts</li>
                    <li>
                      Research city and county officials and school board
                      officials
                    </li>
                    <li>Rely on an experienced and knowledgeable team</li>
                  </ul>
                  <h4>Optimized For Modern Advocacy Work</h4>
                  <ul>
                    <li>Detailed Profiles</li>
                    <li>
                      Invite people and organize activities for your advocacy
                      group.
                    </li>
                    <li>
                      Identify legislators, their staff, and committee staff key
                      to your success and let everyone post their interactions
                      and comments.
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
                      GovBuddy. They can can use our free version, although only
                      subscribers will have full access to GovBuddy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    )
}

export default CustomPlans
