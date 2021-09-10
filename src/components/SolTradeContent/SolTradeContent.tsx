import * as React from "react"
import Congress from "./Congress"
import FederalExecutive from "./FederalExecutive"
import LocalComponent from "./LocalComponent"
import StateComponent from "./StateComponent"
import CongressImg from "../../assests/sc-congress.webp"
import FedralImg from "../../assests/sc-federal.webp"
import StateImg from "../../assests/sc-state.webp"
import LocalImg from "../../assests/sc-local.webp"

const SolTradeContent = () => {
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={CongressImg} alt="" />
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
              <img src={FedralImg} alt="" />
            </div>
          </div>
          <br />
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={StateImg} alt="" />
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
              <img src={LocalImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SolTradeContent
