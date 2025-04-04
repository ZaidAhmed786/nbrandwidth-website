

import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cable TV">
                <div>
                    <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">Cable TV</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Crystal-clear Cable TV, bringing entertainment home daily.
                                </h2>
                            </div>
                            <div className="service-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                            <img src="/assets/img/tv-solid (1).png" alt="icon-img" className='img-fluid' width="30px" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                    High-Quality Cable Services
                                                    </Link>
                                                </h4>
                                                <p>
                                                Enjoy uninterrupted entertainment with our extensive range of channels and crystal-clear picture quality, thanks to our expert cable installation team.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="service-box-items box-shadow active">
                                            <div className="icon">
                                            <img src="/assets/img/virtual_office-individual-office-66170-5.jpg" alt="icon-img" className='img-fluid' width="30px" />

                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                    Tailored Viewing Odyssey:
                                                    </Link>
                                                </h4>
                                                <p>
                                                We believe every viewer is unique. Our diverse channel lineup caters to varied tastes—whether you crave live sports, cinematic masterpieces, enlightening documentaries, or delightful children’s content.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                    Customer-Centric Support:
                                                    </Link>
                                                </h4>
                                                <p>
                                                Our dedicated team ensures your voice guides our journey. Your satisfaction is our destination.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                            <img src="/assets/img/phone-solid.png" alt="icon-img" className='img-fluid' width="30px" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                    Dual Delivery, Uninterrupted Pleasure:
                                                    </Link>
                                                </h4>
                                                <p>
                                                Tech Marketing Solutions Group LLC seamlessly combines satellite and internet streaming technologies. Expect crystal-clear imagery and sound, ensuring every moment on screen is captivating.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<< Faq Section Start >>*/}
                    
                    {/* Contact Section Start */}
                
                </div>

            </Layout>
        </>
    )
}