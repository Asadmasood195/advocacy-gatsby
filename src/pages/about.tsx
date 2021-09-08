import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"

const About = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div id="breadcrumbs">
          <div className="container">
            <Link to="/">Home</Link> / About Us
          </div>
        </div>
      </div>

      <div id="main">
        <div id="about">
          <div id="banner" className="banner-about">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <div className="text-center text-banner">
                    <StaticImage src="../assests/logo.png" width="200" />
                    <h1>Game Changing Products for Advocacy</h1>
                    <h5>
                      We offer physical books, digital editions, online
                      subscriptions, maps, and online courses for advocacy
                      professionals.
                    </h5>
                  </div>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
          <div id="content">
            <div className="container">
              <div className="row" id="who-we-are">
                <div className="col-md-7">
                  <h3 className="with-line">WHO WE ARE</h3>
                  <h4>
                    Empowering Advocacy Teams, Driving Real Change. Leverage
                    Capitol Enquiry Products To Your Advantage.
                  </h4>
                </div>
              </div>
              <div className="row" id="brands-logo">
                <div className="col-md-12">
                  <h3>OUR BRANDS</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="brand-logo text-center">
                        <StaticImage src="../assests/capitol-enquiry-logo.webp" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="brand-logo text-center">
                        <StaticImage src="../assests/govbuddy-logo.webp" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="brand-logo text-center">
                        <StaticImage src="../assests/policyguru-logo.webp" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="brand-logo text-center">
                        <StaticImage src="../assests/pritchardu-logo.webp" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="more-detail1">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 p-4">
                    <div className="border-right-line">
                      <h4>15,000+ Happy Customers</h4>
                      <p>
                        Many customers purchase our products ever year. Folks
                        have begun and retired from their advocacy careers with
                        our products in their pockets.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="border-right-line">
                      <h4>Nearly 50 Years In Business</h4>
                      <p>
                        Proven, accurate, reliable, and indespensible. Capitol
                        Enquiry products have empowered advocacy since 1973.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="border-right-line no-border">
                      <h4>Federal, State & Local Solutions</h4>
                      <p>
                        We operate a USA based call center and use proprietary
                        software to collect the most up to date data possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row" id="our-products">
                <div className="col-md-5">
                  <h3 className="with-line">OUR PRODUCTS</h3>
                  <h4>The Capitol Enquiry Advantage:</h4>
                </div>
                <div className="col-md-7" id="product-list-overview">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="image">
                        <StaticImage src="../assests/govbuddy-icon1.webp" />
                        <h5>GovBuddy</h5>
                        <p>
                          Collaboration platform and directory. The premier
                          source of contact information for the California State
                          Legislature.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <StaticImage src="../assests/printed-icon.webp" />
                      <h5>Printed Directories</h5>
                      <p>
                        In print since 1973, our Printed Directories including
                        the Pocket Directory of the California State Legislature
                        are powerful and convenient tools.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <StaticImage src="../assests/prit-icon.webp" />
                      <h5>PritchardU</h5>
                      <p>
                        The industry's first online educational resource for
                        advocacy work.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <StaticImage src="../assests/policy-icon.webp" />
                      <h5>Policy Guru</h5>
                      <p>
                        The premier source of contact information for cities and
                        counties in California.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default About
