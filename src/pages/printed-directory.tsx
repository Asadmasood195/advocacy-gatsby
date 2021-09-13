import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import CartIcon from "../assests/octicons/cart.svg"
import Image1 from "../assests/sample0.webp"
import Image2 from "../assests/sample1.webp"
import Image3 from "../assests/sample2.webp"

const Product2021 = [
  {
    id: 1,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 2,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 3,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 4,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 5,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 6,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 7,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 8,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
]

const PrintedDirectory = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/products">Products</Link> /
          Printed Directories
        </div>
      </div>

      <div id="main">
        <div id="sub-products">
          <div id="banner" className="banner-subproducts bg-printed">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                  <div className="text-left text-banner">
                    <h1>Printed Directories</h1>
                    <h5>
                      California's premier provider of government information
                    </h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div id="content">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>All Printed Directories</h3>
                  <p>Game Changing Products for Advocacy</p>
                </div>
                <div className="col align-right filter">
                  <a href="#">All Years</a> | <a href="#">2020</a> |{" "}
                  <a href="#">2021</a>
                </div>
              </div>
              <br />
              <div className="row">
                {Product2021.map(product => {
                  return (
                    <div className="col-md-3">
                      <div className="product-item">
                        <Link to="/product-detail" className="product-detail">
                          <div
                            className="product-item-Card"
                            style={{
                              background: `url(${product.productImage})`,
                            }}
                          ></div>
                          <div className="product-item-title">
                            {product.title}
                          </div>
                          <div className="product-item-price">
                            ${product.price}
                          </div>
                        </Link>
                        <div className="product-item-button">
                          <Link
                            to="/cart"
                            className="btn btn-primary add-to-cart"
                          >
                            <CartIcon className="svg" />
                            Add to Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <nav aria-label="Page Pagination">
                <ul className="pagination  justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <HowCanWeHelpSimple />
    </Layout>
  )
}

export default PrintedDirectory
