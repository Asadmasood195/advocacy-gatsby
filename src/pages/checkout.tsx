import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"
import CrdVisa from "../assests/octicons/crd-visa.svg"
import CrdMaster from "../assests/octicons/crd-master.svg"
import CrdAe from "../assests/octicons/crd-ae.svg"
import CrdDisc from "../assests/octicons/crd-disc.svg"
import CrdDc from "../assests/octicons/crd-dc.svg"
import CrdJcb from "../assests/octicons/crd-jcb.svg"
import CardEcheck from "../assests/octicons/card-echeck.svg"

const Checkout = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
          Checkout
        </div>
      </div>

      <div id="main">
        <div id="checkout">
          <div id="content">
            <form method="post">
              <div className="container">
                <div className="row" id="return-customer">
                  <div className="col-md-12">
                    <form method="post">
                      <p className="box1">
                        Returning customer?{" "}
                        <Link to="#" className="ch-show-login">
                          Click here to login
                        </Link>
                      </p>
                      <div
                        className="card"
                        id="login-form"
                        style={{ display: "none" }}
                      >
                        <div className="card-body">
                          <p>
                            If you have shopped with us before, please enter
                            your details below. If you are a new customer,
                            please proceed to the Billing section.
                          </p>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="ch-username">
                                  Username or email{" "}
                                  <span className="red">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ch-username"
                                  aria-describedby="emailHelp"
                                  placeholder="Your Username or email"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="ch-password">
                                  Password <span className="red">*</span>
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="ch-password"
                                  aria-describedby="emailHelp"
                                  placeholder="Your Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-2">
                              <button type="submit" className="btn btn-primary">
                                Log In
                              </button>
                            </div>
                            <div className="col-lg-10">
                              <div className="form-group">
                                <label htmlFor="ch-remember-me">
                                  <input
                                    type="checkbox"
                                    id="ch-remember-me"
                                    placeholder=""
                                  />{" "}
                                  Remember Me
                                </label>
                              </div>
                            </div>
                          </div>
                          <p>
                            <Link to="/forgot">Lost your password</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row" id="billing-details">
                  <div className="col-md-6">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="ch-first-name">
                            First Name <span className="red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ch-first-name"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="ch-last-name">
                            Last Name <span className="red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ch-last-name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-company-name">
                        Company name (Optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-company-name"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-country">
                        Country/Region <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-country"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-street-addr">
                        Street Address <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-street-addr"
                        placeholder=""
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="ch-street-addr2"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-town">
                        Town/City <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-town"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-state">
                        State <span className="red">*</span>
                      </label>
                      <select className="form-control" id="ch-state">
                        <option>California</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-zip">
                        Zip <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-zip"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-phone">
                        Phone <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-phone"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-email">
                        Email Address <span className="red">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="ch-email"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-create-acc">
                        <input
                          type="checkbox"
                          id="ch-create-acc"
                          placeholder=""
                        />{" "}
                        Create an Account ?
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="ch-diff-add">
                        <h3>
                          <input
                            type="checkbox"
                            id="ch-diff-add"
                            placeholder=""
                          />{" "}
                          Ship to different Address
                        </h3>
                      </label>
                    </div>
                    <div id="shipping-address" style={{ display: "none" }}>
                      <p>
                        <Link to="#" className="btn btn-primary">
                          Copy and Use Billing Details
                        </Link>
                      </p>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="ch-first-name2">
                              First Name <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ch-first-name2"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="ch-last-name2">
                              Last Name <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ch-last-name2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-company-name2">
                          Company name (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-company-name2"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-country2">
                          Country/Region <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-country2"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-street-addr_">
                          Street Address <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-street-addr_"
                          placeholder=""
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="ch-street-addr3"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-town2">
                          Town/City <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-town2"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-state2">
                          State <span className="red">*</span>
                        </label>
                        <select className="form-control" id="ch-state2">
                          <option>California</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-zip2">
                          Zip <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-zip2"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div id="additional-fields1">
                      <div className="form-group">
                        <label htmlFor="ch-order-notes">
                          Order Notes (Optional){" "}
                        </label>
                        <textarea
                          className="form-control"
                          id="ch-order-notes"
                          placeholder="Notes about your order e.g special notes for delivery"
                        ></textarea>
                      </div>
                      <div id="customer-fields">
                        <label>Customer Fields</label>
                        <div className="card">
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-sales-tax">
                                Sales Tax (Optional){" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-sales-tax"
                                placeholder="Sales Tax"
                              />
                            </div>
                            <div className="form-group">
                              <p>
                                if you are exempt from state sales tax, please
                                enter your state-issued tax exempt number here
                              </p>
                              <label htmlFor="ch-std-odr">
                                <input type="checkbox" id="ch-std-odr" /> Make
                                this a standing order. We will contact you to
                                confirm prior to shipping. (optional)
                              </label>
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-cust-num">
                                Customer Number (optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-cust-num"
                                placeholder="Customer Number"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-po-num">
                                PO Number (optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-po-num"
                                placeholder="PO Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" id="summary">
                  <div className="col-md-12">
                    <h4>Your Order</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>UNIT PRICE</th>
                          <th>QTY</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2021 State Agency Directory Digital Edition </td>
                          <td>$299.95</td>
                          <td>1</td>
                          <td>$299.95</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2}></td>
                          <td>
                            <b>Sub Total</b>
                          </td>
                          <td className="align-right">
                            <b>$299.95</b>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}></td>
                          <td>
                            <b>Shipping</b>
                          </td>
                          <td className="align-right">
                            <b>$3.00</b>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}></td>
                          <td>
                            <b>Tax</b>
                          </td>
                          <td className="align-right">
                            <b>$23.25</b>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}></td>
                          <td>
                            <b>Grand Total</b>
                          </td>
                          <td className="align-right">
                            <b>$326.20</b>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}>
                            <div className="some-notes1">
                              <p>
                                Payment will be split as you have subscription
                                product in Order.
                              </p>
                              <p>Recurring Payment = $0.00</p>
                              <p>Non-Recurring Payment = $326.20</p>
                              <p>Total Amount = $326.20</p>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="row" id="choose-payment">
                  <div className="col-md-12">
                    <div className="box2">
                      <div className="form-group">
                        <label htmlFor="ch-creditcard">
                          <input
                            type="radio"
                            id="ch-creditcard"
                            name="payment"
                            checked
                          />{" "}
                          Credit Card <br />
                        </label>
                        <div className="card-logo">
                          <CrdVisa  className="svg" />
                          <CrdMaster className="svg" />
                          <CrdAe className="svg" />
                          <CrdDisc className="svg" />
                          <CrdDc className="svg" />
                          <CrdJcb className="svg" />
                        </div>

                        <div className="card">
                          <p>Pay securely using your credit card.</p>
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-card-num">
                                Card Number <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-card-num"
                                placeholder="**** **** **** ****"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-expiration">
                                Expiration (MM/YY){" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-expiration"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-csc">
                                Card Security Code{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-csc"
                                placeholder="CSC"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-echeck">
                          <input type="radio" id="ch-echeck" name="payment" />{" "}
                          eCheck{" "}
                          <span className="card-logo">
                            <CardEcheck />
                          </span>
                        </label>
                        <div className="card" style={{ display: "none" }}>
                          <p>Pay securely using your credit card.</p>
                          <p className="info-check" style={{ display: "none" }}>
                            <StaticImage src="../assets/ech-info.webp" />
                          </p>
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-routing-num">
                                Routing Number{" "}
                                <ArrowRight16 className="show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-routing-num"
                                placeholder="*********"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-account-num">
                                Account Number{" "}
                                <ArrowRight16 className=" show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-account-num"
                                placeholder=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-chk-num">
                                Account Type{" "}
                                <ArrowRight16 className=" show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <select className="form-control" id="ch-chk-num">
                                <option>Checking</option>
                                <option>Saving</option>
                              </select>
                            </div>
                          </div>
                          <p>
                            By clicking the button below, I authorize Capitol
                            Enquiry to charge my bank account on August 12, 2021
                            for the amount of $326.20.
                          </p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-sendinv">
                          <input type="radio" id="ch-sendinv" name="payment" />{" "}
                          Send Invoice
                        </label>
                        <div className="card" style={{ display: "none" }}>
                          <div className="card-body">Payment Information</div>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group">
                        <label htmlFor="ch-accept">
                          <input type="checkbox" id="ch-accept" /> I have read
                          and accept the{" "}
                          <Link to="/terms">terms, conditions</Link> and{" "}
                          <Link to="/privacy">privacy policy</Link> as well as{" "}
                          <Link to="https://www.govbuddy.com/about/tos/">
                            Govbuddy terms, conditions
                          </Link>{" "}
                          and{" "}
                          <Link to="https://www.govbuddy.com/about/privacy/">
                            Govbuddy privacy policy
                          </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
