import { Link } from 'gatsby'
import * as React from 'react'

const CapitolEnquiry = () => {
    return (
        <div className="box">
            <b>Capitol Enquiry</b>
            <br />
            <br />
            1034 Emerald Bay Road, #435
            <br />
            South Lake Tahoe, CA 96150
            <br />
            <br />
            <b>PHONE: (916) 302-0000</b>
            <br />
            <b>FAX:(916) 642-8220</b>
            <br />
            <b>E-MAIL: info@advocacy.biz</b>
            <br />
            <br />
            For further assistance with an existing order please email{" "}
            <Link to="mailto:orders@advocacy.biz">
            orders@advocacy.biz
            </Link>
        </div>
    )
}

export default CapitolEnquiry
