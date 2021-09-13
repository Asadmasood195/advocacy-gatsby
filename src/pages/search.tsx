import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"
import CartIcon from "../assests/octicons/cart.svg"
import Image1 from "../assests/sample0.webp"
import Image2 from "../assests/sample1.webp"
import Image3 from "../assests/sample2.webp"

const AllProducts = [
  {
    id: 1,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
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
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 5,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 6,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 7,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 8,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 9,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 10,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
]

const Search = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Search Result
        </div>
      </div>

      <div id="main">
        <div id="sub-products">
          <div id="content">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>Search Result</h3>
                </div>
                <div className="col align-right filter"></div>
              </div>
              <div className="row">
                {AllProducts.map(product => {
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
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search
