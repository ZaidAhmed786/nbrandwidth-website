import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                   
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <h2 className="text-white">Nationwide Bandwidth LLC</h2>
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        At Nationwide Bandwidth LLC, we are dedicated to providing top-notch internet services to homes and businesses. Our mission is to deliver fast, reliable, and affordable connectivity, ensuring you stay connected with the world seamlessly.
                                        </p>
                                        <p>
                                         Nationwide Bandwidth LLC
                                        </p>
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                432 Downing Cir, Davenport, FL 33897-8592
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+1 (863) 204-2262">+1 (863) 204-2262</Link>
                                            </li>
                                            <li className="d-flex ">
                                                <i className="fa-regular fa-envelope mt-1" />
                                                <Link href="/mailto:sales@nbandwidth.com ">sales@nbandwidth.com </Link>
                                            </li>
                                            <li className="d-flex ">
                                                <Link href="/"> <img src="./assets/img/cradit cards.png" className="img-fluid" /> </Link>
                                            </li>
                                        </ul>
                                      
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-carousel">
                                                <i className="fa-solid fa-chevron-right" />
                                                Internet Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Cable Deals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget ">
                                    <div className="widget-head">
                                        <h3>Popular Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/privacy-policy">
                                                <i className="fa-solid fa-chevron-right" />
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/refund">
                                                <i className="fa-solid fa-chevron-right" />
                                                Refund Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms">
                                                <i className="fa-solid fa-chevron-right" />
                                                Terms and conditions
                                            </Link>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-center mt-5 pt-4">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()}  |   Nation  <Link href="/">Bandwidth LLC</Link>
                            </p>
                           
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
