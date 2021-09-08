import * as React from "react"

import Layout from "../components/layout"

export default function NotFound() {
  return (
    <>
      <Layout>
        <div id="error404">
          <div id="content">
            <div className="container">
              <h1 className="text-center">
                404
                <br />
                Page Not Found
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
