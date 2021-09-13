import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LoginForm from "../components/login/LoginForm"

const Login = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> / Login
        </div>
      </div>

      <div id="main">
        <div id="login">
          <div id="content">
              <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
