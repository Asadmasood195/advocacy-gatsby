import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"

const Products = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Products
        </div>
      </div>
      <div id="main">
        <div id="products">
          <div id="banner" className="banner-products">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                  <div className="text-left text-banner">
                    <h1>Advocacy’s Products</h1>
                    <h5>
                      All the legislative information in our Printed Directory
                      of the New York Legislature, continuously updated
                      throughout the year.
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
                  <h4>California Legislature: Desktop Access with App</h4>
                  <p>
                    All the legislative information in our Pocket Directory of
                    the California Legislature, continuously updated throughout
                    the year.
                  </p>

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products <ArrowRight16 className="svg" />
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
                <StaticImage src="../assests/sc-printed.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <br />
                  <br />
                  <h4>Printed Directory</h4>
                  <p>
                    At PritchardU, professionals learn new skills and earn
                    certifications. Each student who successfully completes a
                    PritchardU course earns a certificate of completion.
                  </p>

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <br />
                  <br />
                  <h4>Digital Directory Editions</h4>
                  <p>
                    All Pocket Directory information on Assembly and Senate
                    members on USB Flash Drive, with staff and committees.
                    Simple solutions for smart spaces that engage people.
                  </p>

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <StaticImage src="../assests/sc-digital.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 p-5">
                <StaticImage src="../assests/sc-maps.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <br />
                  <br />
                  <h4>Maps</h4>
                  <p>
                    All Pocket Directory information on Assembly and Senate
                    members on USB Flash Drive, with staff and committees.
                    Simple solutions for smart spaces that engage people.
                  </p>

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
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

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <StaticImage src="../assests/sc-policy2.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <StaticImage src="../assests/sc-prit.webp" />
              </div>
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

                  <Link to="/shop" className="btn btn-outline-primary">
                    View All Products <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
