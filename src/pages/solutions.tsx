import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import Government from "../Components/Solutions/Government"
import Trade from "../Components/Solutions/Trade"
import NonProfit from "../Components/Solutions/NonProfit"
import Lobby from "../Components/Solutions/Lobby"
import GrassRoots from "../Components/Solutions/GrassRoots"
import Developer from "../Components/Solutions/Developer"

const Solutions = () => {
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
                <div className="col-md-6">
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
              <Government />
            <br />
              <Trade />
            <br />
              <NonProfit />
            <br />
              <Lobby />
            <br />
              <GrassRoots />
            <br />
            <Developer />
          </div>
        </div>
      </div>
      <HowCanWeHelpSimple />
    </Layout>
  )
}

export default Solutions
