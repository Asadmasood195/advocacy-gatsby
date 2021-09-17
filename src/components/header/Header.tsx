import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import MainLogo from "../../Assests/logo.svg"
import Govbuddy from "../../Assests/mnu-govbuddy.webp"
import Printed from "../../Assests/mnu-printed.webp"
import Maps from "../../Assests/mnu-maps.webp"
import Digital from "../../Assests/mnu-digital.webp"
import PolicyGuru from "../../Assests/mnu-policyguru.webp"
import Pritchard from "../../Assests/mnu-prit.webp"
import CartIcon from "../../Assests/Svg-Icons/cart.svg"
import Search from "../../Assests/Svg-Icons/search-16.svg"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const ProductsList = [
  {
    id: "1",
    title: "Govbuddy",
    link: "/govbuddy",
  },
  {
    id: "2",
    title: "Printed Directory",
    link: "/printed-directory",
  },
  {
    id: "3",
    title: "Maps",
    link: "/maps",
  },
  {
    id: "4",
    title: "Digital Editions",
    link: "/digital-editions",
  },
  {
    id: "5",
    title: "Policy Guru",
    link: "/policy-guru",
  },
  {
    id: "6",
    title: "Pritchard U",
    link: "/pritchardu",
  },
]

const Solutions = [
  { title: "Government", link: "/sol-government" },
  { title: "Trade Assoications", link: "/sol-trade" },
  { title: " Non Profits", link: "/sol-nonpro" },
  { title: "Lobbyist", link: "/sol-lobbyst" },
  { title: "Grassroots Efforts", link: "/sol-grassroots" },
  { title: "Developers", link: "/sol-developers" },
]

const Header = ({ children }: any) => {
  const [imgSrc, setImgSrc] = React.useState("1")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMobile ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className="align-center">
              <div className="col-3">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </div>
              <div className="col-6">
                <Navbar.Brand
                  className="m-auto"
                  style={{ paddingRight: "30px" }}
                >
                  <Link to="/" className="d-flex align-items-center">
                    <img
                      src={MainLogo}
                      style={{ marginTop: "20px" }}
                      alt="Company Logo"
                      width="100%"
                      height="100%"
                    />
                  </Link>
                </Navbar.Brand>
              </div>

              <div className="col-3">
                <Nav.Item id="mobileHeader">
                  <Nav.Item className="text-end float-right" id="accounts">
                    <Link to="/cart" className="btn cart-icon">
                      <span
                        className="badge badge-warning"
                        id="lblCartCountMobile"
                      >
                        19
                      </span>
                      <CartIcon />
                    </Link>
                  </Nav.Item>
                </Nav.Item>
              </div>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                      {ProductsList?.map(product => (
                        <NavDropdown.Item key={product.id}>
                          <Link className="dropdown-item" to={product.link}>
                            {product.title}
                          </Link>
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </Nav.Link>

                  <Nav.Link>
                    <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                      {Solutions?.map((solution, index) => (
                        <NavDropdown.Item key={index}>
                          <Link className="dropdown-item" to={solution.link}>
                            {solution.title}
                          </Link>
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </Nav.Link>

                  <Nav.Link>
                    <Link
                      className="nav-link"
                      to="/about"
                      role="button"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="nav-link"
                      to="/brands"
                      role="button"
                      aria-expanded="false"
                    >
                      Our Brands
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="nav-link"
                      to="/contact"
                      role="button"
                      aria-expanded="false"
                    >
                      Contact Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="nav-link"
                      to="/register"
                      role="button"
                      aria-expanded="false"
                    >
                      Register
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      className="nav-link"
                      to="/login"
                      role="button"
                      aria-expanded="false"
                    >
                      Login
                    </Link>
                  </Nav.Link>
                </Nav>
                <form id="search" action="search" method="GET">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Product Here..."
                      aria-label="Search Product Here..."
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="button-addon2"
                    >
                      <Search />
                    </button>
                  </div>
                </form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <header className="border-bottom" id="header">
            <div
              className="
      d-flex
      flex-wrap
      align-items-center
      justify-content-center justify-content-md-between
      container-fluid
      navbar navbar-expand-lg
    "
            >
              <Link to="/" className="d-flex align-items-center">
                <img src={MainLogo} alt="Company Logo" />
              </Link>
              <div className="col-md-8">
                <div
                  className="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-md-between
        "
                >
                  <div className="col-md-6">
                    <form id="search" action="search" method="GET">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Product Here..."
                          aria-label="Search Product Here..."
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn btn-primary"
                          type="submit"
                          id="button-addon2"
                        >
                          <Search />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-5 text-end" id="accounts">
                    <Link to="/cart" className="btn cart-icon">
                      <CartIcon />
                      <span className="badge badge-warning" id="lblCartCount">
                        19
                      </span>
                    </Link>
                    <Link to="/register" className="btn me-2">
                      Register
                    </Link>
                    <Link to="/login" className="btn btn-primary btn-login">
                      Login
                    </Link>
                  </div>
                </div>

                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDarkDropdown"
                  >
                    <ul className="nav navbar-nav">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle menu-main-product"
                          to="/products"
                          id="navbarDarkDropdownMenuLink"
                          // role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Products
                        </Link>

                        <div style={{ display: "flex" }}>
                          <ul
                            className="dropdown-menu menu-products"
                            aria-labelledby="navbarDarkDropdownMenuLink"
                          >
                            <div>
                              {ProductsList?.map((product, index) => (
                                <li
                                  key={index}
                                  className="productList"
                                  onMouseOver={() => setImgSrc(product.id)}
                                  id={product.id}
                                >
                                  <Link
                                    className="dropdown-item"
                                    to={product.link}
                                  >
                                    {product.title}
                                  </Link>
                                </li>
                              ))}
                            </div>

                            <div className="product-image">
                              {imgSrc === "1" && (
                                <img
                                  src={Govbuddy}
                                  alt="Gov buddy banner"
                                  height={254}
                                />
                              )}
                              {imgSrc === "2" && (
                                <img
                                  src={Printed}
                                  alt="Printed Banner"
                                  height={254}
                                />
                              )}

                              {imgSrc === "3" && (
                                <img
                                  src={Maps}
                                  alt="Maps Banner"
                                  height={254}
                                />
                              )}

                              {imgSrc === "4" && (
                                <img
                                  src={Digital}
                                  alt="Digital Banner"
                                  height={254}
                                />
                              )}

                              {imgSrc === "5" && (
                                <img
                                  src={PolicyGuru}
                                  alt="Policy Guru Banner"
                                  height={254}
                                />
                              )}

                              {imgSrc === "6" && (
                                <img
                                  src={Pritchard}
                                  alt="Pritchard Banner"
                                  height={254}
                                />
                              )}
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="/solutions"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Solutions
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          {Solutions?.map((solution, index) => (
                            <li
                              key={index}>
                              <Link
                                className="dropdown-item"
                                to={solution.link}
                              >
                                {solution.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/about"
                          role="button"
                          aria-expanded="false"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/brands"
                          role="button"
                          aria-expanded="false"
                        >
                          Our Brands
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/contact"
                          role="button"
                          aria-expanded="false"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  )
}
export default Header
