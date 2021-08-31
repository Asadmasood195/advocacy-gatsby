import * as React from "react"

const ProductCards = () => {
  return (
    <div>
      <div id="products">
        <div class="container">
          <div class="row" id="header-title">
            <div class="col-md-12">
              <h3>Capitol Enquiry Products</h3>
              <p>Game Changing Products for Advocacy</p>
            </div>
          </div>
          <div id="products-list">
            <ul
              class="nav nav-pills justify-content-center"
              id="productTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="tab-2021-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2021"
                  type="button"
                  role="tab"
                  aria-controls="tab-2021"
                  aria-selected="true"
                >
                  2021
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="tab-2022-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2022"
                  type="button"
                  role="tab"
                  aria-controls="tab-2022"
                  aria-selected="false"
                >
                  2022
                </button>
              </li>
            </ul>
            <div class="tab-content" id="productTabContent">
              <div
                class="tab-pane fade show active"
                id="tab-2021"
                role="tabpanel"
                aria-labelledby="tab-2021"
              >
                <div class="row">
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample1.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample1.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample2.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample2.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample0.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample0.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample0.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample2.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample1.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2021 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade show"
                id="tab-2022"
                role="tabpanel"
                aria-labelledby="tab-2021"
              >
                <div class="row">
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample1.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2022 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample2.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2022 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample2.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2022 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="product-item">
                      <a href="product-detail.html" class="product-detail">
                        <div
                          class="product-item-img"
                          style="
                                background: url('./img/sample0.jpeg') no-repeat
                                  center center;
                                background-size: contain;
                              "
                        ></div>
                        <div class="product-item-title">
                          2022 State Agency Directory Digital Edition
                        </div>
                        <div class="product-item-price">$299.95</div>
                      </a>
                      <div class="product-item-button">
                        <a href="cart.html" class="btn btn-primary add-to-cart">
                          <img src="./plugins/octicons/cart.svg" class="svg" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCards
