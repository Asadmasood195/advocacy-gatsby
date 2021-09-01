import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CompanyLogos = () => {
  return (
    <div>
      <div id="content">
        <div id="brand-logo">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3">
                <StaticImage src="../../assests/br-capitol.webp" />
              </div>
              <div className="col-md-3">
                <StaticImage src="../../assests/br-govbuddy.webp" />
              </div>
              <div className="col-md-3">
                <StaticImage src="../../assests/br-policy.webp" />
              </div>
              <div className="col-md-3">
                <StaticImage src="../../assests/br-pritchard.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos
