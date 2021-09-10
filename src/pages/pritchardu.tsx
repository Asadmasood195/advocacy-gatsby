import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArrowRight16 from "../assests/octicons/arrow-right-16.svg"
import Banner from "../components/banner/Banner"

const PritchardU = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
          PritchardU
        </div>
      </div>

      <div id="main">
        <div id="sub-products" className="sub-pritchardu">
          <Banner 
          bg="bg-pritchardu"
          title="PritchardU"
          description="Nothing beats an education from experts. At PritchardU,
          professionals learn new skills and earn certifications.
          Each student who successfully completes a PritchardU
          course earns a certificate of Lobbying Science."
          />
          <div id="content">
            <div className="container">
              <div className="list-of-courses">
                <div className="row title-top">
                  <div className="col-md-6">
                    <h3>All Courses</h3>
                    <p>
                      Our courses offer a good compromise between the continuous
                      assessment favoured by some universities and the emphasis
                      placed on final exams by others.
                    </p>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    <div className="row align-items-center">
                      <div className="col-md-3 img">
                        <StaticImage src="../assests/pritchard-lessons.png" alt="lessons" />
                      </div>
                      <div className="col-md-5">
                        <div className="item-content">
                          <div className="title">
                            Lobbying 101: The Transformative Power of Citizen
                            Advocacy
                          </div>
                          <div className="author">
                            by <b>Ray Lebov</b>
                          </div>
                          <div className="ratings">
                            <div className="row">
                              <div className="col-md-3">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                              </div>
                              <div className="col">(435 Rating)</div>
                            </div>
                          </div>
                          <div className="price">$600</div>
                          <div className="badge">BEST SELLER</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="author-detail">
                          <div className="row align-items-center">
                            <div className="col-md-4 img">
                              <StaticImage src="../assests/pritchardu-author.png" alt="author" />
                            </div>
                            <div className="col-md-8">
                              <h6>Ray Lebov</h6>
                              <p>
                                Ray LeBov is a longtime Capitol Lobbyist who
                                also teaches other people how to get into the
                                business with his Capitol Seminars lobbying
                                classes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <StaticImage src="../assests/pritchardu-sample1.png" alt="sample" />
                    <Link to="#" className="morepr">
                      MORE COURSES COMING SOON
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="how-we-can-help">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-4 ">
                <div className="content">
                  <h3>How can we help you?</h3>
                  <p>
                    We're ready to lead you into the future.{" "}
                    <span>Get in touch</span> with us
                  </p>
                  <Link to="/contact" className="btn btn-outline-primary">
                    Contact Us{" "}
                    <ArrowRight16
                      className="svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </Layout>
  )
}

export default PritchardU
