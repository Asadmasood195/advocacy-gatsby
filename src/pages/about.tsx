import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import WhoWeAre from "../components/about/WhoWeAre"
import MoreDetails from "../components/about/MoreDetails"
import OurProducts from "../components/about/OurProducts"

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
              <WhoWeAre />
              
            </div>
            <MoreDetails />
            <div className="container">
              <OurProducts />
            </div>
          </div>
        </div>
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default About
