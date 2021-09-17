import * as React from "react"
import Helmet from "react-helmet"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../Styles/Custom.css"
import "react-multi-carousel/lib/styles.css"
import "react-image-gallery/styles/css/image-gallery.css"

import ErrorBoundaryContainer from "../Common/ErrorBoundryContainer"

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
            href="../../src/Assests/fontAwesome/css/min.css"
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
