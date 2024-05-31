import React from "react";

export default function Studies(props) {
    return (
        <div className="container-fixed container-res gap-4">
        <div className="row-direction">
            <div className="col text-center card-header">
                <h2>{props.study}</h2>
            </div>
            <div className="col">
                <div className="card-studies">
                    <div className="card-body-studies primary-color">
                        <div className="case-content">
                            <div>
                                <h3>{props.robotic}</h3>
                            </div>
                            <div>
                                <p>Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget
                                    vel.
                                    Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam
                                    aliquam
                                    molestie
                                    arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum.
                                    Adipiscing
                                    dictumst nunc enim massa.
                                </p>
                            </div>
                            <div>
                                <span className="read-link">Read case study &rightarrow;</span>
                            </div>
                        </div>
                        <img src="assets/images/case-studie-img.png" alt="" />
                    </div>
                    <div className="card-body-studies secondary-color">
                        <div className="case-content">
                            <div>
                                <h3>{props.toothbrush}</h3>
                            </div>
                            <div>
                                <p>Rutrum diam euismod nec cursus velit dolor arcu ut. Lacus, diam non vitae nunc arcu
                                    leo.
                                    Nisl
                                    nulla pellentesque fames posuere fermentum odio fusce nunc tellus. Consectetur elit,
                                    at
                                    consequat non auctor nam at. Volutpat malesuada lorem turpis praesent condimentum
                                    potenti enim
                                    sed semper. Enim justo aliquam.
                                </p>
                            </div>
                            <div>
                                <span className="read-link">Read case study &rightarrow;</span>
                            </div>
                        </div>
                        <img src="assets/images/image (1).png" alt="" />
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <button className="normal-btn case-btn">Read all case studies</button>
            </div>
        </div>
    </div>
    )
}