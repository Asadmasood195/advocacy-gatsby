import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import GovBuddy from "../assests/br-govbuddy.webp"
import Government from "../assests/sc-gov.webp"
import PolicyGuru from "../assests/sc-policyguru.webp"
import Policy from "../assests/br-policy.webp"
import Pritchard from "../assests/br-pritchard.webp"
import PritchardSc from "../assests/sc-pritchard.webp"
import CapitolSc from "../assests/sc-capitol.webp"
import Capitol from "../assests/br-capitol.webp"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"

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
          <div id="content">
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <img src={GovBuddy} className="logo-icon" alt="" />
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
                <img src={Government} alt="" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <img src={PolicyGuru} alt="" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <img src={Policy} className="logo-icon" alt="" />
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
                  <img src={Pritchard} className="logo-icon" alt="" />
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
                <img src={PritchardSc} alt="" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <img src={CapitolSc} alt="" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <img src={Capitol} className="logo-icon" />
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

export default Brands
