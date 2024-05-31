import React from "react";

export default function Leader(props) {
    return(
        <div className="container-fixed container-res gap-4">
        <div className="row gap-6">
            <div className="col">
                <div className="card">
                    <div className="img">
                        <img src="assets/images/bg.png" alt="Client" />
                    </div>
                    <div>
                        <div className="leaderProfile">
                            <h2 className="card-title">{props.name}</h2>
                            <p className="card-subtitle">CEO Around Group</p>
                            <div className="background-image"><img src="assets/images/quote.svg" alt="" /></div>
                            <p>The main task of our organization is <span className="card-desc">to assess the state of your
                                    enterprise now and how you
                                    can achieve your goals.</span> Self-assessment of current activities and review of
                                processes
                                formulate decisions to achieve the desired outcome.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card-processInsights p-4">
                    <div className="processInsights-number p-1">01</div>
                    <div>
                        <h2>{props.problem}</h2>
                        <span>Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur am luctus </span>
                    </div>
                </div>
                <div className="card-processInsights p-4">
                    <div className="processInsights-number p-1">02</div>
                    <div>
                        <h2>{props.state}</h2>
                        <span>Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer
                            erat nisi, nibh </span>
                    </div>
                </div>
                <div className="card-processInsights p-4">
                    <div className="processInsights-number p-1">03</div>
                    <div>
                        <h2>{props.bussines}</h2>
                        <span>A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus
                            mauris feugiat gravida </span>
                    </div>
                </div>
                <div className="card-processInsights p-4">
                    <div className="processInsights-number p-1">04</div>
                    <div>
                        <h2>{props.strategy}</h2>
                        <span>Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc
                            vel nec risus</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}