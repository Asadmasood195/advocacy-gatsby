import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout/Layout"
import Disclaimer from "../Components/Legal/Disclaimer"

const disclaimer = () => {
  const appname = "Advocacy"
  const country = "UK"
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/legal">Legal</Link> / Disclaimer
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
                    <h1>Disclaimer</h1>
                    <h5>Updated at 2021-03-20</h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <Disclaimer />
        </div>
      </div>
    </Layout>
  )
}

export default disclaimer
