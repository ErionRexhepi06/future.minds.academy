import React from "react";

export default function Industries(props) {
    return (
        <div className="container-fixed container-res gap-4">
        <div className="row-direction gap-3">
            <div className="col text-center">
                <div className="card-header">
                    <h1 className="section-title">Industries we work in</h1>
                    <p className="section-subtitle">We have been helping businesses in the following industries for over a
                        decade
                    </p>
                </div>
            </div>
            <div className="card-industries gap-2">
                <div className="card-item-industries">
                    <img src="assets/images/service.png" alt="" />
                    <div className="card-industries-content">
                        <div className="card-header">
                            <h1>{props.services}</h1>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Id habitasse dui habitant </li>
                                <li>Rutrum tempor sit tincidunt </li>
                                <li>Imperdiet est quis enim facilisis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-item-industries">
                    <img src="assets/images/industries-retail.png" alt="" />
                    <div className="card-industries-content">
                        <div className="card-header">
                            <h1>{props.retail}</h1>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Ultrices volutpat sit mattis</li>
                                <li>Egestas neque arcu duis </li>
                                <li>Metus magna viverra blandit</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-item-industries">
                    <img src="assets/images/industries-technology.png" alt="" />
                    <div className="card-industries-content">
                        <div className="card-header">
                            <h1>{props.tech}</h1>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Diam diam nunc monte</li>
                                <li> Nulla egestas arcu proin sit</li>
                                <li>Nunc sapien turpis vulputate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <button className="normal-btn button-primary">See all industries</button>
            </div>
        </div>
    </div>
    )
}