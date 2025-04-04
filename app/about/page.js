
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import Link from "next/link"
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
            <div >
                <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title ">
                                <div className="row align-items-center ">
                                <div className=" col-lg-6 py-5"> 
                                
                                <span className="wow fadeInUp">ABOUT US</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Delivering Unmatched Connectivity Across the Nation
                                </h2>
                                <p className="fw-medium pt-5">
                                At Nationwide Bandwidth LLC, we are committed to providing the best in class Internet, cable, and phone services to our customers. Here’s how we stand out:
                                </p>
                                
                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/hero/bolt-solid.png" alt="icon-img" className='img-fluid' width="20px" />
                                <h3>Lightning-Fast Internet</h3>
                                </div>
                                <p className="fw-medium pt-4">
                                Stay ahead of the curve with our high-speed Internet, backed by robust network infrastructure for seamless browsing, streaming, and downloading.
                                 </p>

                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/tv-solid (1).png" alt="icon-img" className='img-fluid' width="25px" />
                                <h3>High-Quality Cable Services</h3>
                                </div>
                                <p className="fw-medium pt-4">
                                Enjoy uninterrupted entertainment with our extensive range of channels and crystal-clear picture quality, thanks to our expert cable installation team.
                                 </p>

                                 
                                <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/phone-solid.png" alt="icon-img" className='img-fluid' width="20px" />
                                <h3>Tailored Phone Plans</h3>
                                </div>
                                <p className="fw-medium pt-4">
                                Customize your communication experience with flexible phone plans tailored to your specific needs, offering unlimited calls, international coverage, and advanced features.
                                 </p>

                                 <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/headphones-solid.png" alt="icon-img" className='img-fluid' width="20px" />
                                <h3>Dedicated Support</h3>
                                </div>
                                <p className="fw-medium pt-4">
                                Count on our dedicated customer support team to assist you every step of the way, ensuring prompt resolution of inquiries and issues
                                 </p>

                                 <div className="d-flex align-items-center gap-3 mt-4">
                                <img src="/assets/img/map-location-solid.png" alt="icon-img" className='img-fluid' width="30px" />
                                <h3>Nationwide Coverage</h3>
                                </div>
                                <p className="fw-medium pt-4">
                                Wherever you are in the United States, we've got you covered with high-quality connectivity in urban centers and rural areas alike.
                                 </p>

                                

                                </div>
                                <div className="col-lg-6 col-12 text-lg-end pt-lg-0 pt-5">
                                <img src="/assets/img/virtual_office-common-area-66169-4.jpg " alt=""   width="90%" height="600px" />
                                </div>
                                 
                                </div>
                            </div>
                </div>
                </section>
                </div>
            </Layout>
        </>
    )
}