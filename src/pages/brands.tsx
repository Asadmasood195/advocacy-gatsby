import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout/Layout"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import BrandsContent from "../Components/Brands/BrandsContent"

const Brands = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Our Brands
        </div>
      </div>

      <div id="main">
        <div id="brands">
          <div id="banner" className="banner-brands">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="text-center text-banner">
                    <h1>Game Changing Products for Advocacy</h1>
                    <h5>
                      Since 1973, our company has been providing innovative
                      products for advocacy work.
                    </h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <BrandsContent />
          <HowCanWeHelpSimple />
        </div>
      </div>
    </Layout>
  )
}

export default Brands
