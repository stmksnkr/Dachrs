import React from 'react'
const Footer = () => {
    return (
        <>
            <div className="footercontainer">
                <div className="wholefooter" >
                    <div className="footerlist">
                        <div>
                            <h1>Our Words</h1>
                            <p>Cloud AI is the world’s preferred Salesforce & GCP Development Company that specializes in Salesforce & GCP implementation consulting.</p>
                        </div>
                        < div className="quicklinks">
                            <h1>Quick Links</h1>
                            <a className="dropdown-item" href="/">Home</a>
                            <a className="dropdown-item" href="/">About us</a>
                            <a className="dropdown-item" href="/">Services</a>
                            <a className="dropdown-item" href="/">Contact Us</a>
                        </ div>
                        <div>
                            <h1>Address</h1>
                            
                            <address className="address">
                             Cloud AI tech BV
                                Herengracht 420 ,
                                Amsterdam,
                                Post code: 1017BZ
                                Netherlands</address>
                        </div>
                        <div>
                            <h1>Contact Us</h1>
                            <p>phone no:- +91 8795545455 General Enquiries:</p>
                            <email>admin@clouditech.co.uk</email>

                        </div>
                    </div>
                    <div className="cpyrt">
                        <p> &copy; Copyright 2021 Dachrs.com </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
