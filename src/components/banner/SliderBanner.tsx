import * as React from "react"
import { Link } from "gatsby"
import Carousel from "react-multi-carousel"
import GovBuddyBanner from "../../Assests/slide-govbuddy.webp"
import PolicyBanner from "../../Assests/slide-policy.webp"
import PrintedBanner from "../../Assests/slide-printed.webp"
import PritBanner from "../../Assests/slide-prit.webp"
import DigitalBanner from "../../Assests/slide-digital.webp"
import MapBanner from "../../Assests/slide-map.webp"
import ArrowRight16 from "../../Assests/Svg-Icons/arrow-right-16.svg"
import SlGovBuddy from "../../Assests/sl-govbuddy.png"
import SlPolicy from "../../Assests/sl-policy.png"
import SlPrinted from "../../Assests/sl-printed.png"
import SlPrit from "../../Assests/sl-prit.png"
import SlDigital from "../../Assests/sl-digital.png"
import SlMaps from "../../Assests/sl-maps.png"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
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
                      {!isMobile ? (
                        <div className="col-md-6 text-center">
                          <img src={SlGovBuddy} alt="SlGovBuddy" />
                        </div>
                      ) : (
                        ""
                      )}
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
                      {!isMobile ? (
                        <div className="col-md-6 text-center">
                          <img src={SlPolicy} alt="Sl Policy" />
                        </div>
                      ) : (
                        ""
                      )}
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
                      {!isMobile ? (
                        <div className="col-md-6 align-right">
                          <img src={SlPrinted} alt="Sl Print" />
                        </div>
                      ) : (
                        ""
                      )}
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
                      <div className="col-md-6 pr-2">
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
                          BUY NOW
                          <ArrowRight16 className="svg" />
                        </Link>
                      </div>
                      {!isMobile ? (
                        <div className="col-md-6 text-center">
                          <img
                            src={SlPrit}
                            alt="SlGovBuddy"
                            className="imgStyle"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div
                  style={{
                    backgroundImage: `url(${MapBanner})`,
                    width: "100%",
                  }}
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
                      {!isMobile ? (
                        <div
                          className="col-md-6 text-center"
                          style={{ padding: "50px 0px" }}
                        >
                          <img src={SlDigital} style={{ height: "400px" }} />
                        </div>
                      ) : (
                        ""
                      )}
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
                      {!isMobile ? (
                        <div className="col-md-6 align-right">
                          <img src={SlMaps} alt="Sl Maps" />
                        </div>
                      ) : (
                        ""
                      )}
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
