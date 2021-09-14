import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Congress from "../components/SolTradeContent/Congress"
import FederalExecutive from "../components/SolTradeContent/FederalExecutive"
import StateComponent from "../components/SolTradeContent/StateComponent"
import LocalComponent from "../components/SolTradeContent/LocalComponent"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import scCongress from "../assests/sc-congress.webp"
import scFederal from "../assests/sc-federal.webp"
import scState from "../assests/sc-state.webp"
import scLocal from "../assests/sc-local.webp"
import { StaticImage } from "gatsby-plugin-image"

const SolGovernment = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/">/ Products</Link> /Government
        </div>
      </div>
      <div id="main">
        <div id="solutions">
          <div id="banner" className="banner-solutions sol-government">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                  <div className="text-left text-banner">
                    <h1>GOVERNMENT</h1>
                    <h5>
                      Grassroots and advocacy professionals have unique needs, and
                      Advocacy has your solutions listed below.
                    </h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div id="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <StaticImage src="../assests/sc-congress.webp" className='imgStyle' />
                </div>
                <div className="col-md-6">
                  <Congress />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <FederalExecutive />
                </div>
                <div className="col-md-6">
                  <StaticImage src="../assests/sc-federal.png" className='imgStyle' />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <StaticImage src="../assests/sc-state.webp" className='imgStyle' />
                </div>
                <div className="col-md-6">
                  <StateComponent />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="body-content">
                    <LocalComponent />
                  </div>
                </div>
                <div className="col-md-6">
                  <StaticImage src="../assests/sc-local.webp" className='imgStyle' />
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

export default SolGovernment
