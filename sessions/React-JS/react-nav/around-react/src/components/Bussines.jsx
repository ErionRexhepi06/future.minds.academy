import React from "react";

export default function Bussines(props) {
    return (
        <div className="intro-container">
        <div className="wrapper-full">
            <div className="row intro-section">
                <div className="col">
                    <div className="wrapper-md just-center align-center">
                        <div className="hero-content">
                            <h1>Ready to take your business to the next level? </h1>
                        </div>
                        <img src="assets/images/VectorIMG.png" alt="" className="img-position" />
                    </div>
                </div>
                <div className="wrapper-md">
                    <div className="col">
                        <span className="contact-desc">{props.desc} </span>
                    </div>
                    <div className="col">
                        <div className="send-btn">
                            <input type="text" className="primary-color intro-placeholder"
                                placeholder="&#128231 Enter your email" />
                            <button className="normal-btn btn-primary button-secondary">Book a call</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}