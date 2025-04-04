import CounterUp from "../elements/CounterUp"


export default function Achievement1() {
    return (
        <>
            <section className="achievement-section fix section-padding pt-0">
                <div className="container">
                    <div className="achievement-wrapper">
                        
                        <div className="counter-area">
                           
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/hero/face-smile-solid (2).png" alt="icon-img" width="40px" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={50000}/></h2>
                                    <p>Satisfied Customers</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                <img src="/assets/img/hero/wifi-solid (4).png" alt="icon-img" width="40px" />
                                    
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={20000}/></h2>
                                    <p>High-Speed Connections</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                <img src="/assets/img/hero/trophy-solid (1).png" alt="icon-img" width="40px" />

                                </div>
                                <div className="content">
                                    <h2><CounterUp count={50}/></h2>
                                    <p>Industry Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
