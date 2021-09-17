import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../Assests/logo.svg"

const Footer = () => {
  return (
    <footer id="footer-menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <div className="col-footer">
              <div className="logo-footer">
                <img src={Logo} alt="" />
              </div>
              <p>
                Empowering Advocacy Professionals to Coordinate Strategic
                Initiatives & Influence Key Decisions.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-footer">
              <ul className="menu">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/brands">Our Brands</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/legal">Legal</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-footer no-border">
              <h3>Newsletter Subscription</h3>
              <p>
                Stay connected to the most critical events of the day with
                Advocacy Insiders News.
              </p>
              <form className="row row-cols-md-auto g-3 align-items-center">
                <div className="col-md-8">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="inlineFormInputGroupUsername"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div className="col-md-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-text text-center">
              Copyright © 2021 · Capitol Enquiry ·
              <span>Proudly Serving Sacramento Since 1973</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
