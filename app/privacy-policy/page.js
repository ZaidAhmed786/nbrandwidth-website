
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PrivacyPolicy() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Privacy Policy">
                <section className="news-standard fix section-padding">
                    <div className="container">
                        <div className="news-details-area">
                            <div className="row g-5">
                                <div className="col-12 col-lg-12">
                                <div className="section-title ">
                                <span className="wow fadeInUp fw-bold">Privacy Policy</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Your Privacy Matters to Us
                                </h2>
                                <p className="fw-semibold pt-5">At Tech Marketing Solutions Group LLC, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our Internet, cable, and phone services. By accessing or using our services, you consent to the practices described in this policy.</p>
                                </div>

                                  <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/circle-info-solid.png" alt="icon-img" className='img-fluid' width="25px" />
                                <h4>Information We Collect</h4>
                                </div>
                                <p className="fw-medium pt-3">
                                We may collect various types of information from you, including:</p>
                                <ul className="fw-medium pointer-event mt-3 ">
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" /> Personal Information: This may include your name, contact information (such as email address and phone number), and billing details.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" /> Usage Information: We collect information about how you use our website and services, including IP addresses, browser type, and device information.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" /> Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your browsing experience.</li>
                                </ul>

                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/shield-solid.png" alt="icon-img" className='img-fluid' width="25px" />
                                <h4>How We Use Your Information</h4>
                                </div>
                               
                                <ul className="fw-medium pointer-event mt-3 ">
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Providing Services: To deliver Internet, cable, and phone services, including billing and customer support.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" /> Improving Services: To enhance and customize your experience, develop new services, and conduct research and analysis.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Marketing: To send you promotional materials, offers, and updates about our services, with the option to opt out at any time.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Legal Compliance: To comply with legal obligations and resolve disputes.</li>
                                </ul>

                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/handshake-solid.png" alt="icon-img" className='img-fluid' width="25px" />
                                <h4>Sharing Your Information</h4>
                                </div>
                                <ul className="fw-medium pointer-event mt-3 ">
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Service Providers: Third-party vendors and partners who assist us in delivering our services.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Legal Requirements: When required by law, court order, or government authority.</li>
                                </ul>

                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/lock-solid.png" alt="icon-img" className='img-fluid' width="20px" />
                                <h4>Data Security</h4>
                                </div>
                                <p className="fw-medium pt-3">We implement reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your data.</p>


                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/user-shield-solid.png" alt="icon-img" className='img-fluid' width="25px" />
                                <h4>Your Rights</h4>
                                </div>

                                <ul className="fw-medium pointer-event mt-3 ">
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Access, correct, or delete your personal information.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Opt out of marketing communications.</li>
                                <li className="ms-3"><img src="/assets/img/hero/circle-dot-regular.png " className=" me-2" width="10px" />Disable cookies in your browser settings.</li>
                                </ul>

                                <p>
                                Tell us How Can We Help - We value your feedback and are here to help with any questions or concerns you may have about this Privacy Policy or your privacy rights. Contact us at <a href="mailto:sales@tmsgconsulting.online "  style={{color: "#06A3DA"}}>sales@tmsgconsulting.online </a>
                                </p>

                                </div>
                       
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}