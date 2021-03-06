import * as React from "react"
import Capitol from "../../Assests/br-capitol.webp"
import Govbuddy from "../../Assests/br-govbuddy.webp"
import PolicyGuru from "../../Assests/br-policy.webp"
import Pritchard from "../../Assests/br-pritchard.webp"

const CompanyLogos = () => {
  return (
    <div>
      <div id="content">
        <div id="brand-logo">
          <div className="container">
            <div className="row text-center align-items-end">
              <div className="col-md-3">
                <img className="mb-5" src={Capitol} alt="Capitol" />
              </div>
              <div className="col-md-3">
                <img className="mb-5" src={Govbuddy} alt="Govbuddy" />
              </div>
              <div className="col-md-3">
                <img className="mb-5" src={PolicyGuru} alt="PolicyGuru" />
              </div>
              <div className="col-md-3">
                <img
                  className="mb-5"
                  src={Pritchard}
                  alt="Pritchard"
                  width="90%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos
