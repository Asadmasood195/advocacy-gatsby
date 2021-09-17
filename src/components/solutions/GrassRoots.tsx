import * as React from 'react'
import { Link } from "gatsby"
import ArrowRight16 from "../../Assests/Svg-Icons/arrow-right-16.svg"
import scGrass from "../../Assests/sc-grass.webp"

const GrassRoots = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={scGrass} className='imgStyle' />
        </div>
        <div className="col-md-6">
          <div className="body-content">
            <h4>Grassroots Efforts</h4>
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
              to="/sol-grassroots"
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

export default GrassRoots
