import * as React from 'react'
import { Link } from "gatsby"
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"
import scNonPro from "../../assests/sc-nonpro.webp"

const NonProfit = () => {

    return (
        <>
            <div className="row">
              <div className="col-md-6">
                <img src={scNonPro} className='imgStyle' />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <h4>Non-Profits</h4>
                  <p>
                    Grassroots and advocacy professionals have unique needs, and
                    Advocacy has your solutions listed below.
                  </p>
                  <ul>
                    <li>
                      <ArrowRight16 className="svg" />
                      Congress
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Federal Executive
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      State
                    </li>
                    <li>
                      <ArrowRight16 className="svg" />
                      Local
                    </li>
                  </ul>
                  <Link to="/sol-nonpro" className="btn btn-outline-primary">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
        </>
    )
}

export default NonProfit
