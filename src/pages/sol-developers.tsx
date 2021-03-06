import * as React from "react"
import Layout from "../Components/Layout/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import ArrowRight16 from "../Assests/Svg-Icons/arrow-right-16.svg"
import DataServices from "../Components/DevelopersContent/DataServices"
import DevSc from "../Assests/sc-dev.webp"
import DevSc1 from "../Assests/sc-dev2.webp"
import Image from "../Assests/sample.webp"

const SolDevelopers = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/solutions">Solutions</Link> /
          Developers
        </div>
      </div>

      <div id="main">
        <div id="solutions">
          <div id="banner" className="banner-solutions sol-developers">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-xs-12 col-md-8">
                  <div className="text-left text-banner">
                    <h1>DEVELOPERS</h1>
                    <h5>
                      for internal and third-party developers and consultants.
                      Leverage our data in your own custom solutions using the
                      products listed below.
                    </h5>
                  </div>
                </div>
                {/* <div className="col-xs-10 col-md-3"></div> */}
              </div>
            </div>
          </div>
          <div id="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xs-10 col-md-10 ">
                  <img src={DevSc} alt="" className='imgStyle' />
                </div>
                <div className="col-md-6">
                  <DataServices />
                </div>
              </div>
              <br />
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="body-content">
                    <h4>Web Services</h4>
                    <p>
                      Congress Database Service provides congressional database
                      solutions in multiple levels of coverage and in various
                      delivery formats. If you need high-quality data about the
                      Members, leadership, committees, and their staff, KnowWho
                      has the data you need.
                    </p>
                    <div className="row">
                      <div className="col-xs-10 col-md-6 ">
                        <div className="product-list">
                          <a href="#" className="text-center">
                            <div className="product-image">
                              <img src={Image} alt="" className='imgStyle' />
                            </div>
                            <div className="product-title">
                              2021 US Congress Directory
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-list">
                          <a href="#" className="text-center">
                            <div className="product-image">
                              <img src={Image} alt="" className='imgStyle' />
                            </div>
                            <div className="product-title">
                              2021 US Congress Directory
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-list">
                          <a href="#" className="text-center">
                            <div className="product-image">
                              <img src={Image} alt="" className='imgStyle' />
                            </div>
                            <div className="product-title">
                              2021 US Congress Directory
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-list">
                          <a href="#" className="text-center">
                            <div className="product-image">
                              <img src={Image} alt="" className='imgStyle' />
                            </div>
                            <div className="product-title">
                              2021 US Congress Directory
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="text-center">
                      <Link to="/shop" className="btn btn-outline-primary">
                        More Info <ArrowRight16 className="svg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={DevSc1} alt="" className='imgStyle' />
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

export default SolDevelopers
