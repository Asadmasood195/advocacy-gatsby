import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import CartSvg from "../assests/octicons/cart.svg"
import X16 from "../assests/octicons/x-16.svg"
import CartInput from "../components/cart/CartInput"
import HowCanWeHelp from "../components/banner/HowCanWeHelp"
import Summary from "../components/cart/Summary"
import Image from "../assests/sample.webp"
import GovbuddyIcon from "../assests/ico-govbuddy.webp"

const Cart = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Shopping Cart
        </div>
      </div>

      <div id="main">
        <div id="cart">
          <div id="content">
            <div className="container">
              <div id="recommended-product">
                <div className="row">
                  <div className="col-md-4">
                    <img src={GovbuddyIcon} alt="" />
                  </div>
                  <div className="col-md-8">
                    <form method="post" action="cart.html">
                      <h3>
                        Would you like to shop our Legislative Directory
                        Edition? Add a Govbuddy Subscriptions?
                      </h3>
                      <span className="select-arr">
                        <select>
                          <option>Product A</option>
                        </select>
                      </span>
                      <button
                        className="btn btn-primary add-to-cart"
                        type="submit"
                      >
                        <CartSvg className="svg" />
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div id="shopping-cart">
                <h2>Shopping Cart</h2>
                <div className="row">
                  <div className="col-md-9">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th colSpan={2}>PRODUCT</th>
                          <th>PRICE</th>
                          <th>QTY</th>
                          <th>UNIT PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="btn-delete">
                              <X16 className="svg" />
                            </a>
                          </td>
                          <td className="product-image">
                            <img src={Image} alt="sample" />
                          </td>
                          <td>
                            <div className="product-title">
                              2020 Pocket Directory of the California
                              Legislature
                            </div>
                            <div className="note1">
                              Quantity discounts available
                            </div>
                          </td>
                          <td>
                            <div className="price">$17.95</div>
                          </td>
                          <td>
                            <div className="qty">
                              <CartInput />
                            </div>
                          </td>
                          <td>
                            <div className="unit-price">$35.25</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="btn-delete">
                              <X16 className="svg" />
                            </a>
                          </td>
                          <td className="product-image">
                            <img src={Image} alt="sample" />
                          </td>
                          <td>
                            <div className="product-title">
                              2020 Pocket Directory of the California
                              Legislature
                            </div>
                            <div className="note1">
                              Quantity discounts available
                            </div>
                          </td>
                          <td>
                            <div className="price t">$17.95</div>
                          </td>
                          <td>
                            <div className="qty">
                              <CartInput />
                            </div>
                          </td>
                          <td>
                            <div className="unit-price ">$35.25</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline-primary">
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <Summary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HowCanWeHelp />
      </div>
    </Layout>
  )
}

export default Cart
