import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

import GovBuddyBanner from "../../assests/slide-govbuddy.jpg"
import PolicyBanner from "../../assests/slide-policy.jpg"
import PrintedBanner from "../../assests/slide-printed.jpg"
import PritBanner from "../../assests/slide-prit.jpg"
import DigitalBanner from "../../assests/slide-digital.jpg"
import MapBanner from "../../assests/slide-map.jpg"
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const SliderBanner = () => {
  return (
    <>
      <div id="main">
        <div id="homepage">
          <div id="banner" className="banner-homepage">
            <Carousel
              responsive={responsive}
              showDots={true}
              infinite={true}
              draggable={true}
              autoPlaySpeed={5000}
              // autoPlay
              arrows={false}
              swipeable
              keyBoardControl={true}
              customTransition="all 1s ease"
            >
              <section>
                <div
                  style={{ backgroundImage: `url(${GovBuddyBanner})` }}
                  className="slider-homepage"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>
                          GovBuddy: California Legislature Web and Mobile Access
                        </h2>
                        <p>
                          All the legislative information in our Pocket
                          Directory of the California Legislature, continuously
                          updated throughout the year.
                        </p>
                        <div className="details">
                          <span className="price">$119.95 </span>
                          <span className="priceinfo">
                            a Year Per Individual
                          </span>
                        </div>
                        <Link to="/govbuddy" className="btn btn-primary">
                          BUY NOW
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div className="col-md-6 text-center">
                        <StaticImage src="../../assests/sl-govbuddy.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  style={{ backgroundImage: `url(${PolicyBanner})` }}
                  className="slider-homepage"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>Empowering Local Advocacy</h2>
                        <p>
                          PolicyGuru is a searchable database of local
                          government across California. It's ideal for advocacy
                          and campaign work.
                        </p>
                        <div className="details">
                          <span className="price">AVAILABLE NOW</span>
                          <span className="priceinfo"></span>
                        </div>
                        <Link to="/policyguru" className="btn btn-primary">
                          LEARN MORE
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div className="col-md-6 text-center">
                        <StaticImage src="../../assests/sl-policy.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  style={{ backgroundImage: `url(${PrintedBanner})` }}
                  className="slider-homepage printed-dir"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>Printed Directories</h2>
                        <p>
                          It all started with the "Little Red Book" back in 1973
                          and continues to this day. Don't miss this years
                          pocket directory for the California State Legislature
                          or one of our other highly sought after printed
                          directories.
                        </p>
                        <div className="details">
                          <span className="price">$17.95 </span>
                          <span className="priceinfo">
                            Pocket Directory of CA Legislature
                          </span>
                        </div>
                        <Link to="/govbuddy" className="btn btn-primary">
                          BUY NOW
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div className="col-md-6 align-right">
                        <StaticImage src="../../assests/sl-printed.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  style={{ backgroundImage: ` url(${PritBanner})` }}
                  className="slider-homepage printed-dir"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>Empowering Advocates with courses from experts.</h2>
                        <p>
                          At PritchardU, professionals learn new skills and earn
                          certifications. Each student who successfully
                          completes a PritchardU course earns a certificate of
                          completion.
                        </p>
                        <div className="details">
                          <span className="price">$600.00 </span>
                          <span className="priceinfo">
                            Per Student to Enroll
                          </span>
                        </div>
                        <Link to="/pritchardu" className="btn btn-primary">
                          LEARN MORE
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div
                        className="col-md-6"
                        style={{ padding: "100px 0px" }}
                      >
                        <StaticImage
                          src="../../assests/sl-prit.png"
                          style={{ height: "auto", width: "500px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  style={{ backgroundImage: `url(${DigitalBanner})` }}
                  className="slider-homepage printed-dir"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>
                          Digital Directory
                          <br />
                          Editions
                        </h2>
                        <p>
                          All Printed Directory information on Assembly and
                          Senate members on USB Flash Drive, with staff and
                          committees. Simple solutions for smart spaces that
                          engage people.
                        </p>
                        <div className="details">
                          <span className="price">$49.95 </span>
                          <span className="priceinfo">
                            Starting price with various versions
                          </span>
                        </div>
                        <Link to="/govbuddy" className="btn btn-primary">
                          LEARN MORE
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div
                        className="col-md-6 text-center"
                        style={{ padding: "50px 0px" }}
                      >
                        <StaticImage
                          src="../../assests/sl-digital.png"
                          style={{ height: "400px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  className="slider-homepage printed-dir"
                  style={{ backgroundImage: `url(${MapBanner})` }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>
                          Digital Directory
                          <br />
                          Editions
                        </h2>
                        <p>
                          All Printed Directory information on Assembly and
                          Senate members on USB Flash Drive, with staff and
                          committees. Simple solutions for smart spaces that
                          engage people.
                        </p>
                        <div className="details">
                          <span className="price">$49.95 </span>
                          <span className="priceinfo">
                            Starting price with various versions
                          </span>
                        </div>
                        <Link to="/govbuddy" className="btn btn-primary">
                          LEARN MORE
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      <div className="col-md-6 align-right">
                        <StaticImage src="../../assests/sl-maps.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
export default SliderBanner
