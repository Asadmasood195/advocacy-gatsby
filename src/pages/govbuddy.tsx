import { Link } from "gatsby"
import * as React from "react"
import Layout from "../Components/Layout/Layout"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"
import CommonQuestions from "../Components/Govbuddy/CommonQuestions"
import Banner from "../Components/Banner/Banner"
import Plans from "../Components/Govbuddy/Plans"

const GovBuddy = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/products">Products</Link> /
          GovBuddy
        </div>
      </div>

      <div id="sub-products">
        <Banner
        bg="bg-govbuddy"
        title="Govbuddy"
        description="California's premier provider of government information"
        />
        <div id="content" style={{ padding: 0 }}>
          <Plans />
          <CommonQuestions />
        </div>
      </div>
      <HowCanWeHelpSimple />
    </Layout>
  )
}

export default GovBuddy
