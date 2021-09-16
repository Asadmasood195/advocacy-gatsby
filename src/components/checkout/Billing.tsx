import * as React from 'react'

const Billing = () => {
    return (
        <>
            <div className="row" id="summary">
                <div className="col-md-12">
                <h4>Your Order</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>UNIT PRICE</th>
                        <th>QTY</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2021 State Agency Directory Digital Edition </td>
                        <td>$299.95</td>
                        <td>1</td>
                        <td>$299.95</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={2}></td>
                        <td>
                        <b>Sub Total</b>
                        </td>
                        <td className="align-right">
                        <b>$299.95</b>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td>
                        <b>Shipping</b>
                        </td>
                        <td className="align-right">
                        <b>$3.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td>
                        <b>Tax</b>
                        </td>
                        <td className="align-right">
                        <b>$23.25</b>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td>
                        <b>Grand Total</b>
                        </td>
                        <td className="align-right">
                        <b>$326.20</b>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                        <div className="some-notes1">
                            <p>
                            Payment will be split as you have subscription
                            product in Order.
                            </p>
                            <p>Recurring Payment = $0.00</p>
                            <p>Non-Recurring Payment = $326.20</p>
                            <p>Total Amount = $326.20</p>
                        </div>
                        </td>
                    </tr>
                    </tfoot>
                </table>
                </div>
            </div>
        </>
    )
}

export default Billing
