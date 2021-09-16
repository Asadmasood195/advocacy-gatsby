import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CheckOutForm from "../components/checkout/CheckOutForm"

const Checkout = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
          Checkout
        </div>
      </div>

      <div id="main">
        <div id="checkout">
          <div id="content">
            <CheckOutForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
