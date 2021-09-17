
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import { StaticImage } from "gatsby-plugin-Image"
import CartIcon from "../Assests/Svg-Icons/cart.svg"
import { ShopProducts2021 } from "../Data/ShopData"
import HowCanWeHelpSimple from "../Components/Banner/HowCanWeHelpSimple"

const Shop = () => {
    return (
        <Layout>
            <div id="breadcrumbsTop">
                <div className="container">
                    <Link to="/">Home</Link> / Products
                </div>
            </div>

            <div id="sub-products">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>All Products</h3>
                                <p>Game Changing Products for Advocacy</p>
                            </div>
                            <div className="col align-right filter">
                                <Link to="#">All Years</Link> | <Link to="#">2020</Link> |{" "}
                                <a href="#">2021</a>
                            </div>
                        </div>
                        <br />
                        <div className="row">

                            {ShopProducts2021?.map(({ id, title, productImage, price }) => {
                                return <div key={id} className="col-md-3">
                                    <div className="product-item">
                                        <Link to="/product-detail" className="product-detail">
                                            <div
                                                className="product-item-Card"
                                                // id="Card1Styles"
                                                style={{
                                                    background: `url(${productImage})`,
                                                }}
                                            ></div>
                                            <div className="product-item-title">
                                                {title}
                                            </div>
                                            <div className="product-item-price">${price}</div>
                                        </Link>
                                        <div className="product-item-button">
                                            <Link to="/cart" className="btn btn-primary add-to-cart">
                                                <CartIcon className='svg' />
                                                Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                        <nav aria-label="Page Pagination">
                            <ul className="pagination  justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <HowCanWeHelpSimple />
        </Layout>
    )
}

export default Shop
