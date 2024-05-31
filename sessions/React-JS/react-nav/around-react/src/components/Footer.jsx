import React from "react";

export default function Footer(props) {
    return (
        <div className="container-fixed container-res gap-2">
            <div className="row gap-3">
                <footer className="footer">
                    <div className="footer-container">
                        <div className="col">
                            <div className="footer-box">
                                <div className="copyright-desc">
                                    <img src="assets/images/logo-footer.svg" alt="Logo"/>
                                    <p>Tellus non diam morbi quam vel venenatis proin sed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-box">
                                <ul>
                                    <li><a href="#">{props.services}</a></li>
                                    <li><a href="#">{props.industries}</a></li>
                                    <li><a href="#">{props.reviews}</a></li>
                                    <li><a href="#">{props.studies}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-box">
                                <ul>
                                    <li><a href="#">{props.policy}</a></li>
                                    <li><a href="#">{props.center}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-box">
                                <ul>
                                    <li><a href="#">{props.insta}</a></li>
                                    <li><a href="#">{props.fb}</a></li>
                                    <li><a href="#">{props.linkedin}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-box">
                                <ul>
                                    <li><a href="#">+ 1 526 220 0444</a></li>
                                    <li><a href="#">+ 1 526 220 0000</a></li>
                                    <li><a href="#" className="active-link">example@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; All rights reserved. <strong>Made by Createx Studio</strong></p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
