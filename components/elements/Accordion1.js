'use client'
import { useState } from 'react';
export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
      setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={activeItem  == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            What types of internet packages do you offer?
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem  == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        We offer a variety of internet packages, including cable, fiber-optic, satellite, and wireless options, tailored to meet your specific needs and preferences.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem  == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        What is the installation process for your internet?
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem  == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Our installation process is quick and easy. Once you've selected a plan, our technician will schedule a visit to set up your internet. The entire process usually takes less than an hour.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem  == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                          Do you offer customer support?                       </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        Yes, we offer 24/7 customer support. You can reach out to us anytime via phone, email, or chat. Our dedicated support team is here to help you with any issues or questions you may have.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
