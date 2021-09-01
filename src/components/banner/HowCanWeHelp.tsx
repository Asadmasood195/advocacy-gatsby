import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

import BackgroundImg from "../../assests/bg-slide1.jpg"
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const HowCanWeHelp = () => {
  return (
    <div id="homepage">
      <div id="how-we-can-help">
        <div className="container">
          <div id="history-slider" className="ncdr-posts">
            <Carousel
              className="history-carousel"
              responsive={responsive}
              showDots={false}
              arrows={false}
              infinite={true}
            >
              <section>
                <div className="ncdr-post-list li-history-portfolio-slider">
                  <div
                    style={{
                      width: "300px",
                      background: "#273140",
                      color: "#fff",
                      textAlign: "center",
                    }}
                    className="slide-content"
                  >
                    <StaticImage src="../../assests/49.svg" />
                    <h4>Government Directory Expertise & Innovation</h4>
                  </div>
                </div>
              </section>

              <section>
                <div className="ncdr-post-list li-history-portfolio-slider">
                  <div
                    style={{
                      backgroundImage: `url(${BackgroundImg})`,
                      backgroundSize: "cover",
                      width: "600px",
                    }}
                    className="slide-content"
                  >
                    <div className="abs">
                      <h3>1973</h3>
                      <p>
                        Since 1973, Capitol Enquiry has produced the Pocket
                        Directory of the California State Legislator (aka the
                        “Little Red Book”). Customers of ours include Apple,
                        Google, Chase Bank, and over 15,000 others.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="ncdr-post-list li-history-portfolio-slider">
                  <div
                    style={{
                      backgroundImage: `url(${BackgroundImg})`,
                      backgroundSize: "auto 100%",
                      width: "600px",
                    }}
                    className="slide-content"
                  >
                    <div className="abs">
                      <h3>1974</h3>
                      <p>
                        Our products have enabled the advocacy efforts for an
                        entire generation of advocacy professionals. Customers
                        tell us routinely how they are able to get more done in
                        less time with Capitol Enquiry products.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Carousel>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="content">
                <h3>How can we help you?</h3>
                <p>
                  We're ready to lead you into the future.
                  <span>Get in touch</span> with us
                </p>
                <Link to="/contact" className="btn btn-outline-primary">
                  Contact Us
                  <ArrowRight16 className="svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowCanWeHelp
