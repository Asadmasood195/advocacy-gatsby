import * as React from "react"
import { Link } from "gatsby"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const PrintedDirectory = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <div id="homepage">
      <div id={!isMobile ? "printed-directories" : ""}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="p-5 text-center">
              <br />
              <h3>Printed Directories in Digital Format</h3>
              <p>
                All Printed Directory information is available for the Assembly
                and Senate members on USB Flash Drive (includes staff and
                committees).
              </p>
              <Link to="/shop" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default PrintedDirectory
