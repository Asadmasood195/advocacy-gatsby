import * as React from "react"
import { Link } from "gatsby"

import ProdPrint from "../../assests/prod-printed.webp"
import ProdDigital from "../../assests/prod-digital.webp"
import ProdPrit from "../../assests/prod-prit.webp"
import ProdMap from "../../assests/prod-maps.webp"
import ProdGov from "../../assests/prod-govbuddy.webp"
import ProdPolicy from "../../assests/prod-policy.webp"

const ProductCategories = () => {
  return (
    <div id="homepage">
      <div id="product-categories">
        <div className="container">
          <div className="row">
            <h3 className="col-md-12 text-center">Product Categories</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdPrint} alt="Prod Print" />
                </div>
                <h4 className="prod-title">Printed Directories</h4>
                <div className="prod-desc">
                  The Printed Directories you know and love.
                </div>
                <Link
                  to="/printed-directory"
                  className="btn btn-primary btn-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdDigital} alt="Prod Digital" />
                </div>
                <h4 className="prod-title">Digital Editions</h4>
                <div className="prod-desc">
                  Digital versions of our Printed Directories.
                </div>
                <Link
                  to="/digital-editions"
                  className="btn btn-primary btn-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdPrit} alt="Prod Prit" />
                </div>
                <h4 className="prod-title">PritchardU</h4>
                <div className="prod-desc">
                  Take our Legislative Pathways & Ethical Leadership course.
                </div>
                <Link to="/pritchardu" className="btn btn-primary btn-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdMap} alt="Prod Map" />
                </div>
                <h4 className="prod-title">Maps</h4>
                <div className="prod-desc">
                  Maps of Legislative Districts in book form or sized to hang on
                  a wall
                </div>
                <Link to="/maps" className="btn btn-primary btn-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdGov} alt="Prod GovBuddy" />
                </div>
                <h4 className="prod-title">GovBuddy</h4>
                <div className="prod-desc">
                  Empowering Advocacy with the most up to date state level
                  information.
                </div>
                <Link to="/govbuddy" className="btn btn-primary btn-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-prod-cat">
                <div className="prod-img">
                  <img src={ProdPolicy} alt="Prod Policy" />
                </div>
                <h4 className="prod-title">PolicyGuru</h4>
                <div className="prod-desc">
                  Unparalleled city, county, and school district information.
                </div>
                <Link to="/policy-guru" className="btn btn-primary btn-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategories
