import * as React from "react"
import Layout from "../Components/Layout/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import SolTradeContent from "../Components/SolTradeContent/SolTradeContent"

const SolTrade = () => {
    return (
        <Layout>
            <div id="breadcrumbsTop">
                <div className="container">
                    <Link to="/">Home</Link>
                    <Link to="/solutions">Solutions</Link> /
                    Trade Associations
                </div>
            </div>
            <div id="main">
                <div id="solutions">
                    <div id="banner" className="banner-solutions sol-trade">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-8">
                                    <div className="text-left text-banner">
                                        <h1>TRADE ASSOCIATIONS</h1>
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
                    <SolTradeContent />
                </div>
                <HowCanWeHelpSimple />
            </div>
        </Layout>
    )
}

export default SolTrade
