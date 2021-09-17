import * as React from "react"
import Layout from "../Components/Layout/Layout"
import { Link } from "gatsby"
import Congress from "../Components/SolTradeContent/Congress"
import FederalExecutive from "../Components/SolTradeContent/FederalExecutive"
import StateComponent from "../Components/SolTradeContent/StateComponent"
import LocalComponent from "../Components/SolTradeContent/LocalComponent"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import congressImg from "../Assests/sc-congress.webp"
import scCongress from "../Assests/sc-congress.webp"
import scFederal from "../Assests/sc-federal.webp"
import scState from "../Assests/sc-state.webp"
import scLocal from "../Assests/sc-local.webp"
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
                  <img src={scCongress} className='imgStyle' alt='imagePic' />
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
                  <img src={scFederal} className='imgStyle' alt='imagePic' />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={scState} className='imgStyle' alt='imagePic' />
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
                  <img src={scLocal} className='imgStyle' alt='imagePic' />
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
