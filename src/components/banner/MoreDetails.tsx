import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ArrowRight16 from "../../images/octicons/arrow-right-16.svg"

const MoreDetails = () => {
  return (
    <div id="homepage">
      <div id="more-detail2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <StaticImage src="../../images/sc-rand1.webp" />
            </div>
            <div className="col-md-6">
              <h3>We’re committed to creating Change that Matters</h3>
              <p>
                We empower the latter with an education from experts on key
                areas of Legislative, Budget and Regulatory Advocacy; Media
                Strategies; and Lobbying the Administration.
              </p>
              <Link to="about" className="btn btn-outline-primary">
                Learn more about us
                <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreDetails
