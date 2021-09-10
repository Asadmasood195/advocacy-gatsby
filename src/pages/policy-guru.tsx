import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner/Banner"
import CustomPlans from "../components/policyGuru/CustomPlans"
import HowCanWeHelp from "../components/banner/HowCanWeHelp"

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
        <HowCanWeHelp />
      </div>
    </Layout>
  )
}

export default PolicyGuru
