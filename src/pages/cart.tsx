import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import CartSvg from "../Assests/Svg-Icons/cart.svg"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import Summary from "../Components/Cart/Summary"
import GovbuddyIcon from "../Assests/ico-govbuddy.webp"
import Products from "../Components/Cart/Products"

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
                    <Products />
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
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default Cart
