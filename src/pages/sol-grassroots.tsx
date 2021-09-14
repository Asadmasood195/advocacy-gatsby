import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import Congress from "../components/SolTradeContent/Congress"
import FederalExecutive from "../components/SolTradeContent/FederalExecutive"
import StateComponent from "../components/SolTradeContent/StateComponent"
import LocalComponent from "../components/SolTradeContent/LocalComponent"
import scCongress2 from "../assests/sc-congress2.webp"
import scfederal from "../assests/sc-federal.webp"
import scState from "../assests/sc-state.webp"
import scLocal2 from "../assests/sc-local2.webp"

const SolGrassRoot = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/solutions">Solutions</Link> /
          Grassroots Efforts
        </div>
      </div>

      <div id="main">
        <div id="solutions">
          <div id="banner" className="banner-solutions sol-grassroots">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                  <div className="text-left text-banner">
                    <h1>GRASSROOTS EFFORTS</h1>
                    <h5>
                      Grassroots and advocacy professionals have unique needs
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
                <div className="col-sm-5 col-md-6">
                  <img src={scCongress2} alt="sc-congress2" className='imgStyle' />
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
                  <img src={scfederal} alt="sc-federal" className='imgStyle' />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={scState} alt="sc-state" className='imgStyle' />
                </div>
                <div className="col-md-6">
                  <StateComponent />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <LocalComponent />
                </div>
                <div className="col-md-6">
                  <img src={scLocal2} alt="sc-local2" className='imgStyle' />
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

export default SolGrassRoot
