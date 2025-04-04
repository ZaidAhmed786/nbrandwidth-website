
import Link from 'next/link'

export default function Pricing1() {
    return (
        <>
            <section className="pricing-section section-bg fix section-padding">
                <div className="left-shape">
                    <img src="/assets/img/pricing-left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img src="/assets/img/pricing-right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">Pricing Plans</span>
                                <h2 className="wow fadeInUp text-center" data-wow-delay=".3s">
                                Top Internet, Cable &  Fiber  Packages
                                </h2>
                            </div>
                           
                        </div>
                        <div className="tab-content">
                            <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Basic Internet</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$65.00</h2>
                                                <span>Per month</span>
                                                <p>
                                                For Everyday Browsing
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Up to 100 Mbps internet speed
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Secure connection with Wi-Fi router
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Ideal for browsing and streaming
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 customer support
                                                </li>
                                               
                                            </ul>
                                            <div className="pricing-button">
                                                
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    Order Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="pricing-items active">
                                            <div className="tag">
                                                <h6>Standard Cable</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$80.00</h2>
                                                <span>Per month</span>
                                                <p>
                                                For Entertainment Lovers
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    150+ HD channels
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    On-demand streaming
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free DVR service
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Access to premium channels
                                                </li>
                                               
                                            </ul>
                                            <div className="pricing-button">
                                                
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    Order Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Premium Fiber</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$90.00</h2>
                                                <span>Per month</span>
                                                <p>
                                                For Ultimate Speed
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Up to 1 Gbps internet speed
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Unlimited data
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free installation and setup
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Priority customer support
                                                </li>
                                              
                                            </ul>
                                            <div className="pricing-button">
                                               
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    Order Plan
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
