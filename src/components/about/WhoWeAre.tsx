import * as React from 'react'
import enquiryLogo from "../../Assests/capitol-enquiry-logo.webp";
import govbuddyLogo from "../../Assests/govbuddy-logo.webp";
import policyguruLogo from "../../Assests/policyguru-logo.webp";
import pritcharduLogo from "../../Assests/pritchardu-logo.webp";

const WhoWeAre = () => {
    return (
        <>
            <div className="row" id="who-we-are">
                <div className="col-md-7">
                    <h3 className="with-line">WHO WE ARE</h3>
                    <h4>
                        Empowering Advocacy Teams, Driving Real Change. Leverage
                        Capitol Enquiry Products To Your Advantage.
                    </h4>
                </div>
            </div>
            <div className="row" id="brands-logo">
                <div className="col-md-12">
                    <h3>OUR BRANDS</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="brand-logo text-center">
                                <img src={enquiryLogo} alt="Capital enquiry logo" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="brand-logo text-center">
                                <img src={govbuddyLogo} alt="Capital enquiry logo" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="brand-logo text-center">
                                <img src={policyguruLogo} alt="policyguru-log" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="brand-logo text-center">
                                <img src={pritcharduLogo} alt="pritchardu-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre
