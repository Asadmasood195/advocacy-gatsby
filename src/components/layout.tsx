import * as React from "react"
import Helmet from "react-helmet"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import "../styles/custom.css"
import ErrorBoundaryContainer from "../components/common/ErrorBoundryContainer"

const Layout = ({ children }: any) => {
  return (
    <>
      <ErrorBoundaryContainer>
        <Helmet>
          <html lang="en" />
          <title>Advocacy</title>
          <meta name="description" content="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;600;800&family=Poppins:ital,wght@0,200;0,400;0,500;0,700;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="../../src/assests/fontAwesome/css/min.css"
          />
        </Helmet>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </ErrorBoundaryContainer>
    </>
  )
}

export default Layout
