import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout/Layout"
import Banner from "../Components/Banner/Banner"
import PrivacyPolicy from "../Components/Legal/PrivacyPolicy"

const privacy = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/legal">Legal</Link> / Privacy Policy
        </div>
      </div>

      <div id="main">
        <div id="legal-content">
          <div id="banner" className="banner-legal">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="text-center text-banner">
                    <h1>Privacy Policy</h1>
                    <h5>Updated at 2021-03-20</h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <PrivacyPolicy />
        </div>
      </div>
    </Layout>
  )
}

export default privacy
