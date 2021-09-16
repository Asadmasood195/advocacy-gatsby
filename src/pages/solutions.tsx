import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import Government from "../components/solutions/Government"
import Trade from "../components/solutions/Trade"
import NonProfit from "../components/solutions/NonProfit"
import Lobby from "../components/solutions/Lobby"
import GrassRoots from "../components/solutions/GrassRoots"
import Developer from "../components/solutions/Developer"

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
