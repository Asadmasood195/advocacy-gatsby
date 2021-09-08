import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"

const brands = () => {
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
          <div id="content">
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <StaticImage
                    src="../assests/br-govbuddy.webp"
                    className="logo-icon"
                  />
                  <h4>
                    Your Comprehensive guide to California's State Legislature
                  </h4>
                  <p>
                    GovBuddy receives over 2,000 updates a year to the contact
                    information we store. It is the most reliable and
                    trustworthy source for data on the California Legislators,
                    their staff, Committees, and their staff.
                  </p>

                  <Link
                    to="https://www.govbuddy.com/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <StaticImage src="../assests/sc-gov.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <StaticImage src="../assests/sc-policyguru.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <StaticImage
                    src="../assests/br-policy.webp"
                    className="logo-icon"
                  />
                  <h4>Comprehensive Guide to City and County Officials</h4>
                  <p>
                    PolicyGuru is a searchable database of local government
                    across California. It's ideal for advocacy and campaign
                    work.
                  </p>

                  <Link
                    to="https://www.policyguru.net/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <br />
                  <StaticImage
                    src="../assests/br-pritchard.webp"
                    className="logo-icon"
                  />
                  <h4>Industry leading educational courses</h4>
                  <p>
                    Online educational courses from experts on key areas of
                    Legislative, Budget and Regulatory Advocacy; Media
                    Strategies; and Lobbying the Administration.
                  </p>

                  <Link
                    to="http://pritchardu.com/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <StaticImage src="../assests/sc-pritchard.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <StaticImage src="../assests/sc-capitol.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <StaticImage
                    src="../assests/br-capitol.webp"
                    className="logo-icon"
                  />
                  <h4>Books, Maps, and Digital Products</h4>
                  <p>
                    Our famous "Little Red Book", the Printed Directory of the
                    California State Legislature, is still in print after almost
                    50 years. We have since introduced technology products that
                    are continuously updated throughout the year.
                  </p>

                  <Link to="/contact" className="btn btn-outline-primary">
                    View Capitol Enquiry Products{" "}
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HowCanWeHelpSimple />
        </div>
      </div>
    </Layout>
  )
}

export default brands
