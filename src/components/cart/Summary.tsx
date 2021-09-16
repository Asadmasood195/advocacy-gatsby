import * as React from 'react'

const Summary = () => {
    return (
        <div id="summary">
            <table className="table">
            <tbody>
                <tr>
                <td>
                    <b>Sub Total</b>
                </td>
                <td className="align-right">$998</td>
                </tr>
                <tr>
                <td>
                    <b>Shipping fee</b>
                </td>
                <td className="align-right">$20</td>
                </tr>
                <tr>
                <td>
                    <b>Tax</b>
                </td>
                <td className="align-right">$20</td>
                </tr>
                <tr>
                <td>
                    <b>Non Recurring Payment</b>
                </td>
                <td className="align-right">$326.20</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>
                    <b>TOTAL</b>
                </td>
                <td className="align-right total-price">$118</td>
                </tr>
            </tbody>
            </table>
            <form action="checkout">
            <button type="submit" className="btn btn-default">
                Check out
            </button>
            </form>
        </div>
    )
}

export default Summary
