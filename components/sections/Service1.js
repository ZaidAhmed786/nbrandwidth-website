'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Our Services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Comprehensive Solutions for <br/> Your Connectivity Needs

                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/satellite-dish-solid.png" alt="icon-img" className='img-fluid' width="30px" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Satellite Internet
                                                </Link>
                                            </h4>
                                            <p>
                                            Reliable satellite internet for rural and remote areas, providing consistent connectivity where traditional services fall short.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/network-wired-solid.png" alt="icon-img" className='img-fluid' width="30px" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Fiber-Optic Internet
                                                </Link>
                                            </h4>
                                            <p>
                                            Experience ultra-fast fiber-optic internet with speeds up to 1 Gbps, ensuring seamless streaming, gaming, and browsing.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/tv-solid (1).png" alt="icon-img" className='img-fluid' width="30px" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                VoIP and Landline Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Affordable VoIP and landline services for clear and reliable voice communication, with flexible plans tailored to your needs.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/phone-solid.png" alt="icon-img" className='img-fluid' width="30px" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                TV and Streaming Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Bundled TV and streaming packages with your internet plan, providing entertainment options that cater to all tastes.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/wifi-solid (3).png" alt="icon-img" className='img-fluid' width="30px" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Wi-Fi Solutions
                                                </Link>
                                            </h4>
                                            <p>
                                            Comprehensive Wi-Fi solutions for homes and businesses, ensuring strong, uninterrupted wireless connectivity throughout your space.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}
