import { Link } from 'gatsby'
import * as React from 'react'
import Print from "../../Assests/Svg-Icons/print.svg"

const LegalPages = () => {
  return (
    <div id="main">
      <div id="legal">
        <div id="title-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <h2>Legal</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="legal-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/privacy">
                    <Print className="svg" /> PRIVACY POLICY
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/cookie">
                    <Print className="svg" /> COOKIE POLICY
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/terms">
                    <Print className="svg" /> TERMS AND CONDITIONS
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/disclaimer">
                    <Print className="svg" /> DISCLAIMER
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/refund">
                    <Print className="svg" /> RETURN & REFUND POLICY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalPages
