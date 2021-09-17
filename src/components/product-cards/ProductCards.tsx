import * as React from "react"
import Cards from "./Cards"


const ProductCards = () => {
  const [currentTab, setCurentTab] = React.useState("2021")

  return (
    <div id="homepage">
      <div id="products">
        <div className="container">
          <div className="row" id="header-title">
            <div className="col-md-12">
              <h3>Capitol Enquiry Products</h3>
              <p>Game Changing Products for Advocacy</p>
            </div>
          </div>
          <div id="products-list">
            <ul
              className="nav nav-pills justify-content-center"
              id="productTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${currentTab === "2021" && "active"}`}
                  id="tab-2021-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2021"
                  type="button"
                  role="tab"
                  aria-controls="tab-2021"
                  aria-selected="true"
                  onClick={() => setCurentTab("2021")}
                >
                  2021
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${currentTab === "2022" && "active"}`}
                  id="tab-2022-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2022"
                  type="button"
                  role="tab"
                  aria-controls="tab-2022"
                  aria-selected="false"
                  onClick={() => setCurentTab("2022")}
                >
                  2022
                </button>
              </li>
            </ul>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCards
