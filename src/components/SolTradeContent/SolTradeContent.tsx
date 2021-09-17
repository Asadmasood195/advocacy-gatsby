import * as React from "react"
import Congress from "./Congress"
import FederalExecutive from "./FederalExecutive"
import LocalComponent from "./LocalComponent"
import StateComponent from "./StateComponent"
import CongressImg from "../../Assests/sc-congress.webp"
import FedralImg from "../../Assests/sc-federal.webp"
import StateImg from "../../Assests/sc-state.webp"
import LocalImg from "../../Assests/sc-local.webp"

const SolTradeContent = () => {
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={CongressImg} alt="" className='imgStyle' />
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
              <img src={FedralImg} alt="" className='imgStyle' />
            </div>
          </div>
          <br />
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={StateImg} alt="" className='imgStyle' />
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
              <img src={LocalImg} alt="" className='imgStyle' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SolTradeContent
