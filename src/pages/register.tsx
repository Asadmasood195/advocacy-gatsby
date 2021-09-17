import * as React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout/Layout"
import RegisterForm from "../Components/Register/RegisterForm"

const Register = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Register
        </div>
      </div>

      <div id="main">
        <div id="login">
          <div id="content">
            <RegisterForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register
