import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import CartIcon from "../Assests/Svg-Icons/cart.svg"
import { AllProducts } from "../Components/Search/AllProducts"

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
                    <div key={product.id} className="col-md-3">
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
