import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LegalPages from "../components/legal/LegalPages"

const legal = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Legal
        </div>
      </div>

      <LegalPages />      
    </Layout>
  )
}

export default legal
