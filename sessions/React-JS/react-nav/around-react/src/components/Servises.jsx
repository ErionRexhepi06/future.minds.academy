import react from "react"

export default function Services(props) {
    return (
        <div className="container-fixed container-res gap-4">
        <div className="row-direction gap-3">
            <div className="col text-center">
                <div className="card-header">
                    <h1 className="section-title">Our Services</h1>
                    <p className="section-subtitle">We provide a wide range of consulting services</p>
                </div>
            </div>
            <div className="col">
                <div className="services-container">
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/google-ads-logo.svg" alt="Icon" />
                            </div>
                            <h3>Advertising communications</h3>
                            <p>{props.advertising}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/services-illustration.svg" alt="Icon" />
                            </div>
                            <h3>Marketing and branding</h3>
                            <p>{props.marketing}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/services-illustration-2.svg" alt="Icon" />
                            </div>
                            <h3>Web and Internet marketing</h3>
                            <p>{props.web}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/services-illustration-3.svg" alt="Icon" />
                            </div>
                            <h3>Email marketing</h3>
                            <p>{props.email}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/services-illustration-4.svg" alt="Icon" />
                            </div>
                            <h3>Working on communication</h3>
                            <p>{props.working}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                    <div className="services">
                        <div className="service-card">
                            <div className="icon">
                                <img src="assets/images/services-illustration-5.svg" alt="Icon" />
                            </div>
                            <h3>Business copywriting</h3>
                            <p>{props.bussines}</p>
                        </div>
                        <div className="button-container">
                            <button className="round-button">&rightarrow;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}