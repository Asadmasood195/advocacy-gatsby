import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Congress from "../components/SolTradeContent/Congress"
import FederalExecutive from "../components/SolTradeContent/FederalExecutive"
import StateComponent from "../components/SolTradeContent/StateComponent"
import LocalComponent from "../components/SolTradeContent/LocalComponent"
import scCongress from "../assests/sc-congress.webp";
import scFederal from "../assests/sc-federal.webp";
import scState from "../assests/sc-state.webp";
import scLocal from "../assests/sc-local.webp";

const SolGovernment = () => {
    return (
        <Layout>
            <div id="breadcrumbsTop">
                <div className="container">
                    <Link to="/">Home</Link>
                    <Link to="/">/ Products</Link> /Government
                </div>
            </div>
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
                                <img src={scCongress} alt="sc-congress" />
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
                                <img src={scFederal} alt="sc-federal" />
                            </div>
                        </div>
                        <br />
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src={scState} alt="sc-state" />
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
                                <img src={scLocal} alt="sc-local" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SolGovernment
