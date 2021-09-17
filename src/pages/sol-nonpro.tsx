import * as React from "react"
import Layout from "../Components/Layout/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import nonPro1 from "../Assests/sc-nonpro2.webp"
import sampleImg from "../Assests/sample.webp"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import ArrowRight16 from "../Assests/Svg-Icons/arrow-right-16.svg"

const SolNonPro = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/solutions">Solutions</Link> /
          Non-Profits
        </div>
      </div>

      <div id="main">
        <div id="solutions">
          <div id="banner" className="banner-solutions sol-nonpro">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                  <div className="text-left text-banner">
                    <h1>NON-PROFITS</h1>
                    <h5>
                      These products are ideal for use by federal, state, and
                      local government organizations who want a single source
                      for updated government contacts.
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
                  <img src={nonPro1} alt='imagePic' className='imgStyle' />
                </div>
                <div className="col-md-6">
                  <div className="body-content">
                    <h4>Non-Profits</h4>
                    <p>
                      Congress Database Service provides congressional database
                      solutions in multiple levels of coverage and in various
                      delivery formats. If you need high-quality data about the
                      Members, leadership, committees, and their staff, KnowWho
                      has the data you need.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-list">
                          <a href="#" className="text-center">
                            <div className="product-image">
                              <img src={sampleImg} alt='imagePic' className='imgStyle' />
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
                              <img src={sampleImg} className='imgStyle' alt='imagePic' />
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
                              <img src={sampleImg} className='imgStyle' alt='imagePic' />
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
                              <img src={sampleImg} alt='imagePic' className='imgStyle' />
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
              </div>
            </div>
          </div>
        </div>
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default SolNonPro
