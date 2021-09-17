import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import WhoWeAre from "../Components/About/WhoWeAre"
import MoreDetails from "../Components/About/MoreDetails"
import OurProducts from "../Components/About/OurProducts"
import logoImg from "../Assests/logo.png"

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
                    <img src={logoImg} width="200" alt='imagePic' />
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
