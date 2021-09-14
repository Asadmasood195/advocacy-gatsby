import * as React from "react"
import { Link } from "gatsby"

import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"

const HowCanWeHelpSimple = () => {
  return (
    <div id="main">
      <div id="how-we-can-help">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-5 offset-lg-4 ">
              <div className="content">
                <h3>How can we help you?</h3>
                <p>
                  We're ready to lead you into the future.
                  <span>Get in touch</span> with us
                </p>
                <Link to="/contact" className="btn btn-outline-primary">
                  Contact us
                  <ArrowRight16 className="svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowCanWeHelpSimple
