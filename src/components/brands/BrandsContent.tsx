import { Link } from 'gatsby';
import * as React from 'react'
import brGovbuddy from "../../Assests/br-govbuddy.webp";
import scGov from "../../Assests/sc-gov.webp";
import scPolicyguru from "../../Assests/sc-policyguru.webp";
import brPolicy from "../../Assests/br-policy.webp";
import brPritchard from "../../Assests/br-pritchard.webp";
import scPritchard from "../../Assests/sc-pritchard.webp";
import scCapitol from "../../Assests/sc-capitol.webp";
import brCapitol from "../../Assests/br-capitol.webp";
import ArrowRight16 from "../../Assests/Svg-Icons/arrow-right-16.svg"

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
          <img src={scGov} className="imgStyle" alt="sc-gov" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <img src={scPolicyguru} className="imgStyle" alt="sc-policyguru" />
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
          <img src={scPritchard} className="imgStyle" alt="sc-pritchard" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <img src={scCapitol} className="imgStyle" alt="sc-capitol" />
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
