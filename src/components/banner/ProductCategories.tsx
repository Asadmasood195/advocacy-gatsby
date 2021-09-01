import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
                  <StaticImage src="../../assests/prod-printed.webp" />
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
                  <StaticImage src="../../assests/prod-digital.webp" />
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
                  <StaticImage src="../../assests/prod-prit.webp" />
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
                  <StaticImage src="../../assests/prod-maps.webp" />
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
                  <StaticImage src="../../assests/prod-govbuddy.webp" />
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
                  <StaticImage src="../../assests/prod-policy.webp" />
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
