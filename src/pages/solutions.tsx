import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"
import { Link } from "gatsby"

const solutions = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Solutions
        </div>
      </div>

      <div id="main">
        <div id="solutions">
          <div id="banner" className="banner-solutions">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                  <div className="text-left text-banner">
                    <h1>Advocacy’s Solutions</h1>
                    <h5>
                      All the legislative information in our Pocket Directory of
                      the New York Legislature, continuously updated throughout
                      the year.
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
                <StaticImage src="../assests/sc-government.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Government</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link
                    to="/sol-government"
                    className="btn btn-outline-primary"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Trade Associations</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link to="/sol-trade" className="btn btn-outline-primary">
                    More Info
                  </Link>
                </div>
              </div>
              <div className="col-md-6 align-right">
                <StaticImage src="../assests/sc-trade.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <StaticImage src="../assests/sc-nonpro.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Non-Profits</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link to="/sol-nonpro" className="btn btn-outline-primary">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Lobbyst</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link to="/sol-lobbyst" className="btn btn-outline-primary">
                    More Info
                  </Link>
                </div>
              </div>
              <div className="col-md-6 align-right">
                <StaticImage src="../assests/sc-lobbyst.webp" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <StaticImage src="../assests/sc-grass.webp" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Grassroots Efforts</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link
                    to="/sol-grassroots"
                    className="btn btn-outline-primary"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Developer</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link
                    to="/sol-developers"
                    className="btn btn-outline-primary"
                  >
                    More Info
                  </Link>
                </div>
              </div>
              <div className="col-md-6 align-right">
                <StaticImage src="../assests/sc-dev.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default solutions
