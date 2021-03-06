import { Link } from 'gatsby'
import * as React from 'react'
import Image from "../../Assests/sample.webp"
import X16 from "../../Assests/Svg-Icons/x-16.svg"
import CartInput from "./CartInput"

const Products = () => {

    const products = [
        {
            'id': 1,
            'img': Image,
            'title': '2021 Pocket Directory of the California Legislature',
            'note': 'Quantity discounts available',
            'price': 17.95,
            'unit_price': 35.25,
        },
        {
            'id': 2,
            'img': Image,
            'title': '2020 Pocket Directory of the California Legislature',
            'note': 'Quantity discounts available',
            'price': 17.95,
            'unit_price': 35.25,
        }
    ];

    return (
        <div style={{ overflowY: 'scroll' }}>
            <table >
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QTY</th>
                        <th>UNIT PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>
                                    <Link to="/" className="btn-delete">
                                        <X16 className="svg" />
                                    </Link>
                                </td>
                                <td className="product-image">
                                    <img src={product.img} alt="sample" />
                                </td>
                                <td>
                                    <div className="product-title">
                                        {product.title}
                                    </div>
                                    <div className="note1">
                                        {product.note}
                                    </div>
                                </td>
                                <td>
                                    <div className="price">{product.price}</div>
                                </td>
                                <td>
                                    <div className="qty">
                                        <CartInput />
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-price">{product.unit_price}</div>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Products
