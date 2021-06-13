import React from 'react'
import sideimage from '../sideimage.jpeg'
const GetInTouch = () => {
    return (
        <>
            <div className="touch-container">
                <div className="touch-header">
                    <h1>GET IN TOUCH</h1>
                    <h3>IF YOU HAVE A QUESTION OR WANT TO KNOW MORE</h3>
                </div>
                <div className="touch-details">
                    <div className="img-css">
                        <img className="side-image" src={sideimage}></img>
                    </div>
                    <div className="touch-inputs">
                        <div className="touch-contact">
                            <input className="btn-css" type="text" name="name" placeholder="FIRST NAME" />
                            <input className="btn-css" type="text" name="name" placeholder="LAST NAME" />
                        </div>
                        <div className="touch-contact">
                            <input className="btn-css" type="email" name="name" placeholder="EMAIL" />
                            <input className="btn-css" type="tel" name="name" placeholder="PHONE" />
                        </div>
                        <div className="msg-btn">
                            <textarea className="message btn-css" type="text" placeholder="MESSAGE"></textarea><br></br>
                            <button className="btn btn-primary submitbtn" type="button">SUBMIT NOW</button>
                        </div>
                    </div>
                </div>
                <div className=" card touch-info">
                        <div className="cardItems">
                            <h1>WHY CLOUD AI TECH</h1>
                            <p>The phrase “time is money” is as true today as it has always been. We know how valuable your time is and that when you have an idea or question you need to hear from us. We will respond to all requests, queries or actions each and every time. We will take the time to listen to you and work with you to help develop a plan of action for to satisfy your needs. We understand how frustrating it is you do not get a response therefore our commitment to you is that we respond to your requests as quickly as humanly possible.</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default GetInTouch
