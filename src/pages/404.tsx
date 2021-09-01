import * as React from "react"

import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const NotFoundPage: React.FC = () => (
  <div>
    <Header />
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
    <Footer />
  </div>
)

export default NotFoundPage
