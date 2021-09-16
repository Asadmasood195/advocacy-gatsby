import * as React from 'react'
import { Link } from "gatsby"
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"
import scGovernment from "../../assests/sc-government.webp"

const Government = () => {
    return (
        <>
         <div className="row">
              <div className="col-xs-10 col-md-6">
                <img src={scGovernment} className='imgStyle' />
              </div>
              <div className="col-xs-10 col-md-6">
                <div className="body-content">
                  <h4>Government</h4>
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
                  <Link
                    to="/sol-government"
                    className="btn btn-outline-primary"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>   
        </>
    )
}

export default Government
