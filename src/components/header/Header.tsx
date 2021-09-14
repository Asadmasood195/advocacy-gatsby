import * as React from "react"
import { Link } from "gatsby"
import MainLogo from "../../assests/logo.svg"
import Govbuddy from "../../assests/mnu-govbuddy.webp"
import Printed from "../../assests/mnu-printed.webp"
import Maps from "../../assests/mnu-maps.webp"
import Digital from "../../assests/mnu-digital.webp"
import PolicyGuru from "../../assests/mnu-policyguru.webp"
import Pritchard from "../../assests/mnu-prit.webp"
import CartIcon from "../../assests/octicons/cart.svg"
import Search from "../../assests/octicons/search-16.svg"

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

const Header = ({ children }: any) => {
  const [imgSrc, setImgSrc] = React.useState("1")

  return (
    <header className="border-bottom" id="header">
      <div
        className="
      d-flex
      flex-wrap
      align-items-center
      justify-content-center justify-content-md-between
      container-fluid
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
                        {ProductsList?.map(product => (
                          <li
                            className="productList"
                            onMouseOver={() => setImgSrc(product.id)}
                            id={product.id}
                          >
                            <Link className="dropdown-item" to={product.link}>
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
                          <img src={Maps} alt="Maps Banner" height={254} />
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
                    <li>
                      <Link className="dropdown-item" to="/sol-government">
                        Government
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sol-trade">
                        Trade Assoications
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sol-nonpro">
                        Non Profits
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sol-lobbyst">
                        Lobbyist
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sol-grassroots">
                        Grassroots Efforts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sol-developers">
                        Developers
                      </Link>
                    </li>
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
  )
}

export default Header
