import * as React from 'react'
import govbuddyIcon1 from "../../assests/govbuddy-icon1.webp"
import printedIcon from "../../assests/printed-icon.webp"
import pritIcon from "../../assests/prit-icon.webp"
import policyIcon from "../../assests/policy-icon.webp"

const OurProducts = () => {
    return (
        <div className="row" id="our-products">
            <div className="col-md-5">
                <h3 className="with-line">OUR PRODUCTS</h3>
                <h4>The Capitol Enquiry Advantage:</h4>
            </div>
            <div className="col-md-7" id="product-list-overview">
                <div className="row">
                <div className="col-md-6">
                    <div className="image">
                    <img src={govbuddyIcon1} alt="govbuddy-icon1" />
                    <h5>GovBuddy</h5>
                    <p>
                        Collaboration platform and directory. The premier
                        source of contact information for the California State
                        Legislature.
                    </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={printedIcon} alt="printed-icon" />
                    <h5>Printed Directories</h5>
                    <p>
                    In print since 1973, our Printed Directories including
                    the Pocket Directory of the California State Legislature
                    are powerful and convenient tools.
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <img src={pritIcon} alt="prit-icon" />
                    <h5>PritchardU</h5>
                    <p>
                    The industry's first online educational resource for
                    advocacy work.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={policyIcon} alt="policy-icon" />
                    <h5>Policy Guru</h5>
                    <p>
                    The premier source of contact information for cities and
                    counties in California.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts
