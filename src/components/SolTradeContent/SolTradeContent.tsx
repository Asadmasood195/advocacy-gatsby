import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Congress from "./Congress"
import FederalExecutive from "./FederalExecutive"
import LocalComponent from "./LocalComponent"
import StateComponent from "./StateComponent"

const SolTradeContent = () => {
    return (
        <>
            <div id="content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <StaticImage src="../assests/sc-congress.webp" />
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
                            <StaticImage src="../assests/sc-local.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SolTradeContent
