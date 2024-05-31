import React from "react";

export default function Testimonials (props) {
    return (
        <div className="container-fixed container-res gap-4">
        <div className="row-direction gap-3">
            <div className="col text-center">
                <div className="card-header">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div className="col">
                <div className="testimonials-container">
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar.png" alt="" />
                            <div className="username">
                                <span><strong>{props.assistant}</strong></span>
                                <span className="role">Medical Assistant</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa error veritatis suscipit quos
                            facere
                            asperiores, deleniti dolores voluptate quia soluta. Tempore at nam quaerat asperiores
                            adipisci
                            delectus
                            dolorem, aspernatur libero!
                        </p>
                    </div>
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar (1).png" alt="" />
                            <div className="username">
                                <span><strong>{props.president}</strong></span>
                                <span className="role">President of Sales</span>
                            </div>
                        </div>
                        <p>Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec.
                            Pretium
                            eu
                            nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui
                            ornare
                            sed
                            interdum. Enim.
                        </p>
                    </div>
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar (2).png" alt="" />
                            <div className="username">
                                <span><strong>{props.ceo}</strong></span>
                                <span className="role">CEO, Slack</span>
                            </div>
                        </div>
                        <p>Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa
                            egestas
                            integer proin id.
                        </p>
                    </div>
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar (3).png" alt="" />
                            <div className="username">
                                <span><strong>{props.coordinator}</strong></span>
                                <span className="role">Marketing Coordinator</span>
                            </div>
                        </div>
                        <p>Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam
                            id
                            sed
                            tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim
                            massa.
                        </p>
                    </div>
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar (4).png" alt="" />
                            <div className="username">
                                <span><strong>{props.ceoo}</strong></span>
                                <span className="role">CEO, Divi</span>
                            </div>
                        </div>
                        <p>Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut
                            auctor
                            porttitor
                            amet, tortor. Justo.
                        </p>
                    </div>
                    <div className="testimonials p-4">
                        <div className="profile">
                            <img src="assets/images/avatar (5).png" alt="" />
                            <div className="username">
                                <span><strong>{props.designer}</strong></span>
                                <span className="role">Web Designer</span>
                            </div>
                        </div>
                        <p>In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse
                            pellentesque.
                            Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis
                            amet
                            sed.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="slider-container">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
            </div>
        </div>
    </div>
    )
}