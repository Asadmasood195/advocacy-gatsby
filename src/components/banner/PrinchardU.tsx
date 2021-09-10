import * as React from "react"
import { Link } from "gatsby"
import Pritchard from "../../assests/br-pritchard.webp"
import Prit2 from "../../assests/sc-prit2.webp"

const PrinchardU = () => {
  return (
    <div id="homepage">
      <div id="pritchard-enroll">
        <div className="row">
          <div className="col-md-6">
            <div className="p-5">
              <img
                src={Pritchard}
                className="logo"
                alt="Pritchard"
                width="90%"
              />

              <h4>Online Educational Courses</h4>
              <p>
                Legislative Pathways and Ethical Leadership is our first course
                by Ray LeBov
              </p>

              <p>
                <b>Get</b> enrolled!
              </p>

              <div className="row">
                <div className="col-md-6">
                  <Link
                    to="https://pritchardu.com/"
                    className="btn btn-primary"
                  >
                    Enroll Now
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="text1">Launched 2021</div>
                  <div className="price">$600.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-right">
            <img src={Prit2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrinchardU
