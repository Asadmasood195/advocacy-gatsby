import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <a href="/">Home</a> / Contact Us
        </div>
      </div>

      <div id="main">
        <div id="contact">
          <div id="title-top">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-4">
                  <div className="text-center ">
                    <h2>Contact Us</h2>
                    <p>
                      Guiding Advocates Toward the Right Decision Makers.{" "}
                      <span>Get in touch</span> with us today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content">
            <div className="container">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      Please fill out the form below, and we will get back to
                      you as soon as possible.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <form method="POST">
                      <div className="mb-3">
                        <label htmlFor="txt-name" className="form-label">
                          Name <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="txt-name"
                          placeholder="Put your name here"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt-phone" className="form-label">
                          Phone Number <span className="red">*</span>
                        </label>
                        <input
                          type="phone"
                          className="form-control"
                          id="txt-phone"
                          placeholder="Put your phone number here"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt-email" className="form-label">
                          Email <span className="red">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="txt-email"
                          placeholder="Put your email here"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt-message" className="form-label">
                          Message <span className="red">*</span>{" "}
                        </label>
                        <textarea
                          className="form-control"
                          id="txt-message"
                          rows={3}
                          placeholder="Put your message here"
                        ></textarea>
                      </div>
                      <div className="mb-3 align-right">
                        <button type="submit" className="btn btn-primary">
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <div className="box">
                      <b>Capitol Enquiry</b>
                      <br />
                      <br />
                      1034 Emerald Bay Road, #435
                      <br />
                      South Lake Tahoe, CA 96150
                      <br />
                      <br />
                      <b>PHONE: (916) 302-0000</b>
                      <br />
                      <b>FAX:(916) 642-8220</b>
                      <br />
                      <b>E-MAIL: info@advocacy.biz</b>
                      <br />
                      <br />
                      For further assistance with an existing order please email{" "}
                      <Link to="mailto:orders@advocacy.biz">
                        orders@advocacy.biz
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
