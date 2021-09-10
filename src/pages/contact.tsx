import * as React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/ContactForm"
import CapitolEnquiry from "../components/contact/CapitolEnquiry"

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
                    <ContactForm />
                  </div>
                  <div className="col-md-4">
                    <CapitolEnquiry />
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
