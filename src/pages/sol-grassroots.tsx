

import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import Congress from "../components/SolTradeContent/Congress"
import FederalExecutive from "../components/SolTradeContent/FederalExecutive"
import StateComponent from "../components/SolTradeContent/StateComponent"
import LocalComponent from "../components/SolTradeContent/LocalComponent"

const SolGrassRoot = () => {
    return (
        <Layout>
            <div id="breadcrumbsTop">
                <div className="container">
                    <Link to="/">Home</Link> /
                    <Link to="/solutions">Solutions</Link> /
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
                                        <h5>Grassroots and advocacy professionals have unique needs</h5>
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
                                    <StaticImage src="../assests/sc-congress2.webp" />
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
                                    <StaticImage src="../assests/sc-federal.png" />
                                </div>
                            </div>
                            <br />
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <StaticImage src="../assests/sc-state.webp" />
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
                                    <StaticImage src="../assests/sc-local2.png" />
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
