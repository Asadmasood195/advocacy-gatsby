import * as React from "react"
import { Link } from "gatsby"
import ArrowRight16 from "../../Assests/Svg-Icons/arrow-right-16.svg"
import Image from "../../Assests/sample.webp"

const DataServices = () => {
  return (
    <div className="body-content">
      <h4>Data Services</h4>
      <p>
        Congress Database Service provides congressional database solutions in
        multiple levels of coverage and in various delivery formats. If you need
        high-quality data about the Members, leadership, committees, and their
        staff, KnowWho has the data you need.
      </p>
      <div className="row">
        <div className="col-xs-10 col-md-6">
          <div className="product-list">
            <a href="#" className="text-center">
              <div className="product-image">
                <img src={Image} alt="" className='imgStyle' />
              </div>
              <div className="product-title">2021 US Congress Directory</div>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-list">
            <a href="#" className="text-center">
              <div className="product-image">
                <img src={Image} alt="" />
              </div>
              <div className="product-title">2021 US Congress Directory</div>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-list">
            <a href="#" className="text-center">
              <div className="product-image">
                <img src={Image} alt="" />
              </div>
              <div className="product-title">2021 US Congress Directory</div>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-list">
            <a href="#" className="text-center">
              <div className="product-image">
                <img src={Image} alt="" />
              </div>
              <div className="product-title">2021 US Congress Directory</div>
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
  )
}

export default DataServices
