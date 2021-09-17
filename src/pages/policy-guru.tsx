import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import Banner from "../Components/Banner/Banner"
import CustomPlans from "../Components/PolicyGuru/CustomPlans"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"

const PolicyGuru = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
          Policy Guru
        </div>
      </div>

      <div id="main">
        <div id="sub-products" className="sub-policy">
          <Banner
          bg="bg-policy"
          title="PolicyGuru"
          description="Empowering Local Campaings"
          />
          <CustomPlans />
        </div>
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default PolicyGuru
