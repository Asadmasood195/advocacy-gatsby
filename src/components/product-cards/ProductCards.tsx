import * as React from "react"
import { Link } from "gatsby"

import CartIcon from "../../assests/octicons/cart.svg"
import Image1 from "../../assests/sample0.webp"
import Image2 from "../../assests/sample1.webp"
import Image3 from "../../assests/sample2.webp"

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
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 4,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 5,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
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
    productImage: Image1,
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
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 10,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
]

const Product2022 = [
  {
    id: 1,
    title: "2022 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 2,
    title: "2022 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 3,
    title: "2022 State Agency Directory Digital Edition",
    productImage: Image3,
    price: "299.95",
  },
  {
    id: 4,
    title: "2022 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
]

const ProductCards = () => {
  const [currentTab, setCurentTab] = React.useState("2021")

  return (
    <div id="homepage">
      <div id="products">
        <div className="container">
          <div className="row" id="header-title">
            <div className="col-md-12">
              <h3>Capitol Enquiry Products</h3>
              <p>Game Changing Products for Advocacy</p>
            </div>
          </div>
          <div id="products-list">
            <ul
              className="nav nav-pills justify-content-center"
              id="productTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${currentTab === "2021" && "active"}`}
                  id="tab-2021-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2021"
                  type="button"
                  role="tab"
                  aria-controls="tab-2021"
                  aria-selected="true"
                  onClick={() => setCurentTab("2021")}
                >
                  2021
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${currentTab === "2022" && "active"}`}
                  id="tab-2022-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2022"
                  type="button"
                  role="tab"
                  aria-controls="tab-2022"
                  aria-selected="false"
                  onClick={() => setCurentTab("2022")}
                >
                  2022
                </button>
              </li>
            </ul>
            <div className="tab-content" id="productTabContent">
              <div
                className={`tab-pane fade ${
                  currentTab === "2021" && "active show"
                }`}
                id="tab-2021"
                role="tabpanel"
                aria-labelledby="tab-2021"
              >
                <div className="row">
                  {Product2021.map(product => {
                    return (
                      <div className="col-md-3">
                        <div className="product-item">
                          <Link to="/product-detail" className="product-detail">
                            <div
                              className="product-item-Card"
                              // id="Card1Styles"
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
              </div>
              <div
                className={`tab-pane fade ${
                  currentTab === "2022" && "active show"
                }`}
                id="tab-2022"
                role="tabpanel"
                aria-labelledby="tab-2021"
              >
                <div className="row">
                  {Product2022.map(product => {
                    return (
                      <div className="col-md-3">
                        <div className="product-item">
                          <Link to="/product-detail" className="product-detail">
                            <div
                              className="product-item-Card"
                              // id="Card1Styles"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCards
