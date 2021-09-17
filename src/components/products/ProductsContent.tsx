import * as React from 'react'
import { Link } from "gatsby"
import ArrowRight16 from "../../Assests/Svg-Icons/arrow-right-16.svg"
import Govbuddy from "../../Assests/br-govbuddy.webp"
import Government from "../../Assests/sc-gov.webp"
import Printed from "../../Assests/sc-printed.webp"
import Digital from "../../Assests/sc-digital.webp"
import Maps from "../../Assests/sc-maps.webp"
import Policy from "../../Assests/br-policy.webp"
import Policy2 from "../../Assests/sc-policy2.webp"
import Prit from "../../Assests/sc-prit.webp"
import pritchard from "../../Assests/br-pritchard.webp"

const ProductsContent = () => {
  return (
    <>
      <div id="content">
        <div className="row">
          <div className="col-md-6">
            <div className="body-content">
              <img src={Govbuddy} alt="" className="logo-icon imgStyle" />
              <h4>California Legislature: Desktop Access with App</h4>
              <p>
                All the legislative information in our Pocket Directory of
                the California Legislature, continuously updated throughout
                the year.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Government} alt="" className='imgStyle' />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={Printed} alt="" className='imgStyle' />
          </div>
          <div className="col-md-6">
            <div className="body-content">
              <br />
              <br />
              <h4>Printed Directory</h4>
              <p>
                At PritchardU, professionals learn new skills and earn
                certifications. Each student who successfully completes a
                PritchardU course earns a certificate of completion.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="body-content">
              <br />
              <br />
              <h4>Digital Directory Editions</h4>
              <p>
                All Pocket Directory information on Assembly and Senate
                members on USB Flash Drive, with staff and committees.
                Simple solutions for smart spaces that engage people.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products
                <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Digital} alt="" className='imgStyle' />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 p-5">
            <img src={Maps} alt="" className='imgStyle' />
          </div>
          <div className="col-md-6">
            <div className="body-content">
              <br />
              <br />
              <h4>Maps</h4>
              <p>
                All Pocket Directory information on Assembly and Senate
                members on USB Flash Drive, with staff and committees.
                Simple solutions for smart spaces that engage people.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="body-content">
              <img src={Policy} className="logo-icon imgStyle" />
              <h4>Comprehensive Guide to City and County Officials</h4>
              <p>
                PolicyGuru is a searchable database of local government
                across California. It's ideal for advocacy and campaign
                work.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Policy2} alt="" className='imgStyle' />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={Prit} alt="" className='imgStyle' />
          </div>
          <div className="col-md-6">
            <div className="body-content">
              <br />
              <img src={pritchard} className="logo-icon imgStyle" alt="" />
              <h4>Industry leading educational courses</h4>
              <p>
                Online educational courses from experts on key areas of
                Legislative, Budget and Regulatory Advocacy; Media
                Strategies; and Lobbying the Administration.
              </p>

              <Link to="/shop" className="btn btn-outline-primary">
                View All Products <ArrowRight16 className="svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsContent
