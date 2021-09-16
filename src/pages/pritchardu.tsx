import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner/Banner"
import Courses from "../components/pritchardu/Courses"
import HowCanWeHelpSimple from "../components/banner/HowCanWeHelpSimple"

const PritchardU = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /
          PritchardU
        </div>
      </div>

      <div id="main">
        <div id="sub-products" className="sub-pritchardu">
          <Banner 
          bg="bg-pritchardu"
          title="PritchardU"
          description="Nothing beats an education from experts. At PritchardU,
          professionals learn new skills and earn certifications.
          Each student who successfully completes a PritchardU
          course earns a certificate of Lobbying Science."
          />
          <Courses />
        </div>
        <HowCanWeHelpSimple />
      </div>
    </Layout>
  )
}

export default PritchardU
