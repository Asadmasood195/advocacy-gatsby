import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout/Layout"
import ProductsContent from "../Components/Products/ProductsContent"

const Products = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Products
        </div>
      </div>
      <div id="main">
        <div id="products">
          <div id="banner" className="banner-products">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                  <div className="text-left text-banner">
                    <h1>Advocacy’s Products</h1>
                    <h5>
                      All the legislative information in our Printed Directory
                      of the New York Legislature, continuously updated
                      throughout the year.
                    </h5>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <ProductsContent />
        </div>
      </div>
    </Layout>
  )
}

export default Products
