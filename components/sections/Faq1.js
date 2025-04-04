import Accordion1 from "../elements/Accordion1"


export default function Faq1() {
    return (
        <>
            <section className="faq-section fix section-padding">
                <div className="right-shape">
                    <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
                </div>
                <div className="faq-shape-box">
                    <div className="faq-shape">
                        <img src="/assets/img/faq/shape.png" alt="shape-img" />
                    </div>
                </div>
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4">
                            
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp text-white">Frequently Asked Questions</span>
                                        <h2 className="wow fadeInUp text-white" data-wow-delay=".3s">
                                        Got Questions? We’ve Got Answers!
                                        </h2>
                                    </div>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <Accordion1 />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="">
                                    <img src="/assets/img/virtual_office-meeting-room-66171-62.jpg" alt="" width="100%" height="500px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
