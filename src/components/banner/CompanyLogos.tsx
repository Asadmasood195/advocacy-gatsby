import * as React from "react"
import Capitol from "../../assests/br-capitol.webp"
import Govbuddy from "../../assests/br-govbuddy.webp"
import PolicyGuru from "../../assests/br-policy.webp"
import Pritchard from "../../assests/br-pritchard.webp"

const CompanyLogos = () => {
  return (
    <div>
      <div id="content">
        <div id="brand-logo">
          <div className="container">
            <div className="row text-center align-items-end">
              <div className="col-md-3">
                <img src={Capitol} alt="Capitol" />
              </div>
              <div className="col-md-3">
                <img src={Govbuddy} alt="Govbuddy" />
              </div>
              <div className="col-md-3">
                <img src={PolicyGuru} alt="PolicyGuru" />
              </div>
              <div className="col-md-3">
                <img src={Pritchard} alt="Pritchard" width="90%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos
