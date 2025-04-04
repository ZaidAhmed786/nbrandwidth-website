

import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    return (
        <>
            <section className="about-section section-padding fix"  id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row justify-content-center">
                           
                            <div className="col-lg-6 mt-4 mt-lg-0 mb-xl-0 mb-5">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">Services</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We’re Offering
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    As a leading internet provider, we are committed to delivering high-speed, reliable internet services to homes and businesses. Our cutting-edge technology ensures seamless connectivity and unmatched performance. Whether you need lightning-fast fiber internet, affordable landline plans, or high-speed cable internet, we have tailored solutions to meet your needs. Experience the difference with our dedicated customer support and innovative service offerings.                                    </p>
                                    <div className="about-icon-items">
                                        <div className=" wow fadeInUp" data-wow-delay=".7s">
                                           
                                            <div className="content d-flex gap-4">
                                                <div className='d-flex align-items-center gap-2'><img src="/assets/img/check-solid (1).png" alt="" width="20px" /><h5> Reliable Internet Connection</h5></div>
                                                <div className='d-flex align-items-center gap-2'><img src="/assets/img/check-solid (1).png" alt="" width="20px" /><h5>Affordable Landline Plans</h5></div>
                                            </div>
                                        </div>
                                        <div className="wow fadeInUp" data-wow-delay=".9s">
                                           
                                            <div className="content d-flex gap-3">
                                                 <div className='d-flex align-items-center gap-2'><img src="/assets/img/check-solid (1).png" alt="" width="20px" /><h5> High-Speed Cable Iternet</h5></div>
                                                 <div className='d-flex align-items-center gap-2'><img src="/assets/img/check-solid (1).png" alt="" width="20px" /><h5>Lightening-Fast Fiber Internet</h5></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/about" className="theme-btn">
                                                Request A Quote
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                   
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/01.jpg")' }}>
                                        <div className="wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/virtual_office-individual-office-66170-5.jpg" alt="" width="100%" height="450px" />
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
