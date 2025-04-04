import React from 'react'

function Added() {
  return (
    <>
    <section className="achievement-section fix section-padding mt-md-0 mt-1  ">
        <div className="container pt-5">
            <div className="section-title text-center"  >
                 <span className="wow fadeInUp fw-bold">Why Choose Us</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                We Are Here to Grow Your <br/> Business Exponentially
                </h2>
             </div>

            <div className='row  align-items-center justify-content-between pt-5'>

                <div className='col-lg-4 pt-lg-0 pt-5'>
                    <div>
                        <div><img src='/assets/img/cubes-solid.png' width="50px"  style={{backgroundColor: "#06a3da"}}   className='p-3'  /></div>
                        <h3 className='mt-3'>High-Speed Internet</h3>
                        <p className='mt-2'>Experience lightning-fast internet with our fiber-optic technology. Stream, work, and connect seamlessly.</p>
                    </div>  
                    <div className='pt-5'>
                        <div><img src='/assets/img/award-solid.png' width="50px"  style={{backgroundColor: "#06a3da"}}   className='p-3'  /></div>
                        <h3 className='mt-3'>Entertainment Bundles</h3>
                        <p className='mt-2'>Get the best of TV, internet, and phone services. Explore our entertainment bundles for a complete home experience.</p>
                    </div>
                    
                </div>
                <div className='col-lg-3 pt-lg-0 pt-5'>
                    <img src='/assets/img/virtual_office-break-room-66168-3.jpg'  className='' width="100%" height="400px"  />

                </div>
                <div className='col-lg-4 pt-lg-0 pt-5'>
                    <div>
                        <div><img src='/assets/img/users-solid (1).png' width="50px"  style={{backgroundColor: "#06a3da"}}   className='p-3'  /></div>
                        <h3 className='mt-3'>Solutions On Your Needs</h3>
                        <p className='mt-2'>Boost productivity with our tailored business, internet, and communication solutions. Stay connected and efficient.</p>
                    </div>
                    <div className='pt-5'>
                        <div><img src='/assets/img/phone-solid (1).png' width="50px"  style={{backgroundColor: "#06a3da"}}   className='p-3'  /></div>
                        <h3 className='mt-3'>24/7 Customer Support</h3>
                        <p className='mt-2'>Our dedicated support team is available around the clock to assist you with any issues, ensuring your services run smoothly without interruption.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
     </>
  )
}

export default Added