import { Link } from 'gatsby';
import * as React from 'react'
import brGovbuddy from "../../assests/br-govbuddy.webp";
import scGov from "../../assests/sc-gov.webp";
import scPolicyguru from "../../assests/sc-policyguru.webp";
import brPolicy from "../../assests/br-policy.webp";
import brPritchard from "../../assests/br-pritchard.webp";
import scPritchard from "../../assests/sc-pritchard.webp";
import scCapitol from "../../assests/sc-capitol.webp";
import brCapitol from "../../assests/br-capitol.webp";
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"

const BrandsContent = () => {
    return (
        <div id="content">
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <img
                    src={brGovbuddy} alt="br-govbuddy"
                    className="logo-icon"
                  />
                  <h4>
                    Your Comprehensive guide to California's State Legislature
                  </h4>
                  <p>
                    GovBuddy receives over 2,000 updates a year to the contact
                    information we store. It is the most reliable and
                    trustworthy source for data on the California Legislators,
                    their staff, Committees, and their staff.
                  </p>

                  <Link
                    to="https://www.govbuddy.com/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <img src={scGov} alt="sc-gov" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <img src={scPolicyguru} alt="sc-policyguru" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <img
                    src={brPolicy} alt="br-policy"
                    className="logo-icon"
                  />
                  <h4>Comprehensive Guide to City and County Officials</h4>
                  <p>
                    PolicyGuru is a searchable database of local government
                    across California. It's ideal for advocacy and campaign
                    work.
                  </p>

                  <Link
                    to="https://www.policyguru.net/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="body-content">
                  <br />
                  <img
                    src={brPritchard} alt="br-pritchard"
                    className="logo-icon"
                  />
                  <h4>Industry leading educational courses</h4>
                  <p>
                    Online educational courses from experts on key areas of
                    Legislative, Budget and Regulatory Advocacy; Media
                    Strategies; and Lobbying the Administration.
                  </p>

                  <Link
                    to="http://pritchardu.com/"
                    className="btn btn-outline-primary"
                  >
                    Go to website
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <img src={scPritchard} alt="sc-pritchard" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <img src={scCapitol} alt="sc-capitol" />
              </div>
              <div className="col-md-6">
                <div className="body-content">
                  <img
                    src={brCapitol} alt="br-capitol"
                    className="logo-icon"
                  />
                  <h4>Books, Maps, and Digital Products</h4>
                  <p>
                    Our famous "Little Red Book", the Printed Directory of the
                    California State Legislature, is still in print after almost
                    50 years. We have since introduced technology products that
                    are continuously updated throughout the year.
                  </p>

                  <Link to="/contact" className="btn btn-outline-primary">
                    View Capitol Enquiry Products{" "}
                    <ArrowRight16 className="svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
    )
}

export default BrandsContent
