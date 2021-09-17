import * as React from 'react'
import { Link } from "gatsby"
import { Product2021 } from './Products2021'
import { Product2022 } from './Products2022'
import CartIcon from "../../assests/octicons/cart.svg"

const Cards = () => {
  const [currentTab, setCurentTab] = React.useState("2021")

    return (
        <>
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
        </>
    )
}

export default Cards
