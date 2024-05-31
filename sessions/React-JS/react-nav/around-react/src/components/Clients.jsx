import React from "react"

export default function Clients (props) {
    return (
        <div className="clients-container">
        <div className="row-direction">
            <div className="col text-center">
                <h2 className="section-title">Our Clients </h2>
                <p className="section-subtitle">{props.subtitle} </p>
            </div>
            <div className="col">
                <div className="card-container">
                    <div className="card-clients">
                        <img src="assets/images/logoipsum.svg" alt="Client 1" />
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (1).svg" alt="Client 2" />
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (2).svg" alt="Client 3" />
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (3).svg" alt="Client 4" />
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum.svg" alt="Client 5" />
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (2).svg" alt="Client 6"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (4).svg" alt="Client 7"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (3).svg" alt="Client 8"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (5).svg" alt="Client 9"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (1).svg" alt="Client 10"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (2).svg" alt="Client 11"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (3).svg" alt="Client 12"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum.svg" alt="Logo 2"/>
                    </div>
                    <div className="card-clients">
                        <img src="assets/images/logoipsum (2).svg" alt="Logo 2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}