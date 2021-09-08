import * as React from "react"
import Layout from "../components/layout"

const forgot = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <a href="/">Home</a> / Forgot Password
        </div>
      </div>

      <div id="main">
        <div id="login">
          <div id="content">
            <form method="post">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Forgot Password</h2>
                    <div className="box2">
                      Lost your password? Please enter your username or email
                      address. You will receive a link to create a new password
                      via email.
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-username">
                        Username or email <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-username"
                        aria-describedby="emailHelp"
                        placeholder="Your Username or email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary">
                      Reset Password
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default forgot
