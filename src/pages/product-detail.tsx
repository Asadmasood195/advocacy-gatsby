import * as React from "react"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"
import Layout from "../components/layout"
import CartIcon from "../assests/octicons/cart.svg"
import Image1 from "../assests/sample.webp"
import Image2 from "../assests/sample0.webp"
import Image3 from "../assests/sample1.webp"
import Image4 from "../assests/sample2.webp"
import Image5 from "../assests/sample4.webp"
import CartInput from "../components/cart/CartInput"

const ProductImages = [
  { Image: Image1 },
  { Image: Image2 },
  { Image: Image3 },
  { Image: Image4 },
  { Image: Image5 },
]
const Products = [
  {
    id: 1,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
  {
    id: 2,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 3,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image1,
    price: "299.95",
  },
  {
    id: 4,
    title: "2021 State Agency Directory Digital Edition",
    productImage: Image2,
    price: "299.95",
  },
]

const images = [
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image1,
    thumbnail: Image1,
  },
];

const ProductDetail = () => {
  return (
    <Layout>
      <div id="breadcrumbsTop">
        <div className="container">
          <Link to="/">Home</Link> /<Link to="/shop">Products</Link> / 2021
          State Agency Directory Digital Edition
        </div>
      </div>

      <div id="main">
        <div id="product-detail">
          <div id="content">
            <div className="container">
              <div id="p-detail-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="product-images-for">
                      <ImageGallery showFullscreenButton={false} showPlayButton={false} className="product-slider" items={images} />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="notice1">Available Early Jan 2021</p>
                    <h2>2021 State Agency Directory Digital Edition</h2>
                    <div className="row">
                      <div className="col-lg-8">
                        <p className="price">$299.95</p>
                        <div className="quantity">
                          <form
                          //   method="post"
                          //    action="cart.html"
                          >
                            <p>Quantity</p>
                            <div className="row">
                              <div className="col-lg-4 mb-3">
                                <CartInput />
                              </div>
                              <div className="col-lg-8">
                                <button
                                  className="btn btn-primary add-to-cart"
                                  type="submit"
                                >
                                  <CartIcon className="svg" />
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="product-descriptions">
                          <p>
                            Now! A pocket-size legislator reference book
                            available the beginning of each year's session.
                            Printed in color and published at the end of
                            December.
                          </p>
                        </div>
                        <div className="product-info">
                          <h5>Product Info</h5>
                          <ul>
                            <li>1 page for each state legislator. Includes</li>
                            <li>
                              Contact information, including phone, fax, email
                              and room number as of mid-December.
                              <ul>
                                <li>Major Contributors</li>
                                <li>Brief Bio</li>
                                <li>Photo</li>
                                <li>District information &amp; Map</li>
                                <li>Election Results</li>
                              </ul>
                            </li>
                            <li>
                              Includes tentative 2021 legislative calendar.
                            </li>
                            <li>Convenient pocket size: 3 1/2" x 7"</li>
                            <li>Printed in Color</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="quantity-details">
                          <div className="title-top">Buy more &amp; Saves</div>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Quantity</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1-5</td>
                                <td>$17.95</td>
                              </tr>
                              <tr>
                                <td>6-10</td>
                                <td>$17.95</td>
                              </tr>
                              <tr>
                                <td>11-25</td>
                                <td>$17.95</td>
                              </tr>
                              <tr>
                                <td>26-49</td>
                                <td>$17.95</td>
                              </tr>
                              <tr>
                                <td>50-99</td>
                                <td>$17.95</td>
                              </tr>
                              <tr>
                                <td>100-99</td>
                                <td>$17.95</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="recommended-products">
                <div className="row">
                  <div className="col-md-12">
                    <h3>Recommended product for you</h3>
                    <p>We have others products for you to check </p>
                  </div>
                </div>
                <div className="row">
                  {Products.map(product => {
                    return (
                      <div key={product.id} className="col-md-3">
                        <div className="product-item">
                          <Link to="/product-detail" className="product-detail">
                            <div
                              className="product-item-Card"
                              // id="Card1Styles"
                              style={{
                                background: `url(${product.productImage})`,
                              }}
                            ></div>
                            <div className="product-item-title">
                              {product.title}
                            </div>
                            <div className="product-item-price">
                              ${product.price}
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
